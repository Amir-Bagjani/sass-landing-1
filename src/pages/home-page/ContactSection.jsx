import React from 'react'

const ContactSection = () => {
  return (
    <section className='contact' id='contact'>

        <div className="image">
          <img src="images/contact-img.png" alt="contact" />
        </div>

        <form>
          <h1 className="heading">contact us</h1>

          <div className="inputBox">
            <input type="text" required />
            <label>name</label>
          </div>
          <div className="inputBox">
            <input type="email" required />
            <label>email</label>
          </div>
          <div className="inputBox">
            <input type="number" required />
            <label>phone</label>
          </div>
          <div className="inputBox">
            <textarea required />
            <label>message</label>
          </div>

          <input type="submit" value="send message" className='btn' />
        </form>

    </section>
  )
}

export default ContactSection