// import PropTypes from "prop-types"
import React, { useEffect, FC } from "react"
import { css } from "@emotion/core"
import Img from "gatsby-image"
import Swiper, { SwiperOptions } from "swiper"
import { colors } from "@styles/variables"
import { md, lg } from "@styles/breakpoints"
import "swiper/css/swiper.css"

interface SliderOptions {
  showNavigation?: boolean
  showPagination?: boolean
  loop?: boolean
  autoplay?: number
  slidesPerView?: number
  continuous?: boolean
  speed?: number
  spaceBetween?: number
  imageMaxWidth?: {
    mobile: number
    tablet?: number
    desktop: number
  }
  breakpoints?: { [index: number]: SwiperOptions }
  otherOptions?: SwiperOptions
}

interface SliderProps {
  images: Array<ImageObject>
  options: SliderOptions
  sliderId: string
}

const Slider: FC<SliderProps> = ({
  images,
  options: {
    showNavigation,
    showPagination,
    loop,
    autoplay,
    slidesPerView,
    continuous,
    speed,
    spaceBetween,
    imageMaxWidth,
    breakpoints,
    otherOptions,
  },
  sliderId,
}) => {
  const swiperOptions = {
    ...(showPagination && {
      pagination: {
        el: ".swiper-pagination",
      },
    }),
    ...(showNavigation && {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    }),
    slidesPerView: slidesPerView ? slidesPerView : 1,
    ...((autoplay || continuous) && {
      autoplay: {
        delay: continuous ? 1 : autoplay,
        disableOnInteraction: false,
      },
    }),
    loop: loop ? loop : false,
    ...(breakpoints && {
      breakpoints: breakpoints,
    }),
    ...(spaceBetween && {
      spaceBetween: spaceBetween,
    }),
    ...((speed || continuous) && {
      speed: continuous ? 5000 : speed ?? 5000,
    }),
    ...otherOptions,
  }

  const imageStyles = imageMaxWidth
    ? css`
        max-width: ${imageMaxWidth.mobile}px;

        ${md} {
          max-width: ${imageMaxWidth.tablet
            ? imageMaxWidth.tablet + "px"
            : imageMaxWidth.desktop + "px"};
        }

        ${lg} {
          max-width: ${imageMaxWidth.desktop}px;
        }
      `
    : ""

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const slider = new Swiper(`#${sliderId}`, swiperOptions)
  }, [])

  return (
    <div
      className="swiper-container"
      id={sliderId}
      css={
        showNavigation &&
        css`
          padding-bottom: 30px;
        `
      }
    >
      <div
        className="swiper-wrapper"
        css={
          continuous &&
          css`
            transition-timing-function: linear;
          `
        }
      >
        {images.map(image => (
          <div className="swiper-slide" key={image.id}>
            {image.childImageSharp?.fluid ? (
              <Img fluid={image.childImageSharp.fluid} css={imageStyles}></Img>
            ) : (
              <img src={image.publicURL} css={imageStyles} />
            )}
          </div>
        ))}
      </div>

      {showNavigation && (
        <>
          <div
            className="swiper-button-prev"
            css={css`
              top: calc(50% - 10px);
              color: #fff;

              &::after {
                font-size: 30px;
              }
            `}
          ></div>
          <div
            className="swiper-button-next"
            css={css`
              top: calc(50% - 10px);
              color: #fff;

              &::after {
                font-size: 30px;
              }
            `}
          ></div>
        </>
      )}

      {showPagination && (
        <div
          className="swiper-pagination"
          css={css`
            bottom: 0 !important;

            .swiper-pagination-bullet {
              width: 6px;
              height: 6px;
            }

            .swiper-pagination-bullet-active {
              background: ${colors.black};
            }
          `}
        />
      )}
    </div>
  )
}

export { Slider }
