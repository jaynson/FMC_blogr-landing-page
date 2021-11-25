import React from 'react';
import Navigation from './Navigation';
import navData from '../navData.json';

const FooterNav = () => {

    const footerNavLinks = navData.map((item) => {
        return (
            <li className='nav__item footer-nav__item' key={ item.key }>
                <a className='nav__link footer-nav__link ff-ubuntu fw-700' href='#'>{ item.NavLink }</a>
                <Navigation navType='sub-' navLinks={
                    item.Sublink.map((subItem) => {
                        return (
                            <li className={ `nav__sub-link footer-nav__sub-link` }>
                                <a className='nav__sub-link footer-nav__sub-link ff-ubuntu fw-500' href='#'>{ subItem }</a>
                            </li>
                        );
                    })
                } />
            </li>
        );
    });

    return (
        <div className={ `footer-nav` }>
            <Navigation
                navLinks={ footerNavLinks }
                navType=''
            />
        </div>
    );
};

export default FooterNav;
