import "../../styles/homepage.scss";


const HomeSection = () => {
  return (
    <section className='home' id='home'>

        <div className="content">
            <h3>best mobile app <span>showcase</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias sunt odio asperiores magni magnam mollitia itaque rerum doloremque placeat.</p>
            <a href="#" className="btn">download now</a>
        </div>

        <div className="image">
            <img src="images/home-img.png" alt="mobile" />
        </div>

    </section>
  )
}

export default HomeSection