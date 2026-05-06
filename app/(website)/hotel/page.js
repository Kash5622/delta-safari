import React from 'react'

function page() {
    const hotelChain = [
        {
            "name": "Amritara",
            "url": "https://images.emtcontent.com/hotel-img/amritara-hotel-hp.png"
        },
        {
            "name": "Byke",
            "url": "https://images.emtcontent.com/hotel-img/the-byke-hotels-hp-logo.webp"
        },
        {
            "name": "RedHouse",
            "url": "https://images.emtcontent.com/hotel-img/tree-house-group-hp-logo.webp"
        },
        {
            "name": "VITS",
            "url": "https://images.emtcontent.com/hotel-img/vits-hotels-hp-logo.webp"
        },
        {
            "name": "Windflower",
            "url": "https://images.emtcontent.com/hotel-img/windflower-hp-logo.webp"
        },
        {
            "name": "Sterling",
            "url": "https://images.emtcontent.com/hotel-img/sterling-hotels-17june24-hp-logo.png"
        },
        {
            "name": "Spree",
            "url": "https://images.emtcontent.com/hotel-img/spree-hotels-hp.png"
        },
        {
            "name": "Hosteller",
            "url": "https://images.emtcontent.com/hotel-img/the-hosteller-hp-logo.webp"
        },
        {
            "name": "Magnus",
            "url": "https://images.emtcontent.com/hotel-img/Magnus-Hotels-logo.png"
        },
        {
            "name": "Suba",
            "url": "https://images.emtcontent.com/hotel-img/Suba-Group-Hotels-27-03-25-logo.webp"
        },
        {
            "name": "Zone",
            "url": "https://images.emtcontent.com/hotel-img/zone-the-park-04-04-25-logo.webp"
        },
        {
            "name": "Lords",
            "url": "https://www.easemytrip.com/images/emt-sale/lords-hotels.png"
        },
        {
            "name": "Aliyaa",
            "url": "https://images.emtcontent.com/hotel-img/Alivaa-logo.webp"
        },
        {
            "name": "FXS",
            "url": "https://images.emtcontent.com/hotel-img/Foxoso-Hotels-logo.webp"
        }
    ]
    const hotelCities = [
        {
            "name": "Delhi",
            "image": "https://images.emtcontent.com/hotel-img/del-sm.webp",
            "categories": [
                "Hotels",
                "Budget Hotels",
                "3 Star Hotels",
                "4 Star Hotels",
                "5 Star Hotels"
            ]
        },
        {
            "name": "Goa",
            "image": "https://images.emtcontent.com/hotel-img/goa-sm.webp",
            "categories": [
                "Hotels",
                "Budget Hotels",
                "3 Star Hotels",
                "4 Star Hotels",
                "5 Star Hotels"
            ]
        },
        {
            "name": "Mumbai",
            "image": "https://images.emtcontent.com/hotel-img/mumb-sm.webp",
            "categories": [
                "Hotels",
                "Budget Hotels",
                "3 Star Hotels",
                "4 Star Hotels",
                "5 Star Hotels"
            ]
        },
        {
            "name": "Shimla",
            "image": "https://images.emtcontent.com/hotel-img/shimla-sm.webp",
            "categories": [
                "Hotels",
                "Budget Hotels",
                "3 Star Hotels",
                "4 Star Hotels",
                "5 Star Hotels"
            ]
        },
        {
            "name": "Manali",
            "image": "https://images.emtcontent.com/hotel-img/manali-sm.webp",
            "categories": [
                "Hotels",
                "Budget Hotels",
                "3 Star Hotels",
                "4 Star Hotels",
                "5 Star Hotels"
            ]
        },
        {
            "name": "Hyderabad",
            "image": "https://images.emtcontent.com/hotel-img/hyd-sm.webp",
            "categories": [
                "Hotels",
                "Budget Hotels",
                "3 Star Hotels",
                "4 Star Hotels",
                "5 Star Hotels"
            ]
        },
        {
            "name": "Chennai",
            "image": "https://images.emtcontent.com/hotel-img/chennai-sm.webp",
            "categories": [
                "Hotels",
                "Budget Hotels",
                "3 Star Hotels",
                "4 Star Hotels",
                "5 Star Hotels"
            ]
        },
        {
            "name": "Kolkata",
            "image": "https://images.emtcontent.com/hotel-img/kolkata-sm.webp",
            "categories": [
                "Hotels",
                "Budget Hotels",
                "3 Star Hotels",
                "4 Star Hotels",
                "5 Star Hotels"
            ]
        },
        {
            "name": "Jaipur",
            "image": "https://images.emtcontent.com/hotel-img/jaipur-sm.webp",
            "categories": [
                "Hotels",
                "Budget Hotels",
                "3 Star Hotels",
                "4 Star Hotels",
                "5 Star Hotels"
            ]
        },
        {
            "name": "Pune",
            "image": "https://images.emtcontent.com/hotel-img/pune-sm.webp",
            "categories": [
                "Hotels",
                "Budget Hotels",
                "3 Star Hotels",
                "4 Star Hotels",
                "5 Star Hotels"
            ]
        },
        {
            "name": "Gurugram",
            "image": "https://images.emtcontent.com/hotel-img/gurgrm-sm.webp",
            "categories": [
                "Hotels",
                "Budget Hotels",
                "3 Star Hotels",
                "4 Star Hotels",
                "5 Star Hotels"
            ]
        },
        {
            "name": "Ahmedabad",
            "image": "https://images.emtcontent.com/hotel-img/ahmd-sm.webp",
            "categories": [
                "Hotels",
                "Budget Hotels",
                "3 Star Hotels",
                "4 Star Hotels",
                "5 Star Hotels"
            ]
        }
    ]
    return (
        <>
            <div className="breadcrumb-section" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(assets/img/innerpages/breadcrumb-bg1.jpg)" }}>
                <div className="container">
                    <div className="banner-content">
                        <h1 className='dancing-script'>Get Your Dream Hotel</h1>
                        <ul className="breadcrumb-list">
                            <li><a href="index.html">Home</a></li>
                            <li>Hotel</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="destination-dt-travel-season-section mb-100 mt-5" id="scroll-section">
                <div className="container">
                    <h2 className='mt-4 mb-3'>Book Hotels At Popular Destinations</h2>
                    <div className="row g-1">
                        {hotelCities.map((city, index) => {
                            return <div key={index} className="col-lg-4 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms" style={{ visibility: "visible", animationDuration: "1500ms", animationDelay: "200ms" }}>
                                <div className="hotel-card row m-2">
                                    <div className="hotel-img-wrap p-0 col-md-5">
                                        <a href="hotel-details.html" className="hotel-img">
                                            <img src={city.image} alt={city.name} style={{ height: "125px", width: "100%" }} />
                                        </a>
                                    </div>
                                    <div className="hotel-content col-md-7 pb-0 pt-2">
                                        <div className="location-area flex-column mb-0 gap-1">
                                            <div className="location w-100 mb-2">
                                                <svg width="25" height="25" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.83615 0C3.77766 0 1.28891 2.48879 1.28891 5.54892C1.28891 7.93837 4.6241 11.8351 6.05811 13.3994C6.25669 13.6175 6.54154 13.7411 6.83615 13.7411C7.13076 13.7411 7.41561 13.6175 7.6142 13.3994C9.04821 11.8351 12.3834 7.93833 12.3834 5.54892C12.3834 2.48879 9.89464 0 6.83615 0ZM7.31469 13.1243C7.18936 13.2594 7.02008 13.3342 6.83615 13.3342C6.65222 13.3342 6.48295 13.2594 6.35761 13.1243C4.95614 11.5959 1.69584 7.79515 1.69584 5.54896C1.69584 2.7134 4.00067 0.406933 6.83615 0.406933C9.67164 0.406933 11.9765 2.7134 11.9765 5.54896C11.9765 7.79515 8.71617 11.5959 7.31469 13.1243Z"></path>
                                                    <path d="M6.83618 8.54554C8.4624 8.54554 9.7807 7.22723 9.7807 5.60102C9.7807 3.9748 8.4624 2.65649 6.83618 2.65649C5.20997 2.65649 3.89166 3.9748 3.89166 5.60102C3.89166 7.22723 5.20997 8.54554 6.83618 8.54554Z"></path>
                                                </svg>
                                                <a style={{ fontSize: "19px" }} href="/">{city.name}</a>
                                            </div>
                                            <ul className="hotel-feature-list mb-0">
                                                {city.categories.map((cat, index) => {
                                                    return <li key={index}>
                                                        <a>{cat}</a>
                                                    </li>
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })};
                    </div>
                    <div className="btn-and-price-area mt-4 d-flex justify-content-center">
                        <a href="hotel-details.html" className="primary-btn1">
                            <span>
                                View More
                                <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z"></path>
                                </svg>
                            </span>
                            <span>
                                View More
                                <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z"></path>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="home2-about-section mb-100">
                <div className="container">
                    <div className="service-area wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" style={{ visibility: "visible", animationDuration: "1500ms", animationDelay: "200ms" }}>
                        <h3 className='mb-3'>Our Top Hotel Chains</h3>
                        <div className="row row-cols-xl-6 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-1 g-xxl-4 g-xl-3 g-lg-3 g-4">
                            {hotelChain.map((elem, index) => {
                                return <div key={index} className="col">
                                    <div className="single-service">
                                        <a href="hotel.html">
                                            <img src={elem.url} alt={elem.name} style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                                            {elem.name}
                                        </a>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-section pt-100 mb-100">
                <div className="container">
                    <div className="about-wrapper">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-xl-6 col-lg-7 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms" style={{ visibility: "visible", animationDuration: "1500ms", animationDelay: "200ms" }}>
                                <div className="about-content">
                                    <div className="section-title">
                                        <h2>Why We’re Best Agency</h2>
                                        <h4>Welcome to GoFly Travel Agency – Your Gateway to Unforgettable Journeys!</h4>
                                        <p>GoFly Travel Agency is a trusted name in the travel industry, offering seamless travel planning, personalized itineraries, and unforgettable adventures. With years of experience and a network of global partners, we ensure a hassle-free and memorable journey for every traveler.</p>
                                        <p>We believe that travel is more than just moving from one place to another—it’s about discovering new cultures, creating unforgettable experiences, and making lifelong memories.</p>
                                    </div>
                                    <div className="founder-area">
                                        <div className="btn-and-price-area mt-4 d-flex justify-content-center">
                                            <a href="hotel-details.html" className="primary-btn1">
                                                <span>
                                                    View More
                                                    <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z"></path>
                                                    </svg>
                                                </span>
                                                <span>
                                                    View More
                                                    <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z"></path>
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 d-lg-block d-none wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms" style={{ visibility: "visible", animationDuration: "1500ms", animationDelay: "200ms" }}>
                                <div className="about-img">
                                    <img src="assets/img/home3/about-img.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-why-choose-section mb-100">
                <div className="container">
                    <div className="row justify-content-start mb-50 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms" style={{ visibility: "visible", animationDuration: "1500ms", animationDelay: "200ms" }}>
                        <div className="col-lg-8">
                            <div className="section-title text-start">
                                <h2>Benefits of Booking With Us</h2>
                                <p className='m-0'>Discover the unrivalled benefits that promise memorable journeys all along.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-xl-4 g-lg-3 g-4">
                        <div className="col-lg-3 col-sm-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms" style={{ visibility: "visible", animationDuration: "1500ms", animationDelay: "200ms" }}>
                            <div className="why-choose-card">
                                <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M35.4081 30.5529L32.5878 38.1096C32.1995 39.1501 31.5928 40.107 30.8484 39.3186C30.6269 39.084 30.4387 38.7694 30.4738 38.4237L31.0957 32.291C31.0973 32.2737 31.1035 32.2571 31.1138 32.2431C31.1241 32.229 31.138 32.2181 31.154 32.2114L35.2782 30.4294C35.2957 30.4216 35.3152 30.4192 35.334 30.4226C35.3529 30.4259 35.3703 30.4348 35.384 30.4482C35.4129 30.4757 35.422 30.5155 35.4081 30.5529ZM30.06 46.0639V48.1646C30.0606 48.2148 30.0808 48.2628 30.1163 48.2983C30.1518 48.3338 30.1997 48.3539 30.2499 48.3545H32.5924C32.6426 48.3539 32.6906 48.3337 32.7261 48.2982C32.7615 48.2627 32.7817 48.2148 32.7823 48.1646V46.0639C32.7823 46.0381 32.772 46.0133 32.7538 45.9951C32.7355 45.9768 32.7108 45.9665 32.6849 45.9665H30.1575C30.1317 45.9665 30.1069 45.9768 30.0887 45.995C30.0704 46.0133 30.0601 46.0381 30.06 46.0639ZM17.2166 46.0639V48.1646C17.2166 48.2678 17.3034 48.3545 17.4065 48.3545H19.749C19.7992 48.3539 19.8472 48.3337 19.8827 48.2982C19.9181 48.2627 19.9383 48.2148 19.9389 48.1646V46.0639C19.9389 46.0381 19.9286 46.0133 19.9104 45.9951C19.8921 45.9768 19.8674 45.9665 19.8415 45.9665H17.3141C17.2883 45.9665 17.2635 45.9768 17.2453 45.995C17.227 46.0133 17.2167 46.0381 17.2166 46.0639ZM48.8359 14.7499C47.5238 11.5883 40.2918 12.6608 36.7021 13.3925C36.6826 13.3963 36.6647 13.4061 36.651 13.4205C36.6372 13.4349 36.6283 13.4532 36.6254 13.4729C36.6222 13.4925 36.6251 13.5127 36.6338 13.5307C36.6425 13.5486 36.6566 13.5633 36.674 13.5729C37.0663 13.7934 37.4137 14.0856 37.6981 14.4344C37.709 14.4481 37.7235 14.4586 37.74 14.4646C37.7565 14.4707 37.7743 14.472 37.7915 14.4686C40.0989 14.0371 42.1252 13.8335 43.7602 13.8734C48.2883 13.9839 48.9629 15.729 45.8351 19.0013C44.9797 19.8962 43.8717 20.8496 42.5489 21.833C42.535 21.8431 42.524 21.8567 42.5172 21.8726C42.5104 21.8884 42.5081 21.9057 42.5103 21.9228C42.5122 21.9399 42.5186 21.9562 42.5289 21.97C42.5393 21.9837 42.5532 21.9944 42.5691 22.0009L43.7055 22.4811C43.7387 22.4951 43.7742 22.4906 43.8028 22.4686C44.9673 21.573 45.9589 20.7007 46.7507 19.8723C48.616 17.9211 49.4126 16.1394 48.8359 14.7499ZM41.4401 22.6252C40.9926 22.4911 40.5399 22.4305 40.0874 22.4435C39.0336 22.4737 38.3558 22.8574 37.4704 23.3032C37.4557 23.3109 37.4391 23.3146 37.4224 23.3139C37.4058 23.3132 37.3896 23.3081 37.3755 23.2991C37.3612 23.2905 37.3494 23.2784 37.3413 23.2638C37.3331 23.2492 37.329 23.2328 37.3292 23.2161V17.5544C37.3292 15.5964 35.7296 13.9968 33.7716 13.9968H16.2273C14.2694 13.9968 12.6698 15.5964 12.6698 17.5544V34.6487C12.67 34.6713 12.6622 34.6933 12.6478 34.7108C12.6334 34.7283 12.6133 34.7402 12.591 34.7444C11.0592 35.0427 9.64314 35.2439 8.37354 35.3433C5.03684 35.6046 2.80884 35.2015 2.33104 34.0503C1.93464 33.0953 2.78384 31.6218 4.57124 29.8719C6.20244 28.2748 8.58484 26.5146 11.5176 24.7434C11.5322 24.7349 11.5442 24.7227 11.5525 24.7081C11.5607 24.6934 11.565 24.6768 11.5647 24.66V23.4161C11.5647 23.3801 11.5468 23.3493 11.5156 23.3315C11.4844 23.3137 11.4487 23.314 11.4177 23.3323C8.14634 25.2657 5.48614 27.2081 3.68534 28.9712C1.51254 31.0986 0.545136 33.0465 1.16304 34.5354C1.87774 36.2575 4.56144 36.9113 8.46754 36.6054C11.469 36.3703 15.6484 35.3106 19.5502 34.0986C19.6291 34.0741 19.7096 34.0543 19.7866 34.0249C21.0329 33.5477 18.4393 30.2474 17.7892 29.195C17.7721 29.1672 17.7697 29.1358 17.7825 29.1058C17.7953 29.0758 17.8195 29.0557 17.8514 29.0487C17.884 29.0416 17.9188 29.0446 17.9598 29.066L21.78 31.0642C22.629 31.5082 23.503 31.7918 24.3572 31.3598L38.8189 24.0449C39.6673 23.6158 40.5572 23.5906 41.4434 23.9691L43.7322 24.9468C43.9333 25.0327 43.9321 25.3141 43.7331 25.3971C33.696 29.734 23.5618 35.072 12.7489 37.1349C12.7266 37.139 12.7065 37.1508 12.692 37.1683C12.6775 37.1858 12.6696 37.2078 12.6697 37.2305V41.4733C12.6697 43.4312 14.2693 45.0309 16.2272 45.0309H33.7714C35.7293 45.0309 37.329 43.4313 37.329 41.4733V29.6073C37.329 29.5676 37.3513 29.5336 37.3878 29.5179L44.2329 26.5603C45.448 26.0366 45.4454 24.3043 44.227 23.7839L42.8363 23.1899L42.8346 23.1892L41.4485 22.6284C41.4458 22.6272 41.443 22.6261 41.4401 22.6252ZM29.0716 12.8012V6.40939C29.0716 6.38249 29.0812 6.35939 29.1003 6.34039C29.1093 6.33118 29.1201 6.3239 29.1319 6.31902C29.1438 6.31413 29.1566 6.31174 29.1694 6.31199C29.6222 6.31349 29.9994 6.31229 30.3842 5.92749C30.5061 5.80611 30.6027 5.66187 30.6686 5.50305C30.7346 5.34423 30.7685 5.17395 30.7684 5.00199V2.95519C30.7684 2.23349 30.1803 1.64539 29.4587 1.64539H20.5404C19.8187 1.64539 19.2306 2.23349 19.2306 2.95519V5.00199C19.2306 5.72359 19.8187 6.31169 20.5404 6.31169H20.83C20.8837 6.31169 20.9274 6.35549 20.9274 6.40909V12.8011C20.9274 12.8548 20.9712 12.8985 21.0248 12.8985H22.0969C22.1228 12.8984 22.1475 12.8882 22.1658 12.8699C22.184 12.8516 22.1943 12.8269 22.1943 12.8011V6.40909C22.1943 6.35539 22.2381 6.31169 22.2917 6.31169H27.707C27.7607 6.31169 27.8044 6.35549 27.8044 6.40909V12.8011C27.8044 12.8548 27.8482 12.8985 27.9018 12.8985H28.9739C28.9867 12.8985 28.9994 12.896 29.0113 12.8911C29.0231 12.8863 29.0339 12.8791 29.0429 12.8701C29.052 12.861 29.0592 12.8503 29.0641 12.8385C29.0691 12.8267 29.0716 12.814 29.0716 12.8012ZM22.2741 24.8024C22.2728 24.8014 22.2714 24.8005 22.2699 24.7996C21.3689 24.227 21.7537 23.5603 22.8151 23.8575L22.8187 23.8584L31.6885 25.9845C31.7291 25.9942 31.7579 26.0268 31.7626 26.0683C31.7673 26.1098 31.7466 26.148 31.7091 26.1665L27.3399 28.3379C27.3242 28.346 27.3066 28.3495 27.2889 28.3481C27.2713 28.3468 27.2544 28.3405 27.2401 28.3301L22.2741 24.8024Z"></path>
                                </svg>
                                <h5>Customised Itineraries</h5>
                                <p>Enjoy our bespoke tour packages that can be tailored according to your preferences for personalised experience.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms" style={{ visibility: "visible", animationDuration: "1500ms", animationDelay: "400ms" }}>
                            <div className="why-choose-card two">
                                <svg width="50" height="50" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M15 0C21.4662 0 26.7081 5.24194 26.7081 11.7081C26.7081 18.1743 21.4662 23.4163 15 23.4163C8.53375 23.4163 3.29187 18.1743 3.29187 11.7081C3.29187 5.24194 8.53375 0 15 0ZM23.7899 20.886C22.1639 22.4438 20.1246 23.5736 17.8531 24.0947L19.8539 28.7401L22.0141 25.2591L26.0274 26.081L23.7899 20.886ZM12.758 24.2191C10.4637 23.8108 8.38243 22.7867 6.69112 21.324L3.97262 27.1631L8.00831 26.4579L10.0666 30L12.758 24.2191ZM15.1981 7.58544C15.1294 7.40431 14.8707 7.40431 14.8019 7.58544L13.7848 10.2644C13.7706 10.3033 13.7451 10.337 13.7117 10.3613C13.6782 10.3856 13.6383 10.3994 13.597 10.4009L10.7348 10.5404C10.5401 10.5498 10.4604 10.7951 10.6124 10.9172L12.8459 12.7124C12.8785 12.7379 12.9027 12.7726 12.9154 12.8119C12.9282 12.8512 12.929 12.8934 12.9177 12.9332L12.1659 15.6984C12.1147 15.8865 12.3233 16.0381 12.4864 15.9313L14.8839 14.3618C14.9182 14.3387 14.9586 14.3264 15 14.3264C15.0413 14.3264 15.0817 14.3387 15.116 14.3618L17.5136 15.9313C17.6767 16.0381 17.8853 15.8865 17.8341 15.6984L17.0823 12.9333C17.071 12.8935 17.0717 12.8513 17.0845 12.8119C17.0973 12.7726 17.1215 12.738 17.154 12.7125L19.3876 10.9172C19.5395 10.7951 19.4598 10.5499 19.2652 10.5404L16.403 10.4009C16.3617 10.3994 16.3218 10.3856 16.2883 10.3613C16.2549 10.337 16.2294 10.3033 16.2152 10.2645L15.1981 7.58544ZM16.1065 3.43C15.4404 2.93137 14.5596 2.93137 13.8935 3.43C12.1593 4.72812 12.5526 4.58494 10.3897 4.70525C9.55893 4.75144 8.88418 5.31763 8.69443 6.12775C8.20037 8.23687 8.40962 7.87438 6.83012 9.35688C6.22343 9.92631 6.0705 10.7937 6.44587 11.5363C7.42312 13.4695 7.35043 13.0574 7.09337 15.2083C6.99462 16.0344 7.43506 16.7972 8.19987 17.1248C10.1912 17.9776 9.87056 17.7085 11.0562 19.5215C11.5116 20.2179 12.3392 20.5191 13.1357 20.2784C15.2093 19.6517 14.7908 19.6517 16.8644 20.2784C17.6609 20.5191 18.4886 20.2178 18.9439 19.5215C20.1296 17.7086 19.809 17.9776 21.8002 17.1248C22.5651 16.7972 23.0055 16.0344 22.9067 15.2083C22.6497 13.0573 22.577 13.4695 23.5542 11.5363C23.9296 10.7937 23.7766 9.92631 23.17 9.35688C21.5904 7.87444 21.7997 8.23687 21.3057 6.12775C21.1159 5.31763 20.4412 4.7515 19.6104 4.70525C17.4474 4.58494 17.8407 4.72806 16.1065 3.43Z"></path>
                                </svg>
                                <h5>Premium Comfort</h5>
                                <p>Experience the utmost comfort during your travels with premium amenities and exclusive services.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms" style={{ visibility: "visible", animationDuration: "1500ms", animationDelay: "600ms" }}>
                            <div className="why-choose-card three">
                                <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                    <path d="M128 96C92.7 96 64 124.7 64 160L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 256C576 220.7 547.3 192 512 192L136 192C122.7 192 112 181.3 112 168C112 154.7 122.7 144 136 144L520 144C533.3 144 544 133.3 544 120C544 106.7 533.3 96 520 96L128 96zM480 320C497.7 320 512 334.3 512 352C512 369.7 497.7 384 480 384C462.3 384 448 369.7 448 352C448 334.3 462.3 320 480 320z" />
                                </svg>
                                <h5>Wallet-Friendly Prices</h5>
                                <p>Every traveller from worldwide can embark on unforgettable journeys with our unbeatable holiday package prices.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms" style={{ visibility: "visible", animationDuration: "1500ms", animationDelay: "600ms" }}>
                            <div className="why-choose-card three">
                                <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                    <path d="M128 96C92.7 96 64 124.7 64 160L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 256C576 220.7 547.3 192 512 192L136 192C122.7 192 112 181.3 112 168C112 154.7 122.7 144 136 144L520 144C533.3 144 544 133.3 544 120C544 106.7 533.3 96 520 96L128 96zM480 320C497.7 320 512 334.3 512 352C512 369.7 497.7 384 480 384C462.3 384 448 369.7 448 352C448 334.3 462.3 320 480 320z" />
                                </svg>
                                <h5>Wallet-Friendly Prices</h5>
                                <p>Every traveller from worldwide can embark on unforgettable journeys with our unbeatable holiday package prices.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page