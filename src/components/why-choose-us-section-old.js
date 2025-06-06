import * as React from "react"
import * as whyChooseUsStyles from "../styles/why-choose-us-section-old.module.css"

const WhyChooseUsSectionOld = () => {
  return (
    <section className={whyChooseUsStyles.whyChooseUs}>
      <div className={whyChooseUsStyles.container}>
        <h2 className={whyChooseUsStyles.title}>Why Choose Us?</h2>
        <div className={whyChooseUsStyles.content}>
          <p>
            Our innovative Spoken English Master Course employs unique teaching
            methods that merge real-life situations, group discussions, and
            entertaining activities to generate a lively and engaging learning
            environment. This immersive approach goes beyond merely instructing
            you on the rules of English grammar. Instead, we delve into the
            heart of the language, empowering you to understand it deeply and
            express yourself with confidence and clarity.
          </p>
          <p>
            Our dedicated and passionate trainer, Ayesha Ameer holding an M.A.
            in Teaching of English as a Second Language (TESL) from EFLU(the
            esteemed English & Foreign Languages Central University of India),
            is committed to your success. With years of experience in the field,
            she brings unmatched expertise and enthusiasm to each session,
            ensuring you receive personalized attention and support.
          </p>
          <p>
            By blending expert instruction with enjoyable, interactive learning
            experiences, our course sets you on the path to mastering English
            and transforming your communication abilities.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSectionOld
