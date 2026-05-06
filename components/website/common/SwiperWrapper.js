"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';

function SwiperWrapper({ children }) {
    return (
        <Swiper
            modules={[Autoplay, Pagination]}

            // Basic Settings
            className=""
            slidesPerView={3}
            speed={1500}
            spaceBetween={24}

            // Autoplay Configuration
            autoplay={{
                delay: 2500,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
            }}

            // Pagination Configuration
            pagination={{
                clickable: true,
            }}

            // Responsive Breakpoints
            breakpoints={{
                280: { slidesPerView: 1 },
                386: { slidesPerView: 1 },
                576: { slidesPerView: 1 },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 3 },
                1400: { slidesPerView: 3 },
            }}
        >
            {children}
        </Swiper>
    )
}

export default SwiperWrapper