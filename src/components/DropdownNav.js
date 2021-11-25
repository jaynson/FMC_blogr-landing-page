import React from 'react';
import Navigation from './Navigation';
import navData from '../navData.json';

const DropdownNav = ({ clicked, clickedLink }) => {

    const dropdownNavLinks = navData.map((item) => {
        return (
            <li className='nav__item dropdown-nav__item' key={ item.key }>
                <a
                    className={ `${item.NavLink.toLowerCase()}-nav__link nav__link dropdown-nav__link ff-ubuntu fw-700 ${(clicked && (clickedLink === item.NavLink.toLowerCase())) ? 'active' : ''}` }
                    href='#'
                >
                    { item.NavLink }
                </a>
                <svg className='nav__icon dropdown-nav__icon icon-arrow-light'>
                    <use xlinkHref='sprite.svg#icon-arrow-light'></use>
                </svg>
                <div className={ `${item.NavLink.toLowerCase()}-container dropdown__sub-container ${(clicked && (clickedLink === item.NavLink.toLowerCase())) ? 'show' : ''}` }>
                    <Navigation navType='sub-' navLinks={
                        item.Sublink.map((subItem) => {
                            let akey = 0;
                            return (
                                <li className={ `nav__sub-item dropdown-nav__sub-item` } >
                                    <a className='nav__sub-link dropdown-nav__sub-link ff-ubuntu fw-500' href='#'>{ subItem }</a>
                                </li>
                            );
                        })
                    }
                    />
                </div>
            </li>
        );
    });

    return (
        <div className={ `dropdown-nav` }>
            <Navigation
                navLinks={ dropdownNavLinks }
                navType=''
            />
        </div>
    );
};

export default DropdownNav;
