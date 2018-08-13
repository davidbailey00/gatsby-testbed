import React from "react"
import Radium from "radium"
import { StaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

const styles = {
  layout: {
    margin: `0 auto`,
    maxWidth: `700px`,
    padding: `${rhythm(1.5)} ${rhythm(2)} ${rhythm(2)}`,
  },
  title: {
    marginBottom: rhythm(2),
    display: `inline-block`,
    fontStyle: `normal`,
  },
  about: {
    float: `right`,
  },
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div style={styles.layout}>
        <Link to="/">
          <h3 style={styles.title}>{data.site.siteMetadata.title}</h3>
        </Link>
        <Link to="/about/" style={styles.about}>
          About
        </Link>
        {children}
      </div>
    )}
  />
)

export default Radium(Layout)
