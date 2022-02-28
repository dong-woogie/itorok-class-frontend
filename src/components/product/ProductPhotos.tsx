import React from 'react'
import SwiperCore, { Autoplay, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import colors from 'tailwindcss/colors'

import styled from 'styled-components'

interface ProductPhotosProps {
  photos: string[]
}

const ProductPhotosBlock = styled.div`
  .swiper-button-next::after,
  .swiper-button-prev::after {
    color: #fff;
  }
  .swiper-button-next,
  .swiper-button-prev {
    opacity: 0.6;
  }

  .swiper-scrollbar {
    background-color: ${colors.gray[200]};
  }
  .swiper-scrollbar-drag {
    background-color: ${colors.rose[500]};
    background-opacity: 0.5;
  }
`

const ImageCard = styled.div<{ url: string }>`
  width: 100%;
  padding-bottom: ${(804 * 100) / 603}%;
  background-image: url('${(props) => props.url}');
  object-fit: contain;
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
`

SwiperCore.use([Autoplay, Scrollbar])

function ProductPhotos({ photos }: ProductPhotosProps) {
  return (
    <ProductPhotosBlock>
      <Swiper scrollbar autoplay={{ delay: 1500, waitForTransition: true, disableOnInteraction: false }}>
        {photos.map((photo) => (
          <SwiperSlide key={photo}>
            <ImageCard url={photo} />
          </SwiperSlide>
        ))}
      </Swiper>
    </ProductPhotosBlock>
  )
}

export default ProductPhotos
