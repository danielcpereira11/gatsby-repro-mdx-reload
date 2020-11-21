import React, { FC } from "react"
import { buttonStyles } from "@components/button/button.styles"

interface LinkButtonProps extends ButtonProps {
  url: string
  newTab?: boolean
}

const LinkButton: FC<LinkButtonProps> = ({
  url,
  type,
  label,
  uppercase,
  newTab,
}) => (
  <a
    href={url}
    target={newTab ? "_blank" : undefined}
    css={buttonStyles(uppercase ? uppercase : false, type)}
  >
    {label}
  </a>
)

export { LinkButton }
