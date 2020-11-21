import React, { FC } from "react"
import Image  from "react-bootstrap/Image"
import { Link } from "gatsby"
import NavItem from "react-bootstrap/NavItem"
import NavLink from "react-bootstrap/NavLink"
import Dropdown from "react-bootstrap/Dropdown"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { platformMenuStyles } from "./platform-menu.styles"
import { dropdown } from "@styles/components/header/dropdown.styles"

export const PlatformMenu: FC<PlatformMenuProps> = ({
  title,
  description,
  menuItems,
}) => {
  return (
    <Dropdown as={NavItem} css={dropdown}>
      <Dropdown.Toggle as={NavLink} id={title}>
        {title}
        <FontAwesomeIcon icon={faChevronDown} />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <div className="sub-menu d-flex" css={platformMenuStyles}>
          <div className="text-side flex-wrap">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className="navigation-side">
            <ul>
              {menuItems.map(item => (
                <li key={item.title}>
                  <Link to={item.path}>
                    <div className="d-flex align-items-center">
                      <Image src={item.imageUrl} roundedCircle />
                      <div className="flex-wrap">
                        <span className="link-text">{item.title}</span>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  )
}
