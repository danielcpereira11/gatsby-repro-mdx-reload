import { css } from "@emotion/core"
import { colors } from "@styles/variables"
import { lg } from "@styles/breakpoints"

const subMenu = css`
  flex-wrap: wrap;
  padding: 10px 0;

  ${lg} {
    flex-wrap: nowrap;
  }

  .text-side {
    margin-bottom: 10px;

    ${lg} {
      margin-bottom: 0;
      border-right: solid 1px rgba(0, 0, 0, 0.08);
    }

    * {
      ${lg} {
        min-width: 280px;
      }
    }
  }

  .text-side,
  .navigation-side {
    ${lg} {
      padding: 35px 40px;
    }
  }

  .navigation-side {
    ul {
      padding-left: 0;
      list-style: none;

      ${lg} {
        min-width: 500px;
      }

      li {
        margin-bottom: 20px;

        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }

    a {
      display: block;
      color: ${colors.black};

      &:hover {
        p {
          ${colors.black}
        }

        h3 {
          color: ${colors.blue};
        }
      }

      img {
        max-width: 50px;
        margin-right: 20px;
      }

      .link-text {
        font-size: 18px;
        font-weight: 500;
      }
    }
  }

  h2 {
    display: none;
    margin-bottom: 20px;
    font-size: 40px;
    font-weight: bold;

    ${lg} {
      display: block;
    }
  }

  .rounded-circle {
    border-radius: 50%;
  }
`
export { subMenu }
