"use client"
import React from 'react'
import { SwiperSlide } from 'swiper/react'

function SwiperSlideWrapper({children}) {
  return (
    <>
        <SwiperSlide>
            {children}
        </SwiperSlide>
    </>
  )
}

export default SwiperSlideWrapper