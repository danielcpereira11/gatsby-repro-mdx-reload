import React, { FC } from "react"
import Image  from "react-bootstrap/Image"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import NavItem from "react-bootstrap/NavItem"
import NavLink from "react-bootstrap/NavLink"
import Dropdown from "react-bootstrap/Dropdown"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import { developersMenuStyles } from "./developers-menu.styles"
import { dropdown } from "@styles/components/header/dropdown.styles"

export const DevelopersMenu: FC<DevelopersMenuProps> = ({
  title,
  description,
  sections,
}) => {
  return (
    <Dropdown as={NavItem} css={dropdown}>
      <Dropdown.Toggle as={NavLink} id={title}>
        {title}
        <FontAwesomeIcon icon={faChevronDown} />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <div className="sub-menu d-flex" css={developersMenuStyles}>
          <div className="text-side flex-wrap">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className="navigation-side">
            <Row className="align-items-start">
              {sections.map(section => (
                <Col
                  lg={6}
                  key={section.title}
                  className="flex-wrap menu-section"
                >
                  <h3>{section.title}</h3>
                  <ul>
                    {section.items.map(item => (
                      <li key={item.path}>
                        <a
                          href={item.path}
                          className="d-flex align-items-center"
                        >
                          <Image src={item.imageUrl} roundedCircle />
                          <div className="flex-wrap">
                            <span className="link-text">{item.title}</span>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                  {section.viewAll && (
                    <Link to={section.viewAll.path} className="view-all-link">
                      <span>{section.viewAll.text}</span>
                      <FontAwesomeIcon icon={faChevronRight} />
                    </Link>
                  )}
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Dropdown.Menu>
    </Dropdown>

    // <NavDropdown title={title} id={title} css={dropdown}>

    // </NavDropdown>
  )
}
