import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import layoutStyles from "../scss/layout.module.scss"

export default ({ children }) => (
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
      <div className={layoutStyles.layout}>
        <Link to="/">
          <h3 className={layoutStyles.title}>{data.site.siteMetadata.title}</h3>
        </Link>
        <Link to="/about/" className={layoutStyles.about}>
          About
        </Link>
        {children}
      </div>
    )}
  />
)
