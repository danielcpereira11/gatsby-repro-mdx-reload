import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Slider } from "@components/slider/slider"

const TechnologiesCarousel = () => {
  const data = useStaticQuery(graphql`
    query technologiesCarousel {
      allFile(
        filter: {
          relativeDirectory: { eq: "technologies-carousel" }
          sourceInstanceName: { eq: "images" }
        }
      ) {
        nodes {
          publicURL
          id
        }
      }
    }
  `)

  return (
    <Slider
      images={data.allFile.nodes}
      options={{
        continuous: true,
        loop: true,
        breakpoints: {
          320: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        },
        imageMaxWidth: {
          mobile: 75,
          tablet: 100,
          desktop: 150,
        },
        otherOptions: {
          allowTouchMove: false,
        },
      }}
      sliderId={"technologies-slider"}
    />
  )
}

export { TechnologiesCarousel }
