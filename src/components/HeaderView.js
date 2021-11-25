import React from 'react';
import './headerview.css';
import DropdownNav from './DropdownNav';
import Navigation from './Navigation';
import MenuNav from './MenuNav';

const HeaderView = ({ clicked, clickedLink, menuClicked }) => {

    // const membersLinks = ['Login', 'Sign Up'].map((item) => {
    //     return (
    //         <li className='nav__item member-nav__item' key={ item }>
    //             <a className='nav__link member-nav__link' href='#'>{ item }</a>
    //         </li>
    //     );
    // });

    const membersLinks = [
        <div className={ `members-container ${menuClicked ? 'menu-nav__container-content' : ''}` }>
            <li className='nav__item members-nav__item'>
                <a className='nav__link members-nav__link ff-ubuntu fw-500' href='#'>Login</a>
            </li>
            <li className='nav__item members-nav__item'>
                <a className='btn btn-rounded btn-signup nav__link ff-ubuntu fw-700' href='#'>Sign Up</a>
            </li>
        </div>
    ];


    return (
        <header className='header'>
            <div className='content__wrapper header-content__wrapper'>
                <section className='header__top'>
                    <svg className='svg-logo header-logo__icon'>
                        <use xlinkHref='sprite.svg#logo'></use>
                    </svg>
                    <DropdownNav
                        clicked={ clicked }
                        clickedLink={ clickedLink }
                    />
                    <div className="members-nav">
                        <Navigation navLinks={ membersLinks } />
                    </div>
                    <svg className={ `menu__icon ${menuClicked ? 'activated' : ''}` }>
                        <use xlinkHref='sprite.svg#icon-hamburger' className='menu__hamburger--use'></use>
                        <use xlinkHref='sprite.svg#icon-close' className='menu__close--use'></use>
                    </svg>

                </section>
                <div className={ `menu-nav__container ${menuClicked ? 'show' : ''} menu-nav__container-content` }>

                    <div className={ `nav__container menu-nav__container-content` }>
                        <MenuNav
                            clicked={ clicked }
                            clickedLink={ clickedLink }
                        />
                        <div className="menu-members-nav menu-nav__container-content">
                            <Navigation navLinks={ membersLinks } />
                        </div>
                    </div>
                </div>
                <section className='header__bottom'>
                    <h1 className='header__title ff-overpass fw-300'>A modern publishing platform</h1>
                    <h4 className='header__sub-title ff-overpass fw-300'>Grow your audience and build your online brand</h4>
                    <div className='CTA'>
                        <button className='btn btn-rounded btn-free ff-ubuntu fw-700'>Start for Free</button>
                        <button className='btn btn-rounded btn-learn ff-ubuntu fw-700'>Learn More</button>
                    </div>
                </section>
            </div>

        </header>
    );
};

export default HeaderView;
