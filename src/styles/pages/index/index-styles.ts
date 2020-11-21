import { css } from "@emotion/core"
import { md, lg } from "@styles/breakpoints"

const heroButtonsWrapper = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  a {
    width: 100%;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }

    ${md} {
      max-width: calc(50% - 8px);
      margin-bottom: 0;
      font-size: 14px;
    }

    ${lg} {
      font-size: 16px;
    }
  }

  a:first-of-type {
    ${md} {
      margin-right: 16px;
    }
  }
`

const sectionTitleStyles = css`
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: bold;

  ${lg} {
    font-size: 40px;
  }
`
const homepageSection = css`
  padding: 30px 0;
  ${lg} {
    padding: 60px 0;
  }
`

const sectionUserExperience = css`
  ${homepageSection}
  .hs-user-experience__left {
    padding-right: 30px;
  }

  .hs-user-experience__split-column {
    margin-bottom: 30px;

    ${lg} {
      margin-bottom: 0;
    }
  }

  .hs-user-experience__subtitle {
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 500;
  }

  .hs-user-experience__text {
    font-size: 14px;
  }
`

const sectionIntegrations = css`
  padding: 30px 0;

  ${lg} {
    padding: 60px 0;
  }

  .hs-integrations__left {
    img {
      display: block;
      max-width: 60%;
      margin: 0 auto 20px;

      ${md} {
        max-width: 80%;
        margin-bottom: 0;
      }
    }
  }

  .hs-integrations__right-inner {
    ${lg} {
      margin-top: 100px;
      margin-left: 55px;
    }

    p {
      ${md} {
        margin-bottom: 4rem;
      }
    }
  }
`

export {
  heroButtonsWrapper,
  sectionTitleStyles,
  sectionUserExperience,
  sectionIntegrations,
}
