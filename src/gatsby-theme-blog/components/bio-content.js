import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    Personal blog by{" "}
    <Styled.a href="https://monkeyandres.com/">Andres Martin Angulo</Styled.a>.
    <br />I write about my random thoughts and adventures.
  </Fragment>
)
