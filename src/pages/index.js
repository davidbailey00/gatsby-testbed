import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import indexStyles from "../scss/index.module.scss"

export default ({ data }) => (
  <Layout>
    <Head title="Home" />
    <h1 className={indexStyles.header}>Amazing Pandas Eating Things</h1>
    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Link to={node.fields.slug} className={indexStyles.link}>
          <h3 className={indexStyles.articleTitle}>
            {node.frontmatter.title}
            <span className={indexStyles.date}> — {node.frontmatter.date}</span>
          </h3>
          <p>{node.excerpt}</p>
        </Link>
      </div>
    ))}
    <p>
      <Link to="/invalid-page/">404 link for testing</Link>
    </p>
    <p>
      <Link to="/invalid-page/?somequery=2">404 with query string</Link>
    </p>
    <p>
      <Link to="/about-test?somequery=5">Mismatching canonical URL</Link>
    </p>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
