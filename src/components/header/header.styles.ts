import { css } from "@emotion/core"
import { colors } from "@styles/variables"
// import { sm, md, lg, xl } from "@styles/breakpoints"
// import { slideIn } from "@styles/animations"

const header = css`
  position: sticky;
  top: 0;
  z-index: 2;
  background: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

  img {
    max-width: 33px;
    margin-right: 30px;
  }

  .row > div {
    display: flex;
    align-items: center;
  }

  a {
    color: ${colors.black};

    &:hover {
      color: ${colors.blue};
      opacity: 0.8;
    }
  }
`

const navigation = css`
  padding: 10px 0;

  .navbar-nav {
    a.nav-link {
      margin-right: 28px;
      font-weight: 600;
      color: ${colors.black};

      &:focus,
      &:hover {
        color: ${colors.black};
      }

      &.blue {
        color: ${colors.blue};
      }
    }
  }

  .right-side {
    .nav-link:last-of-type {
      margin-right: 0;
    }
  }

  .navbar-toggler {
    font-size: 25px;
    color: ${colors.blue};
    border: 0;

    &:focus {
      outline: none;
    }
  }

  .sub-menu {
    left: -50%;
    border-radius: 4px;
  }

  .navbar-brand {
    padding: 0;
  }
`

export { header, navigation }
