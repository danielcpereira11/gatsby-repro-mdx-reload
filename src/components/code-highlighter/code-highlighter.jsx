import React, { FC } from "react"

import Highlight, { defaultProps } from "prism-react-renderer"
import { MDXProviderProps } from "@mdx-js/react"

const CodeHighlighter = (props: MDXProviderProps) => {
  const className = props.children.props.className || ""
  const matches = className.match(/language-(?<lang>.*)/)
  return (
    <Highlight
      {...defaultProps}
      code={props.children.props.children}
      language={
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ""
      }
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export { CodeHighlighter }
