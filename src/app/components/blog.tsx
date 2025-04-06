'use client';

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Modal from './Modal';
import rehypeRaw from 'rehype-raw';
import { Post } from '../components/posts';
import Navbar from './Navbar';
import Footer from '../components/footer';

interface BlogListProps {
  posts: Post[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  if (!posts.length) {
    return <div>No posts found. Please check your _posts folder.</div>;
  }

  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (post: Post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPost(null);
    setIsModalOpen(false);
  };

  return (
    <div>
    <div className = "text-black" style={{ padding: '20px' }}>
      <Navbar scrollSet={false} opacitySet={false}/>
      <h1 className = "text-5xl font-bold text-center mt-10 mb-10">Blog Posts</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
        }}
      >
        {posts.map((post) => (
          <div
            key={post.slug}
            onClick={() => openModal(post)}
            style={{
              border: '1px solid #ddd',
              padding: '10px',
              borderRadius: '4px',
              cursor: 'pointer',
              backgroundColor: '#e6e4d8'
            }}
          >
            <div style={{ color: '#666', marginBottom: '8px' }}>{post.date}</div>
            <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>
              {post.title}
            </div>
            {/* <img
              src={post.image}
              alt={post.title}
              style={{ width: '100%' }}
            /> */}
          </div>
        ))}
      </div>

      <Modal open={isModalOpen} onClose={closeModal}>
        {selectedPost && (
          <div>
            <h2>{selectedPost.title}</h2>
            <p style={{ color: '#666' }}>{selectedPost.date}</p>
            <ReactMarkdown rehypePlugins={[rehypeRaw]} >{selectedPost.content}</ReactMarkdown>
          </div>
        )}
      </Modal>
    </div>
    <Footer/>
    </div>
  );
};

export default BlogList;
