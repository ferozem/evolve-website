import * as React from "react"
import * as faqStyles from "../styles/faq-section.module.css"

const FAQSection = () => {
  return (
    <section className={faqStyles.faq}>
      <div className={faqStyles.container}>
        <h2 className={faqStyles.title}>Frequently Asked Questions</h2>
        <ul className={faqStyles.questions}>
          <li className={faqStyles.question}>
            <h3>
              What level of English proficiency is required for this course?
            </h3>
            <p>
              Our Spoken English Master Course is designed for students with
              intermediate to advanced English proficiency. If you can read and
              understand English but struggle with speaking fluently, this
              course is perfect for you.
            </p>
          </li>
          {/* Add more questions and answers as needed */}
        </ul>
      </div>
    </section>
  )
}

export default FAQSection
