import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

export default props => (
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
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>{props.title} — {data.site.siteMetadata.title}</title>
      </Helmet>
    )}
  />
)
