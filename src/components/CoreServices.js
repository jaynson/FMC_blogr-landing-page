import React from 'react';
import './coreServices.css';

const CoreServices = ({ section, title1, title2, summary1, summary2 }) => {
    return (
        <section className={ `core-services core-services--${section}` }>
            <div className='core-services__content'>
                <div className='content-container content--1'>
                    <h3 className='core-services__content-title ff-overpass fw-600'>
                        { title1 }
                    </h3>
                    <p className='core-services__content-summary ff-overpass fw-300'>
                        { summary1 }
                    </p>
                </div>
                <div className='content-container content--2'>
                    <h3 className='core-services__content-title ff-overpass fw-600'>
                        { title2 }
                    </h3>
                    <p className='core-services__content-summary ff-overpass fw-300'>
                        { summary2 }
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CoreServices;
