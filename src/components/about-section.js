import * as React from "react"
import * as aboutStyles from "../styles/about-section.module.css"

const AboutSection = () => {
  return (
    <section className={aboutStyles.about}>
      <div className={aboutStyles.container}>
        <h3 className={aboutStyles.trainerTitle}>Meet the Trainer</h3>
        <div className={aboutStyles.trainerProfile}>
          <img
            className={aboutStyles.trainerImage}
            src="https://via.placeholder.com/150"
            alt="Trainer's profile picture"
          />
          <div className={aboutStyles.trainerInfo}>
            <h4 className={aboutStyles.trainerName}>John Doe</h4>
            <p className={aboutStyles.trainerBio}>
              John Doe is a highly experienced English language trainer with
              over 10 years of experience in teaching spoken English to students
              from various backgrounds. He holds a Master's degree in English
              and has helped thousands of students achieve their goals in
              communication.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
