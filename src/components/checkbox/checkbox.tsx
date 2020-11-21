import React, { FC } from "react"
import { css } from "@emotion/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { colors } from "@styles/variables"

interface CheckboxProps {
  active: boolean
  label: string
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  disabled?: boolean
}

const Checkbox: FC<CheckboxProps> = ({ active, label, onClick, disabled }) => {
  const boxStyles = css`
    border: solid 1.5px rgba(255, 255, 255, 0.24);
    cursor: pointer;
    display: block;
    display: flex;
    align-items: center;
    padding: 4px;
    color: ${colors.blackish};
    font-size: 15px;
    opacity: ${disabled ? 0.8 : 1};

    ${active &&
      `
      background-color: ${colors.blue};
      color: white;
      border: 1.5px solid transparent;
    `};
  `

  const labelStyles = css`
    font-size: 14px;
    opacity: 0.92;
    margin-left: 12px;
    text-transform: capitalize;
    line-height: 26px;
  `

  return (
    <div className="d-flex align-items-center checkbox-wrapper">
      <div
        className="checkbox"
        css={boxStyles}
        onClick={
          !disabled
            ? onClick
            : e => {
                e.preventDefault
              }
        }
      >
        <FontAwesomeIcon icon={faCheck} />
      </div>
      <p css={labelStyles}>{label}</p>
    </div>
  )
}

export { Checkbox }
