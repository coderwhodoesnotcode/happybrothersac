'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import dynamic from 'next/dynamic';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

export default function AdminBlogPage() {
  const supabase = createClient();
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [published, setPublished] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Auto-generate slug from title
  const handleTitleChange = (val) => {
    setTitle(val);
    setSlug(val.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''));
  };

  const fetchPosts = async () => {
    const { data } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });
    setPosts(data || []);
  };

  useEffect(() => { fetchPosts(); }, []);

  const resetForm = () => {
    setTitle(''); setSlug(''); setExcerpt('');
    setContent(''); setPublished(false); setEditingId(null);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const payload = {
      title, slug, excerpt, content, published,
      published_at: published ? new Date().toISOString() : null,
      updated_at: new Date().toISOString(),
    };

    if (editingId) {
      await supabase.from('posts').update(payload).eq('id', editingId);
    } else {
      await supabase.from('posts').insert(payload);
    }

    resetForm();
    fetchPosts();
    setLoading(false);
  };

  const handleEdit = (post) => {
    setEditingId(post.id);
    setTitle(post.title);
    setSlug(post.slug);
    setExcerpt(post.excerpt);
    setContent(post.content);
    setPublished(post.published);
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this post?')) return;
    await supabase.from('posts').delete().eq('id', id);
    fetchPosts();
  };

  const togglePublish = async (post) => {
    await supabase.from('posts')
      .update({ published: !post.published, published_at: !post.published ? new Date().toISOString() : null })
      .eq('id', post.id);
    fetchPosts();
  };

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: 32 }}>
      <h1>Blog Admin</h1>

      {/* FORM */}
      <div style={{ background: '#f9f9f9', padding: 24, borderRadius: 8, marginBottom: 40 }}>
        <h2>{editingId ? 'Edit Post' : 'New Post'}</h2>

        <input
          placeholder="Title"
          value={title}
          onChange={e => handleTitleChange(e.target.value)}
          style={inputStyle}
        />
        <input
          placeholder="Slug (auto-generated)"
          value={slug}
          onChange={e => setSlug(e.target.value)}
          style={inputStyle}
        />
        <input
          placeholder="Excerpt (short description)"
          value={excerpt}
          onChange={e => setExcerpt(e.target.value)}
          style={inputStyle}
        />

        <div data-color-mode="light" style={{ marginBottom: 16 }}>
          <MDEditor value={content} onChange={setContent} height={300} />
        </div>

        <label style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <input
            type="checkbox"
            checked={published}
            onChange={e => setPublished(e.target.checked)}
          />
          Publish immediately
        </label>

        <div style={{ display: 'flex', gap: 12 }}>
          <button onClick={handleSubmit} disabled={loading} style={btnStyle('#0070f3')}>
            {loading ? 'Saving...' : editingId ? 'Update Post' : 'Create Post'}
          </button>
          {editingId && (
            <button onClick={resetForm} style={btnStyle('#666')}>Cancel</button>
          )}
        </div>
      </div>

      {/* POSTS LIST */}
      <h2>All Posts</h2>
      {posts.map(post => (
        <div key={post.id} style={{ border: '1px solid #eee', borderRadius: 8, padding: 16, marginBottom: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <strong>{post.title}</strong>
            <span style={{ marginLeft: 12, fontSize: 12, color: post.published ? 'green' : 'gray' }}>
              {post.published ? '● Published' : '● Draft'}
            </span>
            <div style={{ fontSize: 12, color: '#999', marginTop: 4 }}>/blog/{post.slug}</div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={() => togglePublish(post)} style={btnStyle(post.published ? '#666' : 'green')}>
              {post.published ? 'Unpublish' : 'Publish'}
            </button>
            <button onClick={() => handleEdit(post)} style={btnStyle('#0070f3')}>Edit</button>
            <button onClick={() => handleDelete(post.id)} style={btnStyle('#e00')}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

const inputStyle = {
  width: '100%', padding: '10px 12px', marginBottom: 12,
  border: '1px solid #ddd', borderRadius: 6, fontSize: 14,
  boxSizing: 'border-box' as const,
};

const btnStyle = (bg: string) => ({
  background: bg, color: '#fff', border: 'none',
  padding: '8px 16px', borderRadius: 6, cursor: 'pointer', fontSize: 14,
});