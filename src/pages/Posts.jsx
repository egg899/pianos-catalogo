
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
          throw new Error('Could not load piano listings.')
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
    <main className="home-intro bg-light p-4">

      {/* Header */}
      <section className="container pt-5 pb-4">

        <div className="text-center mb-5">

          <span className="text-uppercase fw-semibold text-warning small">
            Rodrigo's Pianos
          </span>

          <h1 className="display-4 fw-bold mt-2 mb-3">
            Our Piano Collection
          </h1>

          <p className="text-secondary mx-auto" style={{ maxWidth: '550px' }}>
            Discover our selection of pianos, carefully chosen
            for their quality, character and sound.
          </p>

          <div
            className="mx-auto bg-warning"
            style={{ width: '55px', height: '3px' }}
          />

        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-5">

            <div
              className="spinner-border text-warning"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>

            <p className="text-secondary mt-3">
              Discovering our latest pianos...
            </p>

          </div>
        )}

        {/* Error */}
        {error && (
          <div className="alert alert-light border text-center py-4">
            <p className="mb-0 text-secondary">
              {error}
            </p>
          </div>
        )}

        {/* Posts */}
        {!loading && !error && (

          posts.length > 0 ? (

            <div className="row g-4">

              {posts.map((post) => {

                const image =
                  post.attachments?.data?.[0]?.media?.image?.src

                const postDate = new Date(post.created_time)

                return (

                  <div
                    className="col-md-6 col-lg-4"
                    key={post.id}
                  >

                    <article
                      className="card h-100 border-0 rounded-3 overflow-hidden"
                      style={{
                        boxShadow: '0 5px 25px rgba(0,0,0,0.07)',
                        transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                      }}
                    >

                      {/* Piano Image */}
                      {image ? (

                        <div
                          className="position-relative overflow-hidden bg-white"
                          style={{ height: '270px' }}
                        >

                          <img
                            src={image}
                            alt="Piano for sale"
                            className="w-100 h-100"
                            style={{
                              objectFit: 'cover',
                              display: 'block'
                            }}
                            loading="lazy"
                          />

                          <span
                            className="position-absolute top-0 start-0 m-3 badge bg-dark bg-opacity-75 fw-normal px-3 py-2"
                          >
                            Piano Collection
                          </span>

                        </div>

                      ) : (

                        <div
                          className="d-flex align-items-center justify-content-center bg-dark text-warning"
                          style={{ height: '180px' }}
                        >
                          <div className="text-center">
                            <div style={{ fontSize: '40px' }}>
                              ♫
                            </div>
                            <small className="text-white-50">
                              Rodrigo's Pianos
                            </small>
                          </div>
                        </div>

                      )}

                      {/* Card Content */}
                      <div className="card-body p-4 d-flex flex-column">

                        <small className="text-secondary mb-2">
                          {Number.isNaN(postDate.getTime())
                            ? ''
                            : postDate.toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                        </small>

                        <p
                          className="card-text text-dark mb-4"
                          style={{
                            whiteSpace: 'pre-line',
                            lineHeight: '1.7',
                            overflowWrap: 'anywhere'
                          }}
                        >
                          {post.message || 'Discover this piano from our collection.'}
                        </p>

                        <a
                          href={post.permalink_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-dark rounded-pill w-100 mt-auto py-2"
                        >
                          View Details
                          <span className="ms-2 text-warning">→</span>
                        </a>

                      </div>

                    </article>

                  </div>

                )
              })}

            </div>

          ) : (

            <div className="text-center py-5">
              <h4 className="fw-semibold">
                No Pianos Available
              </h4>

              <p className="text-secondary">
                Check back soon for our latest updates.
              </p>
            </div>

          )

        )}

      </section>

    </main>
  )
}

export default Posts
