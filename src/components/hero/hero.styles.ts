import { css } from "@emotion/core"
import { colors } from "@styles/variables"
import { lg } from "@styles/breakpoints"

const heroStyles = (isSmall?: boolean) => {
  return css`
    padding: 50px 0;
    color: white;
    text-align: center;
    background: ${colors.blackish};

    ${lg} {
      padding: ${isSmall ? "70px 0" : "142px 0"};
    }

    .hero__title {
      margin-bottom: ${isSmall ? "0" : "24px"};
      font-size: 40px;
      white-space: pre-line;

      ${lg} {
        font-size: ${isSmall ? "40px" : "56px"};
      }
    }

    .hero__description {
      font-size: 16px;
      line-height: 28px;

      ${lg} {
        font-size: 18px;
      }
    }
  `
}

export { heroStyles }
