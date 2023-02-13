import React from 'react'

export const Contact = () => {
  return (
    <section className='contact-section'>
        {/* <div class="map">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.3612807430254!2d-74.00832638509566!3d40.71006264567193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sin!4v1667153925394!5m2!1sen!2sin" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
		</div> */}
        <div className='container'>
        <div className='Contact-sec'>
            <div className='contact-1'>
                <h5 className='contact-head'>POLO HTML5 TEMPLATE</h5>
                <p>Built with love in Fort Worth, Texas, USA</p>
                <p>All rights reserved. Copyright © 2019. INSPIRO.</p>
                <div className='contact-btn'>
                    <button>PURCHASE NOW</button>
                </div>
            </div>
            <div className='contact'>
                <h5 className='contact-head'>DISCOVER</h5>
                <ul>
                    <li>Features</li>
                    <li>Layouts</li>
                    <li>Corporate</li>
                    <li>Updates</li>
                    <li>Pricing</li>
                    <li>Customers</li>
                </ul>
            </div>
            <div className='contact'>
            <h5 className='contact-head'>FEATURES</h5>
                <ul>
                    <li>Layouts</li>
                    <li>Headers</li>
                    <li>Widgets</li>
                    <li>Footers</li>
                </ul>
            </div>
            <div className='contact'>
            <h5 className='contact-head'>PAGES</h5>
                <ul>
                    <li>Portfolio</li>
                    <li>Blog</li>
                    <li>Shop</li>
                </ul>
            </div>
            <div className='contact'>
            <h5 className='contact-head'>SUPPORT</h5>
                <ul>
                    <li>Help Desk</li>
                    <li>Documentation</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
        </div>
        
    </section>
  )
}

export default Contact