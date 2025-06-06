import * as React from "react"
// import * as communicationStyles from "../styles/power-of-communiation.module.css"
import * as whyChooseUsStyles from "../styles/why-choose-us-section.module.css"

const WhyChooseUsSection = () => {
  const features = [
    {
      title: "Immersive Learning",
      icon: "Icon",
      description:
        "Our innovative Spoken English Master Course employs unique teaching methods that merge real-life situations, group discussions, and entertaining activities to generate a lively and engaging learning environment. This immersive approach goes beyond merely instructing you on the rules of English grammar. Instead, we delve into the heart of the language, empowering you to understand it deeply and express yourself with confidence and clarity.",
    },
    {
      title: "Expert Guidance",
      icon: "Icon",
      description:
        "Our dedicated and passionate trainer, Ayesha Ameer holding an M.A.in Teaching of English as a Second Language (TESL) from EFLU(the esteemed English & Foreign Languages Central University of India), is committed to your success. With years of experience in the field, she brings unmatched expertise and enthusiasm to each session, ensuring you receive personalized attention and support.",
    },
    {
      title: "Transformational Experience",
      icon: "Icon",
      description:
        "By blending expert instruction with enjoyable, interactive learning experiences, our course sets you on the path to mastering English and transforming your communication abilities.",
    },
  ]

  return (
    <section className={whyChooseUsStyles.section}>
      <h2 className={whyChooseUsStyles.heading}>Why choose us?</h2>
      {/* <h3>Everything you need to start creating a homepage today</h3> */}
      <div className={whyChooseUsStyles.container}>
        {features.map((feature, index) => (
          <div key={index}>
            <div className={whyChooseUsStyles.icon}>{feature.icon}</div>
            <h4 className={whyChooseUsStyles.title}>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyChooseUsSection
