import * as React from "react"
import * as testimonialsStyles from "../styles/testimonials-section.module.css"

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className={testimonialsStyles.testimonials}>
      <div className={testimonialsStyles.container}>
        <h2 className={testimonialsStyles.title}>Testimonials</h2>
        <div className={testimonialsStyles.testimonialList}>
          {/* Replace the dummy testimonials below with real testimonials */}
          <div className={testimonialsStyles.testimonial}>
            <p className={testimonialsStyles.quote}>
              "Her way of teaching is so natural that everyone automatically
              feels connected to her and learns alot without even putting much
              efforts."
            </p>
            <p className={testimonialsStyles.author}>- Zoha</p>
          </div>
          <div className={testimonialsStyles.testimonial}>
            <p className={testimonialsStyles.quote}>
              "Mrs. Ayesha Ameer is our passionate instructor and guide, who is
              enthusiastic about teaching. She has been very humble, kind,
              supportive, and punctual throughout the course. Ma'am, you are a
              fantastic teacher whose interest in teaching inspired me to write.
              You are so dedicated and patient with students. You must have
              spent sleepless nights working hard to cover the topics taught.
              Ma'am, you are the tutor who went above and beyond to ensure that
              students are well-versed in the content."
            </p>
            <p className={testimonialsStyles.author}>- Thameem</p>
          </div>
          {/* <div className={testimonialsStyles.testimonial}>
            <p className={testimonialsStyles.quote}>
              "The Spoken English Master Course not only improved my English but
              also boosted my confidence. The trainers were supportive and
              always encouraged me to express myself. A truly transformative
              experience!"
            </p>
            <p className={testimonialsStyles.author}>- John Smith</p>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
