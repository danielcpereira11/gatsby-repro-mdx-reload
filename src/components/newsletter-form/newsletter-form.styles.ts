import { css } from "@emotion/core"
import { lg } from "@styles/breakpoints"

const newsletterFormStyles = {
  formWrapper: css`
    display: flex;
    padding: 12px 10px 12px 16px;
    background: rgba(255, 255, 255, 0.12);
  `,
  input: css`
    width: 100%;
    padding: 0;
    color: #ccc;
    background: transparent;
    border: 0;

    &:focus {
      outline: none;
    }
  `,
  submitButton: css`
    margin-left: auto;
    background: none;
    border: 0;

    &:focus {
      outline: none;
    }
  `,
  icon: css`
    color: white;

    &:hover {
      opacity: 0.8;
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
  alert: css`
    margin-top: 12px;
    margin-bottom: 0;
    border-radius: 0;
  `,
}

export { newsletterFormStyles }
