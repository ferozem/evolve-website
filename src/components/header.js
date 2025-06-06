import * as React from "react"
import { Link } from "gatsby"
import * as headerStyles from "../styles/header.module.css"

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.headerContent}>
        <div className={headerStyles.logo}>
          <Link to="/">EVOLVE ACADEMY</Link>
        </div>
        {/* Add onClick event to the hamburger menu */}
        <div
          className={headerStyles.hamburgerMenu}
          onClick={toggleMenu}
          role="button"
          tabIndex={0}
          onKeyDown={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* <div
          className={`${headerStyles.dropdownMenu} ${
            menuOpen ? headerStyles.open : headerStyles.closed
          }`}
        > */}
        {/* <nav> */}
        <nav
          className={`${headerStyles.nav} ${
            menuOpen ? headerStyles.open : headerStyles.closed
          }`}
        >
          <ul className={headerStyles.menu}>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              {/* <Link to="/course-details" onClick={toggleMenu}>
                Course Details
              </Link> */}
              <a href="#course-details">Course Details</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      {/* </div> */}
    </header>
  )
}

export default Header
