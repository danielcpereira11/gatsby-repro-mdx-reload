import { css } from "@emotion/core"
import { lg } from "@styles/breakpoints"
import { slideIn } from "@styles/animations"

const dropdown = css`
  &.show {
    &::after {
      position: absolute;
      top: 50%;
      top: 42px;
      left: calc(50% - 14px);
      z-index: 99999;
      font-size: 50px;
      color: white;
      text-align: center;
      text-shadow: 0 4px 4px rgba(0, 0, 0, 0.04);
      transform: translateX(-50%) translateY(-50%) rotate(180deg);

      ${lg} {
        content: "▾";
      }
    }
  }

  .dropdown-toggle {
    color: black;

    svg {
      margin-left: 6px;
      font-size: 12px;
    }

    &::after {
      content: none;
    }
  }

  .dropdown-menu {
    top: calc(100% + 9px);
    left: -100%;
    padding: 0;
    border: 0;

    ${lg} {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    }

    &.show {
      ${slideIn}
    }
  }
`

export { dropdown }
