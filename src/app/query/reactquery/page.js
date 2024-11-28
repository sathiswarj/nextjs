'use client';  
import { useQuery } from '@tanstack/react-query';

export default function PostPage() {
   async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();  
  }

 
  const { isLoading, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts, 
  });

 
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

   return (
    <>
      <div className="list-container">
        <div className="list-section">
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
