
import { useEffect, useState } from 'react'

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch('/api/facebook')
        const data = await response.json()

       if (!response.ok) {
          throw new Error(JSON.stringify(data.error || data))
        }

        setPosts(data.data || [])
      } catch (error) {
        console.error(error)
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    getPosts()
  }, [])

  return (
    <main className="home-intro">
      <section className="container py-5">

        {/* Header */}
        <div className="text-center mb-5">
          <span className="text-uppercase text-secondary small fw-semibold">
            Rodrigo • Piano Collection
          </span>

          <h1 className="display-5 fw-bold mt-2">
            Our Pianos
          </h1>

          <p className="text-secondary">
            Explore our latest piano listings and updates.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-5">
            <div className="spinner-border text-secondary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="text-secondary mt-3">
              Loading our latest posts...
            </p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="alert alert-danger text-center">
            {error}
          </div>
        )}

        {/* Posts */}
        {!loading && !error && (
          <>
            {posts.length > 0 ? (
              <div className="row g-4 p-4">
                {posts.map((post) => (
                  <div className="col-md-6 col-lg-4" key={post.id}>
                    <article className="card h-100 border-0 shadow-sm rounded-4">

                      <div className="card-body p-4 d-flex flex-column">

                        <small className="text-secondary">
                          {new Date(post.created_time).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </small>
                        <img src={post.attachments.data[0]['media']['image']['src']}/>

                          {console.log(post.attachments.data[0]['media']['image']['src'])}
                        <p className="card-text mt-3 py-5" style={{ whiteSpace: 'pre-line' }}>
                          {post.message || 'New update '}
                        </p>

                        <a
                          href={post.permalink_url}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-outline-dark rounded-pill mt-auto align-self-start"
                        >
                          View on Facebook →
                        </a>

                      </div>
                    </article>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-secondary py-5">
                No posts available at the moment.
              </p>
            )}
          </>
        )}

      </section>
    </main>
  )
}

export default Posts
