import React from 'react'

function PackageCard({ pkg }) {
    return (
        <>
            <div>
                <div className="package-card">
                    <div className="package-img-wrap">
                        <a href="travel-package-details.html" className="package-img">
                            <img src={pkg?.images} alt={pkg?.title} />
                        </a>
                        <div>
                        </div>
                    </div>
                </div>
                <h5 className='text-center mt-2'>{pkg?.title}</h5>
            </div>
        </>
    )
}

export default PackageCard