import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import blogPostStyles from "../scss/blog-post.module.scss"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <h4 className={blogPostStyles.date}>{post.frontmatter.date}</h4>
      <div className={blogPostStyles.body} dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

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
