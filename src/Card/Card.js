import React from 'react'
import './index.css'

const index = () => {
    return (
        <>
            <div className='main_card'>
                <div className="image">
                    <img src="/assets/images/Tablet.jpeg" alt="mmmm" />
                </div>
                <div className="content">
                    <div className='header_content'>Favipiravir 400 mg (Fabiflu) Tablets</div>
                    <div className="price">
                       <span className='price_color'>Rs 1,775</span> /  
                       <span className='stripe_color'> stripe</span>
                    </div>
                    <div className="location">
                        <div className='company'>Glenmark Pharmaceutical Limited</div>
                        <div className='company_location'>PARVAT PATIYA, SURAT, GUJARAT</div>
                    </div>
                </div>
                <hr/>
                <div className="footer">
                    <div className='contact_btn'>Contact Supplier</div>
                </div>
            </div>
        </>
    )
}

export default index