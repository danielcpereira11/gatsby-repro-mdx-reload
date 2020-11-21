const breakpoints = {
  _sm: "567px",
  _md: "768px",
  _lg: "992px",
  _xl: "1200px",
}

const media = (pixels: string) => `@media (min-width: ${pixels})`
const { _sm, _md, _lg, _xl } = breakpoints

export const sm = media(_sm)
export const md = media(_md)
export const lg = media(_lg)
export const xl = media(_xl)
