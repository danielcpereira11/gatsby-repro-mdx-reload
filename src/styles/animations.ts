import { css } from "@emotion/core"
// import { sm, md, lg, xl } from "@styles/breakpoints"

const slideIn = css`
  animation-name: slideIn;
  animation-duration: 0.3s;
  animation-fill-mode: both;

  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }

    0% {
      opacity: 0;
      transform: translateY(10px);
    }
  }
`

const slideOut = css`
  animation-name: slideOut;
  animation-duration: 0.3s;
  animation-fill-mode: both;

  @keyframes slideOut {
    from {
      opacity: 1;
      transform: translateY(10px);
    }

    to {
      opacity: 0;
      transform: translateY(0);
    }
  }
`

export { slideIn, slideOut }
