import { css } from "@emotion/core"
import { fonts } from "@styles/variables"

const accordionStyles = {
  single: css`
    padding: 20px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);

    &:last-child {
      padding-bottom: 0;
      border-bottom: 0;
    }
  `,
  title: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-family: ${fonts.headings};
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
  `,
  content: css`
    margin-top: 16px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1px;
  `,
  icon: (isOpen: boolean) => css`
    transition: transform 0.3s ease-in-out;

    ${isOpen && `transform:rotate(180deg);`}
  `,
}

export { accordionStyles }
