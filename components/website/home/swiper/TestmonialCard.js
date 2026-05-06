import React from 'react'

function TestmonialCard({ pkg }) {
    return (
        <>
            <div className="testimonial-card three">
                <ul className="rating-area trustpilot">
                    {
                        Array(pkg.rating).fill(0).map((data, index) => <li key={index}><svg width="11" height="10" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg"><path d="M5.25 7.57409L7.53125 6.99627L8.48437 9.93221L5.25 7.57409ZM10.5 3.77924H6.48437L5.25 0L4.01562 3.77924H0L3.25 6.12174L2.01562 9.90097L5.26562 7.55847L7.26562 6.12174L10.5 3.77924Z"></path></svg></li>)
                    }
                </ul>
                <h5>{pkg?.title}</h5>
                <p>{pkg?.description}</p>
                <div className="author-area">
                    <div className="author-img">
                        <img src={pkg?.author?.image} alt={pkg?.author?.name} />
                    </div>
                    <div className="author-info">
                        <h5>{pkg?.author?.name}</h5>
                        <span>{pkg?.author?.role}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestmonialCard