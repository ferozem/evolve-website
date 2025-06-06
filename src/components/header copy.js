import * as React from "react"
import { Link } from "gatsby"
import * as headerStyles from "../styles/header.module.css"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.headerContent}>
        <div className={headerStyles.logo}>
          <Link to="/">EVOLVE ACADEMY</Link>
        </div>
        <nav>
          <ul className={headerStyles.menu}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/course-details">Course Details</Link>
            </li>
            <li>
              <Link to="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
