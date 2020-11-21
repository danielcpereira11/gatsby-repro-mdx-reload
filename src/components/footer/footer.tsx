import React, { FC, Fragment } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Link } from "gatsby"
import {
  footerBase,
  logoStyles,
  infoSection,
  copyrightSection,
} from "./footer.styles"



const showFullFooter = false

const Footer: FC = () => (
  <footer id="main-footer" css={footerBase}>
    <Container>
      <Row>
        <Col sm={12}>
        </Col>
      </Row>
    </Container>
    <section css={infoSection}> 
      <Container>
        <Row>
          <Col md={4} className="footer__newsletter">
            <p className="footer__newsletter-description">
              Join our newsletter to stay up to date on features and releases
            </p>
          </Col>
          {showFullFooter && (
            <Fragment>
              <Col md={{ span: 4, offset: 1 }} className="footer__navigation">
                <ul className="footer__menu"> 
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <a href="#">Documentation</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Solutions</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </Col>
            </Fragment>
          )}
          <Col className="footer__address ml-auto" md={3}>
            
          </Col>
        </Row>
      </Container>
    </section>
    <section css={copyrightSection}>
      <Container>
        <Row className="justify-content-between">
          <div className="footer__copyright-inner">
            <Col md={7} className="d-flex footer__copyright-info">

              {showFullFooter && (
                <ul>
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/terms-of-service">Terms of Service</Link>
                  </li>
                </ul>
              )}
            </Col>
            <Col className="footer__system-status">
            </Col>
          </div>
        </Row>
      </Container>
    </section>
  </footer>
)

export { Footer }
