import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <div>
        <main>{children}</main>
        <footer
          style={{
            // marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
            textAlign: "center",
            // padding: "1rem",
          }}
        >
          {/* © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a> */}
        </footer>
      </div>
    </>
  )
}

export default Layout
