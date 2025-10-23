import { Post } from "../types";
import PostCard from "./PostCard";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

interface Props {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

export default function PostList({ posts, setPosts }: Props) {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('');

  const handleDelete = (id: number) => {
    if (window.confirm("Bạn có chắc muốn xóa bài viết này?")) {
      setPosts(posts.filter((p) => p.id !== id));
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <button onClick={() => navigate('/create')}>+ Viết bài mới</button>
        <input placeholder="Tìm theo tiêu đề..." value={filter} onChange={e => setFilter(e.target.value)} />
        <h3 style={{ marginLeft: 'auto' }}>Tổng số bài viết: {posts.length}</h3>
      </div>
      <div className="grid">
        {posts
          .filter(p => p.title.toLowerCase().includes(filter.toLowerCase()))
          .map((p) => (
            <PostCard key={p.id} post={p} onDelete={handleDelete} />
          ))}
      </div>
    </div>
  );
}
