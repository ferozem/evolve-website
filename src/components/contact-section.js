import * as React from "react"
import * as contactStyles from "../styles/contact-section.module.css"

const ContactSection = () => {
  return (
    <section id="contact" className={contactStyles.contact}>
      <div className={contactStyles.container}>
        <h2 className={contactStyles.title}>Contact Us</h2>
        <div className={contactStyles.contactDetails}>
          {/* <div className={contactStyles.contactForm}>
            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" />

              <label htmlFor="message">Message:</label>
              <textarea id="message" />

              <button type="submit">Send Message</button>
            </form>
          </div> */}
          <div className={contactStyles.contactInfo}>
            <p>Email: evolvetraining7@gmail.com</p>
            <p>Call / Whatsapp us at: +91 9000309560</p>
            <p>Follow us on social media:</p>
            {/* Replace '#' with your actual social media links */}
            <a href="#" className={contactStyles.socialLink}>
              Facebook
            </a>
            <a href="#" className={contactStyles.socialLink}>
              Twitter
            </a>
            <a href="#" className={contactStyles.socialLink}>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
