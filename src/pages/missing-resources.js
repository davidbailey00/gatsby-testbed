import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

export default () => (
  <Layout>
    <Head title="Missing Resources" />
    <h1>Missing Resources</h1>
    <p>
      This is a page with missing resources
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
