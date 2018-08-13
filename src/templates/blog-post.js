import React from "react"
import Radium from "radium"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const styles = {
  date: {
    color: `#bbb`,
  },
}

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <h4 style={styles.date}>{post.frontmatter.date}</h4>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export default Radium(BlogPost)

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`
