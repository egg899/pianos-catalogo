
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="home-hero d-flex align-items-center text-white">
        <div className="container">
          <div className="row justify-content-center text-center py-4">
            <div className="col-lg-7">
              <p className="text-uppercase mb-3">The Art of Music</p>

              <h1 className="display-1 fw-light mb-4 text-white">
                Find Your Perfect Piano.
              </h1>

              <p className="lead mb-4">
                Discover beautiful pianos for every musical journey.
                Find the instrument that inspires you.
              </p>

              <Link to="/posts" className="btn btn-outline-light btn-lg">
                Explore Our Pianos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <div className="home-intro">
      <section className=" container py-5">
        <div className="row justify-content-center text-center py-4 ">
          <div className="col-lg-8">
            <p className="text-uppercase text-secondary">Our Passion</p>
            <h2 className="display-5 mb-4">More Than Just a Piano</h2>
            <p className="lead text-secondary shadeb">
              Every piano has a story. Discover instruments that bring
              music, elegance and inspiration into your home.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="container pb-5">
        <div className="row g-4 p-4">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=900"
              alt="Grand piano"
              className="img-fluid w-100 rounded"
            />
          </div>

          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1552422535-c45813c61732?w=900"
              alt="Piano keys"
              className="img-fluid w-100 rounded"
            />
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="container text-center py-5">
        <h2 className="display-6 mb-3 shadew">Looking for Your Next Piano?</h2>
        <p className="text-secondary mb-4 text-white">
          Explore our latest listings and get in touch.
        </p>

        <Link to="/posts" className="btn btn-dark btn-lg ">
          View Our Pianos
        </Link>
      </section>
      </div>
    </>
  )
}

export default Home
