import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer className='footer'>

        <div className="box-container">

            <div className="box">
                <h3>about us</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam natus dicta deleniti fuga obcaecati repellendus.</p>
            </div>

            <div className="box">
                <h3>quick links</h3>
                <a href="#home">home</a>
                <a href="#features">features</a>
                <a href="#about">about</a>
                <a href="#review">review</a>
                <a href="#pricing">pricing</a>
                <a href="#contact">contact</a>
            </div>

            <div className="box">
                <h3>follow us</h3>
                <a href="#">facebook</a>
                <a href="#">instagram</a>
                <a href="#">pinterest</a>
                <a href="#">twitter</a>
            </div>

            <div className="box">
                <h3>contact info</h3>
                <div className="info">
                    <i className="fas fa-phone"></i>  
                    <p>+123-456-789 <br /> +111-222-3333</p>
                </div>
                <div className="info">
                    <i className="fas fa-envelope"></i>  
                    <p>amirbagjani@gmial.com <br /> amirbagjani@gmial.com</p>
                </div>
                <div className="info">
                    <i className="fas fa-map-marker-alt"></i>  
                    <p>tehran, iran - 885530475</p>
                </div>
            </div>

        </div>

        <h1 className="credit"> &copy; copyright @ 2022 by amir bagjani </h1>

    </footer>
  )
}

export default Footer