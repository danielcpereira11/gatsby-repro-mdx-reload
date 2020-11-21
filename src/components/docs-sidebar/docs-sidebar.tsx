import React, { FC } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const DocsSidebar: FC = () => {
  return (
    <Col as="aside" md={3}>
      <ul>
        <li>Menu Item</li>
      </ul>
    </Col>
  )
}

export { DocsSidebar }
