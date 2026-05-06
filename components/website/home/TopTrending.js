import React from 'react'
import SwiperWrapperTopTrending from './swiper/SwiperWrapperTopTrending'

function TopTrending() {
    const trendingPackages = [
        {
            "id": 1,
            "title": "Europe",
            "detailsLink": "travel-package-details.html",
            "images": "assets/img/home2/tour-package-img1.jpg",
            "badge": "Sale on!",
            "hasNestedSlider": false
        },
        {
            "id": 2,
            "title": "Andaman",
            "detailsLink": "travel-package-details.html",
            "images": "assets/img/home1/tour-package-img2.jpg",
            "badge": "Hot Sale!",
            "hasNestedSlider": true
        },
        {
            "id": 3,
            "title": "Bali",
            "detailsLink": "travel-package-details.html",
            "images": "assets/img/home2/tour-package-img2.jpg",
            "badge": null,
            "hasNestedSlider": false
        },
        {
            "id": 4,
            "title": "Kerala",
            "detailsLink": "travel-package-details.html",
            "images": "assets/img/home1/tour-package-img6.jpg",
            "badge": "Hot Sale!",
            "hasNestedSlider": false
        },
        {
            "id": 5,
            "title": "Thiland",
            "detailsLink": "travel-package-details.html",
            "images": "assets/img/home1/tour-package-img4.jpg",
            "badge": null,
            "hasNestedSlider": false
        }
    ]
    return (
        <>
            <div className="home2-package-slider-section mb-100 pt-5 m-0 mt-3" style={{ top: '100px' }}>
                <div className="container">
                    <div className="row justify-content-start mb-30 wow animate fadeInDown" data-wow-delay="200ms"
                        data-wow-duration="1500ms">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title text-start">
                                <h2>Top Trending Destinations</h2>
                                <p className="m-0">Explore the hottest travel spots around the globe.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-40">
                        <div className="col-lg-12">
                            <SwiperWrapperTopTrending data={trendingPackages}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <div className="swiper-pagination2 paginations"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopTrending