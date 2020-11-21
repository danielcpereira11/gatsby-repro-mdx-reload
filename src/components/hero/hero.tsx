import React, { FC, ReactElement, Fragment } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { heroStyles } from "./hero.styles"

interface HeroProps {
  title: string
  description?: ReactElement | string
  isSmall?: boolean
}

const Hero: FC<HeroProps> = ({ title, description, children, isSmall }) => (
  <section id="hero" css={heroStyles(isSmall)} className="hero">
    <Container>
      <Row>
        <Col
          sm={{ span: 12 }}
          md={{ span: 8, offset: 2 }}
          xl={{ span: 6, offset: 3 }}
        >
          <h1 className="hero__title">{title}</h1>
          {!isSmall && (
            <Fragment>
              <p className="hero__description">{description}</p>
              {children}
            </Fragment>
          )}
        </Col>
      </Row>
    </Container>
  </section>
)

export { Hero }
