import * as React from "react"
import * as whyStyles from "../styles/why-section.module.css"

const WhySection = () => {
  const features = [
    {
      // title: "Immersive Learning",
      icon: "Immersive Learning",
      // description: "",
    },
    {
      // title: "Wide variety of practice opportunities",
      // icon: "02",
      description:
        "We employ unique teaching methods that merge real-life situations, group discussions, and entertaining activities to generate a lively and engaging learning environment. This immersive approach goes beyond merely instructing you on the rules of English grammar. Instead, we delve into the heart of the language, empowering you to understand it deeply and express yourself with confidence and clarity.",
    },
    {
      // title: "Role-plays, exciting conversations, fun activities",
      icon: "Expert<br/>Guidance",
      // description:
      // "Interactive, dynamic role-plays and conversations, combined with enjoyable activities for immersive learning.",
    },
    {
      // title: "Master grammar, tenses, pronunciation",
      // icon: "04",
      description:
        "Our dedicated and passionate trainer, Ayesha Ameer holding an M.A. in Teaching of English as a Second Language (TESL) from EFLU(the esteemed English & Foreign Languages Central University of India), is committed to your success. With years of experience in the field, she brings unmatched expertise and enthusiasm to each session, ensuring you receive personalized attention and support.",
    },
    {
      // title: "Learn to avoid common English errors",
      icon: "Transformational Experience",
      // description:
      //   "Expert guidance on identifying and eliminating typical English errors for polished, error-free speech.",
    },
    {
      // title: "Improve vocabulary and speak like a pro",
      // icon: "06",
      description:
        "	By blending expert instruction with enjoyable, interactive learning experiences, our course sets you on the path to mastering English and transforming your communication abilities.",
    },
  ]

  return (
    <section className={whyStyles.section}>
      <h2 className={whyStyles.heading}>Why choose us?</h2>
      {/* <h3>Everything you need to know for fluency in English</h3> */}
      <div className={whyStyles.container}>
        {features.map((feature, index) => (
          <div
            key={index}
            className={
              index % 2 === 0 ? whyStyles.leftColumn : whyStyles.rightColumn
            }
          >
            <div className={whyStyles.icon}>
              <div dangerouslySetInnerHTML={{ __html: feature.icon }} />
              {/* {feature.icon} */}
            </div>
            <p>{feature.description}</p>
            <h4 className={whyStyles.title}>{feature.title}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhySection
