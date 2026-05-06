import React from 'react'
import SwiperWraperHolidayPackages from './swiper/SwiperWraperHolidayPackages'

function HolidayPackages() {
    const holidayPackages = {
        domestic: [
            {
                "title": "Rome, Italy",
                "image": "assets/img/home1/destination-img1.jpg",
                "link": "destination-details.html",
                "duration": "3 Nights | 4 Days",
                "price": 15999,
                "currency": "INR",
                "type": "currency"
            },
            {
                "title": "Paris, France",
                "image": "assets/img/home1/destination-img2.jpg",
                "link": "destination-details.html",
                "tours": 140,
                "departures": 240,
                "guests": 15786,
                "type": "tour"
            },
            {
                "title": "Switzerland",
                "image": "assets/img/home1/destination-img3.jpg",
                "link": "destination-details.html",
                "tours": 120,
                "departures": 250,
                "guests": 15786,
                "type": "tour"
            },
            {
                "title": "Scotland, UK",
                "image": "assets/img/home1/destination-img4.jpg",
                "link": "destination-details.html",
                "tours": 110,
                "departures": 230,
                "guests": 15786,
                "type": "tour"
            },
            {
                "title": "Athens, Greece",
                "image": "assets/img/home1/destination-img5.jpg",
                "link": "destination-details.html",
                "tours": 70,
                "departures": 150,
                "guests": 15786,
                "type": "tour"
            },
            {
                "title": "Istanbul, Turkey",
                "image": "assets/img/home1/destination-img6.jpg",
                "link": "destination-details.html",
                "tours": 120,
                "departures": 230,
                "guests": 15786,
                "type": "tour"
            }
        ],
        inernational: [
            {
                "title": "Rome, Italy",
                "image": "assets/img/home1/destination-img1.jpg",
                "link": "destination-details.html",
                "tours": 140,
                "departures": 240,
                "guests": 15786,
                "type": "tour"
            },
            {
                "title": "Paris, France",
                "image": "assets/img/home1/destination-img2.jpg",
                "link": "destination-details.html",
                "tours": 140,
                "departures": 240,
                "guests": 15786,
                "type": "tour"
            },
            {
                "title": "Switzerland",
                "image": "assets/img/home1/destination-img3.jpg",
                "link": "destination-details.html",
                "tours": 120,
                "departures": 250,
                "guests": 15786,
                "type": "tour"
            },
            {
                "title": "Scotland, UK",
                "image": "assets/img/home1/destination-img4.jpg",
                "link": "destination-details.html",
                "tours": 110,
                "departures": 230,
                "guests": 15786,
                "type": "tour"
            },
            {
                "title": "Athens, Greece",
                "image": "assets/img/home1/destination-img5.jpg",
                "link": "destination-details.html",
                "tours": 70,
                "departures": 150,
                "guests": 15786,
                "type": "tour"
            },
            {
                "title": "Istanbul, Turkey",
                "image": "assets/img/home1/destination-img6.jpg",
                "link": "destination-details.html",
                "tours": 120,
                "departures": 230,
                "guests": 15786,
                "type": "tour"
            }
        ]
    }
    return (
        <>
            <div className="home1-destination-section mb-100">
                <div className="container">
                    <div className="row justify-content-start mb-60 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="col-lg-10">
                            <div className="section-title text-start">
                                <h2>Handpicked Holiday Packages</h2>
                                <p className="m-0">Indulge in unforgettable adventure with special tour plans.</p>
                            </div>
                            <ul className="nav nav-pills justify-content-start" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="pills-europe-tab" data-bs-toggle="pill" data-bs-target="#pills-europe" type="button" role="tab" aria-controls="pills-europe" aria-selected="true">Domestic</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-asia-tab" data-bs-toggle="pill" data-bs-target="#pills-asia" type="button" role="tab" aria-controls="pills-asia" aria-selected="false">International</button>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-europe" role="tabpanel" aria-labelledby="pills-europe-tab">
                            <SwiperWraperHolidayPackages data={holidayPackages.domestic} />

                            <div className="slider-pagi-wrap">
                                <div className="home1-destination-pagi paginations"></div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-asia" role="tabpanel" aria-labelledby="pills-asia-tab">
                            <SwiperWraperHolidayPackages data={holidayPackages.inernational} />
                            <div className="slider-pagi-wrap">
                                <div className="home1-destination-pagi paginations"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HolidayPackages