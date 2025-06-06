import * as React from "react"
import * as featureStyles from "../styles/features-section.module.css"

const FeaturesSection = () => {
  const features = [
    {
      title: "50 hours of focused training program",
      icon: "01",
      description:
        "Comprehensive, intensive 50-hour curriculum for rapid skill development and language proficiency boost.",
    },
    {
      title: "Wide variety of practice opportunities",
      icon: "02",
      description:
        "Diverse, engaging practice sessions tailored to build fluency, ensuring ample opportunity for skill refinement.",
    },
    {
      title: "Role-plays, exciting conversations, fun activities",
      icon: "03",
      description:
        "Interactive, dynamic role-plays and conversations, combined with enjoyable activities for immersive learning.",
    },
    {
      title: "Master grammar, tenses, pronunciation",
      icon: "04",
      description:
        "In-depth mastery of grammar, tenses, and pronunciation for clear, articulate, and accurate communication.",
    },
    {
      title: "Learn to avoid common English errors",
      icon: "05",
      description:
        "Expert guidance on identifying and eliminating typical English errors for polished, error-free speech.",
    },
    {
      title: "Improve vocabulary and speak like a pro",
      icon: "06",
      description:
        "Enhance your vocabulary with essential words and phrases, empowering you to speak with eloquence and confidence.",
    },
  ]

  return (
    <section id="features" className={featureStyles.section}>
      <h2 className={featureStyles.heading}>The all-in-one solution</h2>
      <h3>Everything you need to know for fluency in English</h3>
      <div className={featureStyles.container}>
        {features.map((feature, index) => (
          <div key={index}>
            <div className={featureStyles.icon}>{feature.icon}</div>
            <h4 className={featureStyles.title}>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection
