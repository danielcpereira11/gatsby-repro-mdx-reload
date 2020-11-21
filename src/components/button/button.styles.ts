import { css } from "@emotion/core"
import { colors } from "@styles/variables"

const buttonStyles = (uppercase: boolean, type: "fill" | "border") => {
  const buttonType = (type: string) =>
    type === "fill"
      ? `color: white; background-color: ${colors.blue}; border: 1px solid transparent;`
      : "border: 1px solid rgba(255, 255, 255, 0.2); color: white;"

  return css`
    display: inline-block;
    padding: 13px 16px;
    ${uppercase ? "text-transform: uppercase;" : ""}
    ${buttonType(type)}

    &:hover {
      text-decoration: none;

      ${type === "border"
        ? `color: white; background-color: ${colors.blue}`
        : `color: white; background-color: ${colors.darkBlue}`}
    }
  `
}

export { buttonStyles }
