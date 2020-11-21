import { css } from "@emotion/core"
import { subMenu } from "@styles/components/header/sub-menu.styles"
import { lg } from "@styles/breakpoints"
import { colors } from "@styles/variables"

const developersMenuStyles = css`
  flex-wrap: wrap;
  ${subMenu}
  .navigation-side {
    h3 {
      width: 100%;
      margin-bottom: 1.3px;
      font-size: 20px;
      font-weight: 600;
    }

    .menu-section {
      margin-bottom: 15px;

      ${lg} {
        margin-bottom: 0;

        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }

    ul {
      ${lg} {
        min-width: 560px;
      }
    }

    a {
      img {
        max-width: 24px;
        margin-right: 10px;
      }
    }

    .view-all-link {
      width: 100%;
      margin-top: 22px;
      font-size: 18px;
      font-weight: 600;
      color: ${colors.blue};

      svg {
        margin-left: 10px;
        font-size: 15px;
      }
    }
  }
`

export { developersMenuStyles }
