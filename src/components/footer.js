import * as React from "react"
import * as footerStyles from "../styles/footer.module.css"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.container}>
        <p className={footerStyles.copyright}>
          &copy; {new Date().getFullYear()} Spoken English Course. All rights
          reserved.
        </p>
        <nav className={footerStyles.footerNav}>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
