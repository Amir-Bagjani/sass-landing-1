import React from 'react'

const FeaturesSection = () => {
  return (
    <section className='features' id='features'>

        <h1 className="heading">app features</h1>

        <div className="box-container">

            <div className="box">
                <img src="images/f-icon1.png" alt="feature" />
                <h3>amazing UI design</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam voluptas nobis quibusdam, suscipit quod rem soluta architecto ducimus fugit eveniet.</p>
                <a href="#" className="btn">read more</a>
            </div>
            <div className="box">
                <img src="images/f-icon2.png" alt="feature" />
                <h3>soft and smooth animations</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam voluptas nobis quibusdam, suscipit quod rem soluta architecto ducimus fugit eveniet.</p>
                <a href="#" className="btn">read more</a>
            </div>
            <div className="box">
                <img src="images/f-icon3.png" alt="feature" />
                <h3>friendly intractions</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam voluptas nobis quibusdam, suscipit quod rem soluta architecto ducimus fugit eveniet.</p>
                <a href="#" className="btn">read more</a>
            </div>

        </div>

    </section>
  )
}

export default FeaturesSection