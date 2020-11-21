// import PropTypes from "prop-types"
import React, { FC, useState } from "react"
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"

interface TabItem {
  title: string
  content: JSX.Element | string
}

interface TabsProps {
  items: Array<TabItem>
}

const TabsComponent: FC<TabsProps> = ({ items }) => {
  const [openTab, setTab] = useState<string | null>(items[0].title)

  return (
    <Tabs activeKey={openTab} onSelect={k => setTab(k)}>
      {items.map(item => (
        <Tab eventKey={item.title} title={item.title} key={item.title}>
          {item.content}
        </Tab>
      ))}
    </Tabs>
  )
}

export { TabsComponent }
