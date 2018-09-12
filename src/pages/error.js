import React from "react"
import { Link } from "gatsby"

export default class extends React.Component {
  throwError() {
    throw new Error(`Error triggered by clicking the paragraph`)
  }

  render() {
    return (
      <>
        <p onClick={this.throwError}>
          This page will error upon clicking this paragraph, but the link below
          can still be clicked:
        </p>
        <p>
          <Link to="/">Link</Link>
        </p>
      </>
    )
  }
}
