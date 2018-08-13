import React from "react"
import Radium from "radium"
import { Link } from "gatsby"

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

const Layout = props => (
  <div style={styles.layout}>
    <Link to="/">
      <h3 style={styles.title}>{props.title}</h3>
    </Link>
    <Link to="/about/" style={styles.about}>
      About
    </Link>
    {props.children}
  </div>
)

export default Radium(Layout)
