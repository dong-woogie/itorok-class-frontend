import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
import styled from 'styled-components'
import '../../styles/swiper.css'

const BannerImageWrap = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: calc(100% * (190 / 480));

  & img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

SwiperCore.use([Autoplay])

function MainSlider() {
  return (
    <div className="w-full">
      <Swiper autoplay={{ delay: 1500, disableOnInteraction: false, pauseOnMouseEnter: true }} loop>
        <SwiperSlide>
          <BannerImageWrap>
            <img src="https://itorok-class-bucket.s3.ap-northeast-2.amazonaws.com/banner1.jpeg" alt="banner1" />
          </BannerImageWrap>
        </SwiperSlide>
        <SwiperSlide>
          <BannerImageWrap>
            <img src="https://itorok-class-bucket.s3.ap-northeast-2.amazonaws.com/banner2.jpeg" alt="banner2" />
          </BannerImageWrap>
        </SwiperSlide>
        <SwiperSlide>
          <BannerImageWrap>
            <img src="https://itorok-class-bucket.s3.ap-northeast-2.amazonaws.com/banner3.jpeg" alt="banner3" />
          </BannerImageWrap>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default MainSlider
