import { css } from "@emotion/core"
import { fonts, colors } from "@styles/variables"

const baseStyles = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${fonts.headings};
  }

  h1 {
    font-size: 40px;
    font-weight: 600;
  }

  h2 {
    font-size: 32px;
  }

  h3 {
    font-size: 28px;
  }

  h4 {
    font-size: 24px;
  }

  h5 {
    font-size: 20px;
  }

  h6 {
    font-size: 16px;
  }

  p {
    margin-bottom: 0;
    font-size: 16px;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
  }

  ul {
    padding-left: 0;
    margin: 0;
  }

  a {
    color: ${colors.blue};

    &:hover {
      text-decoration: none;
    }
  }
`

export default baseStyles
