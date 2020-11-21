import { css } from "@emotion/core"
import { colors } from "@styles/variables"
import { md } from "@styles/breakpoints"

const footerBase = css`
  padding-top: 40px;
  color: white;
  background: ${colors.blackish};
`

const logoStyles = css`
  max-width: 44px;
  margin-bottom: 20px;
`

const infoSection = css`
  .footer__newsletter {
    color: #ccc;

    ${md} {
      max-width: 315px;
    }
  }

  .footer__newsletter-description {
    margin-bottom: 24px;
    font-size: 14px;
    line-height: 20px;
  }

  .footer__navigation {
    margin-top: 20px;

    ${md} {
      margin-top: 0;
    }
  }

  .footer__menu {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    font-size: 15px;
    list-style: none;

    li {
      width: 50%;
      margin-bottom: 15px;

      &:nth-last-of-type(-n + 2) {
        margin-bottom: 0;
      }

      a {
        font-weight: 500;
        color: white;

        &:hover {
          font-weight: 700;
          text-decoration: none;
        }
      }
    }
  }

  .footer__address {
    margin-top: 20px;

    ${md} {
      margin-top: 0;
      text-align: right;
    }

    p {
      font-size: 14px;
    }

    a {
      color: inherit;
    }
  }
`

const copyrightSection = css`
  margin-top: 40px;
  ${md} {
    margin-top: 70px;
  }

  .footer__copyright-inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    padding: 20px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.16);
  }

  .footer__copyright-info {
    flex-wrap: wrap;
    align-items: center;

    p {
      margin-right: 25px;
      font-size: 14px;
      line-height: 20px;
      color: #ccc;
    }

    ul {
      display: flex;
      margin: 20px 0;
      list-style: none;

      ${md} {
        margin: 0;
      }

      li:first-of-type {
        margin-right: 24px;
      }

      li a {
        font-size: 14px;
        line-height: 20px;
        color: #ccc;
        opacity: 0.4;
      }
    }
  }

  .footer__system-status {
    display: flex;

    ${md} {
      justify-content: flex-end;
    }
  }
`
export { footerBase, logoStyles, infoSection, copyrightSection }
