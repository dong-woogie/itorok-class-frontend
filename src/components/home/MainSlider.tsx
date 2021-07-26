import React from 'react'
import { Helmet } from 'react-helmet-async'
// eslint-disable-next-line import/no-unresolved
import Slider, { Settings } from 'react-slick'

function MainSlider() {
  const setting = {
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    draggable: true,
  } as Settings
  return (
    <div className="w-full">
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Helmet>
      <Slider {...setting}>
        <img
          src="https://d1x9f5mf11b8gz.cloudfront.net/banner/20210712/bcdda308-0311-4c11-b77a-174712d937ea.png"
          alt="carousel1"
        />

        <img
          src="https://d1x9f5mf11b8gz.cloudfront.net/banner/20210719/fe70077c-7608-407b-993a-0fd3512caa90.jpg"
          alt="carousel2"
        />

        <img
          src="https://d1x9f5mf11b8gz.cloudfront.net/class%2F20200721%2Fc4e2bf79-943f-4af9-b78b-e3f49a36b7be.jpg"
          alt="carousel2"
          className="max-h-48 object-cover"
        />
      </Slider>
    </div>
  )
}

export default MainSlider
