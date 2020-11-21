import { css } from "@emotion/core"
import { colors } from "@styles/variables"

export const formStyles = css`
  label {
    width: 100%;
  }

  textarea {
    min-height: 130px;
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: 12px 16px;
    margin-top: 6px;
    margin-bottom: 16px;
    background-image: linear-gradient(
      to bottom,
      rgba(9, 19, 33, 0.06),
      rgba(9, 19, 33, 0.06)
    );
    border: 1px solid transparent;

    &:focus,
    &:active {
      border: 1px solid ${colors.blue};
      outline: none;
    }
  }

  .alert {
    font-size: 14px;
  }

  .select-component {
    &__control {
      margin-top: 6px;
      margin-bottom: 16px;
      background-image: linear-gradient(
        to bottom,
        rgba(9, 19, 33, 0.06),
        rgba(9, 19, 33, 0.06)
      );
      border: 0;
      border-radius: 0;

      &:focus,
      &:active {
        border: 1px solid ${colors.blue};
      }
    }

    &__value-container {
      padding: 10px 16px;
    }

    &__input input {
      margin: 0;
    }

    &__indicator-separator {
      display: none;
    }
  }

  span.label {
    font-size: 1.4px;
  }

  input[type="submit"] {
    width: 100%;
    padding: 12px 0;
    color: white;
    background: ${colors.blue};
  }
`
