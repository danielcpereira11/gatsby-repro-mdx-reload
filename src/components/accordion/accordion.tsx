// import PropTypes from "prop-types"
import React, { FC, useState } from "react"
import Collapse from "react-bootstrap/Collapse"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { accordionStyles } from "./accordion.styles"

interface AccordionItem {
  title: string
  content: JSX.Element
}

interface AccordionProps {
  items: Array<AccordionItem>
}

const Accordion: FC<AccordionProps> = ({ items }) => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div
          key={index}
          className="accordion__single"
          css={accordionStyles.single}
        >
          <div
            className="accordion__title"
            onClick={() =>
              openAccordion === index
                ? setOpenAccordion(null)
                : setOpenAccordion(index)
            }
            css={accordionStyles.title}
          >
            {item.title}
            <FontAwesomeIcon
              icon={faChevronDown}
              css={accordionStyles.icon(openAccordion === index)}
            />
          </div>
          <Collapse in={index === openAccordion}>
            <div className="accordion__content-wrapper">
              <div className="accordion__content" css={accordionStyles.content}>
                {item.content}
              </div>
            </div>
          </Collapse>
        </div>
      ))}
    </div>
  )
}

export { Accordion }
