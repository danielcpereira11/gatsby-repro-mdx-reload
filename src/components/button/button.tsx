import React, { FC } from "react"
import { buttonStyles } from "./button.styles"

interface RegularButtonProps extends ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button: FC<RegularButtonProps> = ({ onClick, label }) => {
  return (
    <button onClick={onClick} css={buttonStyles(false, "fill")}>
      {label}
    </button>
  )
}

export { Button }
