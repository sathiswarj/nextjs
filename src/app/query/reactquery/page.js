'use client';
import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { postFn } from '../api';

export default function PostPage() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const queryClient = useQueryClient();

  // Fetch posts
  async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }

  const { isLoading, error, data = [] } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  // Post mutation
  const { mutate, isError, isLoading: isPosting, error: postError, reset } = useMutation({
    mutationFn: postFn,
  });

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get('title');
    const body = formData.get('body');

    const newPost = { id: data.length + 1, title, body };

 
    mutate(newPost, {
      onSuccess: () => {
        console.log('Post submitted successfully!');
        setTitle('');
        setBody('');
        //Post with previous data array
        queryClient.setQueryData(['posts'], (oldData) => [...oldData, newPost]);
        // exact:true,
        // predicate: (query) => query.queryKey[0] === "posts" && query.queryKey[1].page >= 2 
        
        reset();
      },
      onError: (error) => {
        console.error('Error submitting post:', error);
      },
    });

    e.target.reset();  
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="list-container">
        <div className="list-section">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your title"
              name="title"
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter your content"
              name="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <button type="submit" disabled={isPosting}>
              {isPosting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
        <div className="list-heading">
          <h3>List of Posts</h3>
        </div>
        <div className="list">
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

    
    </>
  );
}
