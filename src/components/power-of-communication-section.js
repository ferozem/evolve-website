import * as React from "react"
import * as communicationStyles from "../styles/power-of-communiation.module.css"
import iconImage1 from "../images/fence1.png"
import iconImage2 from "../images/comment-smile2.png"
// import iconImage3 from "../images/users1.png"
import iconImage3 from "../images/people-arrows-left-right.png"

const PowerOfCommunicationSection = () => {
  const features = [
    {
      title: "Overcome Barriers",
      icon: iconImage1,
      description:
        "Have you ever felt the frustration of being unable to express yourself, held back by language barriers? You're not alone. Many people face challenges in their personal and professional lives due to their lack of fluency in English. We will help you overcome these obstacles, empowering you to communicate effectively and confidently.",
    },
    {
      title: "Unlock Expression",
      icon: iconImage2,
      description:
        "Imagine the joy of finally being able to share your thoughts and ideas with ease. Feel the satisfaction of connecting with colleagues, friends, and family without hesitation. Our course will guide you through a journey of self-discovery, as you unlock the power of communication and transform your life.",
    },
    {
      title: "Master Communication",
      icon: iconImage3,
      description:
        "Through real-world scenarios, lively conversations, and a nurturing learning environment, you'll develop essential skills in grammar, tenses, and parts of speech. Participate in group discussions, roleplays, and interactive exercises that foster fluency and enhance your listening and speaking abilities.",
    },
  ]

  return (
    <section id="about" className={communicationStyles.section}>
      <h2 className={communicationStyles.heading}>Sky is the limit</h2>
      {/* <h3>Everything you need to start creating a homepage today</h3> */}
      <div className={communicationStyles.container}>
        {features.map((feature, index) => (
          <div key={index}>
            <img
              className={communicationStyles.icon}
              src={feature.icon}
              alt="Icon"
            />
            {/* <div className={communicationStyles.icon}>{feature.icon}</div> */}
            <h4 className={communicationStyles.title}>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PowerOfCommunicationSection
