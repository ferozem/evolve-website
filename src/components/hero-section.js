import * as React from "react"
import * as heroStyles from "../styles/hero-section.module.css"
import heroImage from "/src/images/hero.png"

const HeroSection = () => {
  return (
    <section id="hero" className={heroStyles.hero}>
      <div className={heroStyles.container}>
        <img className={heroStyles.heroimage} src={heroImage} alt="Hero" />

        <div>
          <h1 className={heroStyles.headline}>Speak Your Way to Success</h1>
          <p className={heroStyles.description}>
            Unlock limitless possibilities with our Spoken English Master Course
          </p>
          <button
            className={heroStyles.cta}
            onClick={() => {
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSehynGP2lFiBwJEFc4jTNf2qx8ugIJVtepxgk3Fkn292UzXrA/viewform",
                "_blank"
              )
            }}
          >
            Enroll Now!
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
