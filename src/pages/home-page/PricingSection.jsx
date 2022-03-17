import React from 'react'

const PricingSection = () => {
  return (
    <section className='pricing' id='pricing'>

        <h1 className="heading">our pricing plan</h1>

        <div className="box-container">

            <div className="box">
                <h3 className="title">basic</h3>
                <div className="price">$10 <span>monthly</span></div>
                <ul>
                    <li><i className="fas fa-check"></i> 1000+ downloads</li>
                    <li><i className="fas fa-check"></i> no transaction fee</li>
                    <li><i className="fas fa-times"></i> unlimited storage</li>
                    <li><i className="fas fa-times"></i> 5 download</li>
                </ul>
                <a href="#" className="btn">checkout</a>
            </div>
            <div className="box">
                <h3 className="title">standard</h3>
                <div className="price">$15 <span>monthly</span></div>
                <ul>
                    <li><i className="fas fa-check"></i> 1000+ downloads</li>
                    <li><i className="fas fa-check"></i> no transaction fee</li>
                    <li><i className="fas fa-check"></i> unlimited storage</li>
                    <li><i className="fas fa-times"></i> 5 download</li>
                </ul>
                <a href="#" className="btn">checkout</a>
            </div>
            <div className="box">
                <h3 className="title">premium</h3>
                <div className="price">$25 <span>monthly</span></div>
                <ul>
                    <li><i className="fas fa-check"></i> 1000+ downloads</li>
                    <li><i className="fas fa-check"></i> no transaction fee</li>
                    <li><i className="fas fa-check"></i> unlimited storage</li>
                    <li><i className="fas fa-check"></i> 5 download</li>
                </ul>
                <a href="#" className="btn">checkout</a>
            </div>

        </div>

    </section>
  )
}

export default PricingSection