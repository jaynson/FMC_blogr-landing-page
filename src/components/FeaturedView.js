import React from 'react';
import './featuredView.css';

const FeaturedView = () => {
    return (
        <section className='featured'>
            <div className='content__wrapper featured-content__wrapper'>
                {/* <svg className='featured-illustration__svg'>
                    <use xlinkHref='sprite.svg#illustration-phones'></use>
                </svg> */}
                <img className='featured-illustration__svg' src='./illustration-phones.svg' alt='Phones' />
                <div className='featured-content'>
                    <h3 className='featured__title ff-overpass fw-600'>State of the Art Infrastructure</h3>
                    <p className='featured__summary ff-overpass fw-300'>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
                </div>
            </div>

        </section>
    );
};

export default FeaturedView;
