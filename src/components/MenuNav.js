import React from 'react';
import navData from '../navData.json';
import Navigation from './Navigation';

const MenuNav = ({ clicked, clickedLink }) => {
    const menuNavLinks = navData.map((item) => {
        return (
            <li className='nav__item menu-nav__item menu-nav__container-content' key={ item.key }>
                <div className="menu-nav__link-wrapper menu-nav__container-content">
                    <a className={ `${item.NavLink.toLowerCase()}-nav__link nav__link menu-nav__link ff-ubuntu fw-500 ${(clicked && (clickedLink === item.NavLink.toLowerCase())) ? 'active' : ''}` } href='#'>
                        { item.NavLink }
                    </a>
                    <svg className='nav__icon menu-nav__icon icon-arrow-light menu-nav__container-content'>
                        <use xlinkHref='sprite.svg#icon-arrow-dark' className='menu-nav__icon--use menu-nav__container-content'></use>
                    </svg>
                </div>
                <div className={ `${item.NavLink.toLowerCase()}-container menu__sub-container ${(clicked && (clickedLink === item.NavLink.toLowerCase())) ? 'show' : ''} menu-sub__container-content` }>
                    <Navigation navType='sub-' navLinks={
                        item.Sublink.map((subItem) => {
                            return (
                                <li className={ `nav__sub-item menu-nav__sub-item menu-sub__container-content` }>
                                    <a className='nav__sub-link menu-nav__sub-link ff-ubuntu fw-500' href='#'>{ subItem }</a>
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
        <div className={ `menu-nav menu-nav__container-content` }>
            <Navigation
                navLinks={ menuNavLinks }
                navType=''
            />
        </div>
    );
};

export default MenuNav;
