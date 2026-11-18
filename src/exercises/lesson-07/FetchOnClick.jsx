import { useState } from 'react';
import { getSinglePost } from './api.js';
import './Lesson07Styles.css';

export default function FetchOnClick() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleGetPost() {
    setLoading(true);
    setError('');

    try {
      const data = await getSinglePost(1);
      setPost(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>

      <button type="button" onClick={handleGetPost} disabled={loading}>
        {loading ? 'Loading...' : 'Get post'}
      </button>

      <div className="content">
        {loading && <p>Loading post...</p>}

        {error && <p role="alert">{error}</p>}

        {post && !loading && !error && (
          <article>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        )}
      </div>
    </div>
  );
}
