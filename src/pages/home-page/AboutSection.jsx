import React from 'react'

const AboutSection = () => {
  return (
    <section className='about' id='about'>

        <h1 className="heading">about the app</h1>

        <div className="column">

            <div className="image">
                <img src="images/about-img.png" alt="about" />
            </div>

            <div className="content">
                <h3>easy and perfect solution for your business App</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui unde porro sunt similique beatae corporis explicabo autem minima mollitia consectetur.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam laborum optio incidunt repudiandae repellendus? Quae repellendus quam quis iure commodi?</p>
                <div className="buttons">
                    <a href="#" className="btn"><i className="fab fa-apple"></i> app store</a>
                    <a href="#" className="btn"><i className="fab fa-google-play"></i> google-play</a>
                </div>
            </div>

        </div>

    </section>
  )
}

export default AboutSection