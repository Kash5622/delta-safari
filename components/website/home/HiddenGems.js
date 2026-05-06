import React from 'react'
import SwiperWrapperHiddenGems from './swiper/SwiperWrapperHiddenGems'

function HiddenGems() {
    const hiddenGems = [
        {
            "title": "Santorini, Greece",
            "image": "assets/img/home9/destination-img1.jpg",
            "link": "destination-details.html",
            "price": 38559,
            "currency": "₹"
        },
        {
            "title": "Great Temple Jordan",
            "image": "assets/img/home9/destination-img3.jpg",
            "link": "destination-details.html",
            "price": 38559,
            "currency": "₹"
        },
        {
            "title": "Dubai Skyline, UAE",
            "image": "assets/img/home9/destination-img2.jpg",
            "link": "destination-details.html",
            "price": 38559,
            "currency": "₹"
        },
        {
            "title": "Austin Bridge, USA",
            "image": "assets/img/home9/destination-img8.jpg",
            "link": "destination-details.html",
            "price": 38559,
            "currency": "₹"
        },
        {
            "title": "Jungle Walkway, Indonesia",
            "image": "assets/img/home9/destination-img6.jpg",
            "link": "destination-details.html",
            "price": 38559,
            "currency": "₹"
        },
        {
            "title": "Athens Greece",
            "image": "assets/img/home9/destination-img7.jpg",
            "link": "destination-details.html",
            "price": 38559,
            "currency": "₹"
        },
        {
            "title": "Rome, Italy",
            "image": "assets/img/home9/destination-img5.jpg",
            "link": "destination-details.html",
            "price": 38559,
            "currency": "₹"
        },
        {
            "title": "Silent Desert",
            "image": "assets/img/home9/destination-img4.jpg",
            "link": "destination-details.html",
            "price": 38559,
            "currency": "₹"
        }
    ]
    return (
        <>
            <div className="home9-destination-section mb-100">
                <div className="container">
                    <div className="section-title text-start mb-70">
                        <h2>Explore The Hidden Gems</h2>
                        <p className="m-0">Tap into the untapped tourist spots for amazing vacations.</p>
                    </div>
                    <div className="destination-slider-wrapper">
                        <div className="row">
                            <div className="col-lg-12">
                                <SwiperWrapperHiddenGems data={hiddenGems} />
                                
                                <div className="slider-btn-grp">
                                    <div className="slider-btn destination-slider-prev">
                                        <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path
                                                    d="M11.002 13.0005C10.002 10.5005 5.00195 8.00049 2.00195 7.00049C5.00195 6.00049 9.50195 4.50049 11.002 1.00049"
                                                    strokeWidth="1.5" strokeLinecap="round"></path>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="slider-btn destination-slider-next">
                                        <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path
                                                    d="M2.99805 13.0005C3.99805 10.5005 8.99805 8.00049 11.998 7.00049C8.99805 6.00049 4.49805 4.50049 2.99805 1.00049"
                                                    strokeWidth="1.5" strokeLinecap="round"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HiddenGems