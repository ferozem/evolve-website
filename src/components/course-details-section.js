import * as React from "react"
import * as courseStyles from "../styles/course-details-section.module.css"
import Layout from "../components/layout"

const CourseDetailsSection = () => {
  return (
    <Layout>
      <section id="course-details" className={courseStyles.courseDetails}>
        <div className={courseStyles.container}>
          <h2 className={courseStyles.title}>
            How this course will benefit you
          </h2>
          <ul className={courseStyles.highlights}>
            <li className={courseStyles.highlight}>
              Boost English Proficiency for Career Growth
            </li>
            <li className={courseStyles.highlight}>
              Learn Easy Techniques for English Fluency
            </li>
            <li className={courseStyles.highlight}>
              Eliminate Common Errors for Clear English
            </li>
            <li className={courseStyles.highlight}>
              Strengthen Communication for Lasting Impressions
            </li>
            <li className={courseStyles.highlight}>
              Perfect Your Pronunciation and Confidence
            </li>
            <li className={courseStyles.highlight}>
              Expand Vocabulary for Improved Expression
            </li>
            <li className={courseStyles.highlight}>
              Master Tenses for Effortless Communication
            </li>
            <li className={courseStyles.highlight}>
              Hone Grammar Skills for Accuracy
            </li>
            <li className={courseStyles.highlight}>
              Boost Interview Skills for Job Success
            </li>
            <li className={courseStyles.highlight}>
              Improve Accent for Clearer Conversations
            </li>
          </ul>
          <div className={courseStyles.durationSchedule}>
            <h3>Course Duration & Schedule</h3>
            <p>
              The course lasts for 4 weeks, with classes held 6 times a week.
              Each class is 2 hours long, ensuring you have plenty of time to
              practice and improve your spoken English skills.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default CourseDetailsSection
