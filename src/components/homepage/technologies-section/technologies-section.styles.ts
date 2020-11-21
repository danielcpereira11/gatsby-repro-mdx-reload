import { css } from "@emotion/core"
import { colors } from "@styles/variables"
import { lg } from "@styles/breakpoints"

const technologiesSectionStyles = {
  section: css`
    padding: 60px 0;
    margin-bottom: 10px;
    background: ${colors.blackish};

    ${lg} {
      padding: 130px 0;
    }
  `,
  title: css`
    width: 100%;
    margin: 0;
    margin-bottom: 60px;
    font-size: 30px;
    font-weight: bold;
    color: white;
    text-align: center;

    ${lg} {
      margin-bottom: 130px;
      font-size: 56px;
    }
  `,
}

export { technologiesSectionStyles }
