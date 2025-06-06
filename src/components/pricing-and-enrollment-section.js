import * as React from "react"
import * as pricingStyles from "../styles/pricing-and-enrollment-section.module.css"

const PricingAndEnrollmentSection = () => {
  return (
    <section className={pricingStyles.pricing}>
      <div className={pricingStyles.container}>
        <h2 className={pricingStyles.title}>Pricing & Enrollment</h2>
        <div className={pricingStyles.coursePrice}>
          <p className={pricingStyles.price}>
            Acutal Fee:
            <span
              className={`${pricingStyles.amount} ${pricingStyles.largeText}`}
            >
              <s> Rs. 3,499</s>
            </span>
          </p>
          <p className={pricingStyles.price}>
            Special Discounted Fee(temporary):
            <span
              className={`${pricingStyles.amount} ${pricingStyles.largeText}`}
            >
              {" "}
              Rs. 999
            </span>{" "}
            only
          </p>

          {/* <p className={pricingStyles.offer}>
            Enroll now and get a 10% early-bird discount!
          </p> */}
        </div>
        <div className={pricingStyles.enrollment}>
          <p className={pricingStyles.seats}>
            Hurry up! Only a few seats left. Don't miss your chance to transform
            your English speaking skills.
          </p>
          <button
            className={pricingStyles.cta}
            onClick={() => {
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSehynGP2lFiBwJEFc4jTNf2qx8ugIJVtepxgk3Fkn292UzXrA/viewform",
                "_blank"
              )
            }}
          >
            Secure Your Spot Now!
          </button>
        </div>
      </div>
    </section>
  )
}

export default PricingAndEnrollmentSection
