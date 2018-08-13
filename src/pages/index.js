import React from "react"
import { graphql } from "gatsby"
import Radium from "radium"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

const styles = {
  header: {
    display: `inline-block`,
    borderBottom: `1px solid`,
  },
  articleTitle: {
    marginBottom: rhythm(1 / 4),
  },
  date: {
    color: `#bbb`,
  },
}

const Index = ({ data }) => (
  <Layout title={data.site.siteMetadata.title}>
    <h1 style={styles.header}>Amazing Pandas Eating Things</h1>
    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <h3 style={styles.articleTitle}>
          {node.frontmatter.title}
          <span style={styles.date}> — {node.frontmatter.date}</span>
        </h3>
        <p>{node.excerpt}</p>
      </div>
    ))}
  </Layout>
)

export default Radium(Index)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
