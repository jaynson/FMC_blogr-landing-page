import React from 'react';
import FooterNav from './FooterNav';

const FooterView = () => {
    return (
        <footer className='footer'>
            <div className='content__wrapper footer-content__wrapper'>
                <svg className='svg-logo footer-logo__icon'>
                    <use xlinkHref='sprite.svg#logo'></use>
                </svg>
                <FooterNav />
            </div>
        </footer>
    );
};

export default FooterView;
