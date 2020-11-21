interface ImageObject {
  childImageSharp: {
    fluid?: FluidObject
    fixed?: FixedObject
  }
  publicURL?: string
  id: string
}
