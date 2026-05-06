import React from 'react'

function PackageCardHoliday({ pkg }) {
    return (
        <>
            <div className="destination-card">
                <a href="destination-details.html" className="destination-img">
                    <img src={pkg?.image} alt={pkg?.title} />
                </a>
                <div className="destination-content text-start">
                    <a href="destination-details.html" className="title-area">
                        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.81276 0C4.31734 0 1.47305 2.84433 1.47305 6.34163C1.47305 9.07242 5.2847 13.5258 6.92356 15.3136C7.15052 15.5628 7.47606 15.7042 7.81276 15.7042C8.14946 15.7042 8.475 15.5628 8.70196 15.3136C10.3408 13.5258 14.1525 9.07238 14.1525 6.34163C14.1525 2.84433 11.3082 0 7.81276 0ZM8.35966 14.9991C8.21642 15.1535 8.02297 15.2391 7.81276 15.2391C7.60255 15.2391 7.4091 15.1536 7.26586 14.9991C5.66417 13.2525 1.93812 8.90875 1.93812 6.34167C1.93812 3.10103 4.57221 0.465067 7.81276 0.465067C11.0533 0.465067 13.6874 3.10103 13.6874 6.34167C13.6874 8.90875 9.96135 13.2524 8.35966 14.9991Z" />
                            <path
                                d="M7.81277 9.76634C9.6713 9.76634 11.1779 8.25971 11.1779 6.40118C11.1779 4.54265 9.6713 3.03601 7.81277 3.03601C5.95424 3.03601 4.4476 4.54265 4.4476 6.40118C4.4476 8.25971 5.95424 9.76634 7.81277 9.76634Z" />
                        </svg>
                        {pkg?.title}
                    </a>
                    <div className="content">
                        {pkg?.type == "tour" ?
                            <>
                                <p>{pkg?.tours} tours | {pkg?.departures} departure</p>
                                <p>{pkg?.guests} guest travelled.</p>
                            </>
                            :
                            <>
                                <p>{pkg?.duration}</p>
                                <p>{pkg?.price}</p>
                            </>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PackageCardHoliday