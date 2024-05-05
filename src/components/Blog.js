const Blog = () => {
    return (
        <section className="blog section" id="blog">
        <div className="blog__container container">
          <h2 className="section__title">
             <br />
About us
          </h2>

          <div className="blog__content grid">
            <article className="blog__card">
              <div className="blog__image">
                <img src="./media/blog1.jpg" alt="" className="blog__img" />
                <a href="#blog" className="blog__button">
                  <i className="bx bx-right-arrow-alt"></i>
                </a>
                <div className="blog__stats">
                  <div className="blog__reaction">
                    <i className="bx bx-comment"></i>
                    <span>12</span>
                  </div>
                  <div className="blog__reaction">
                    <i className="bx bx-show"></i>
                    <span>76,5k</span>
                  </div>
                </div>
              </div>

              <div className="blog__data">
                <h2 className="blog__title">Our Services</h2>
                <p className="blog__description">
                  The best choice for our community<br></br>
                  Select our services and receive the quality products
                </p>
              </div>
            </article>
            <article className="blog__card">
              <div className="blog__image">
                <img src="./media/blog2.jpg" alt="" className="blog__img" />
                <a href="#blog" className="blog__button">
                  <i className="bx bx-right-arrow-alt"></i>
                </a>
                <div className="blog__stats">
                  <div className="blog__reaction">
                    <i className="bx bx-comment"></i>
                    <span>96</span>
                  </div>
                  <div className="blog__reaction">
                    <i className="bx bx-show"></i>
                    <span>356,7k</span>
                  </div>
                </div>
              </div>

              <div className="blog__data">
                <h2 className="blog__title">Delivery</h2>
                <p className="blog__description">
                  At your door we delivery our product as fast as you need
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    )
}
export default Blog