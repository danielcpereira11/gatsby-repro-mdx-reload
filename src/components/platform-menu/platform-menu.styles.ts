import { css } from "@emotion/core"
import { subMenu } from "@styles/components/header/sub-menu.styles"
// import { sm, md, lg, xl } from "@styles/breakpoints"
// import { colors } from "@styles/variables"

const platformMenuStyles = css`
  ${subMenu}

  flex-wrap: wrap;
  padding: 10px 0;

  .navigation-side {
    img {
      max-width: 50px;
      margin-right: 20px;
    }
  }
`

export { platformMenuStyles }
