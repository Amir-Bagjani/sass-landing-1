
const ReviewSection = () => {
  return (
    <section className='review' id='review'>
        <h1 className="heading">people's review</h1>

        <div className="box-container">

            <div className="box">
                <i className="fas fa-quote-right"></i>
                <div className="user">
                    <img src="images/pic1.png" alt="customer" />
                    <h3>john doe</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <div className="comment">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint tempora eum dolorem? Quas numquam aperiam nulla explicabo. Fugit dolorem ducimus a dolorum voluptas corrupti accusantium perferendis corporis magni, quae totam!
                    </div>
                </div>
            </div>
            <div className="box">
                <i className="fas fa-quote-right"></i>
                <div className="user">
                    <img src="images/pic2.png" alt="customer" />
                    <h3>john doe</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <div className="comment">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint tempora eum dolorem? Quas numquam aperiam nulla explicabo. Fugit dolorem ducimus a dolorum voluptas corrupti accusantium perferendis corporis magni, quae totam!
                    </div>
                </div>
            </div>
            <div className="box">
                <i className="fas fa-quote-right"></i>
                <div className="user">
                    <img src="images/pic3.png" alt="customer" />
                    <h3>john doe</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                    <div className="comment">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint tempora eum dolorem? Quas numquam aperiam nulla explicabo. Fugit dolorem ducimus a dolorum voluptas corrupti accusantium perferendis corporis magni, quae totam!
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default ReviewSection;