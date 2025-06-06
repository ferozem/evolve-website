import * as React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import HeroSection from "../components/hero-section"
import AboutSection from "../components/about-section"
import CourseDetailsSection from "../components/course-details-section"
import WhySection from "../components/why-section"
import WhyChooseUsSectionOld from "../components/why-choose-us-section-old"
import TestimonialsSection from "../components/testimonials-section"
import PricingAndEnrollmentSection from "../components/pricing-and-enrollment-section"
import FAQSection from "../components/faq-section"
import ContactSection from "../components/contact-section"
import Footer from "../components/footer"
import FeaturesSection from "../components/features-section"
import PowerOfCommunicationSection from "../components/power-of-communication-section"

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <HeroSection />
      <PowerOfCommunicationSection />
      {/* <AboutSection /> */}
      <CourseDetailsSection />
      <FeaturesSection />

      {/* <WhyChooseUsSection /> */}
      <WhySection />
      {/* <WhyChooseUsSectionOld /> */}
      <TestimonialsSection />
      <PricingAndEnrollmentSection />
      {/* <FAQSection /> */}
      <ContactSection />
      <Footer />
    </Layout>
  )
}

export default IndexPage
