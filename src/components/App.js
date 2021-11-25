import React, { useState } from 'react';
import FooterView from './FooterView';
import HeaderView from './HeaderView';
import MainView from './MainView';

const App = () => {
    const [clicked, setClicked] = useState(false);
    const [menuClicked, setMenuClicked] = useState(false);
    const [linkClicked, setLinkClicked] = useState('');

    const handleClick = (e) => {
        const target = e.target;
        const link = target.classList[0]?.split('-')[0];
        console.log(target);
        if (target.matches('.dropdown-nav__link') || target.matches('.menu-nav__link')) {
            // console.log(clicked, 1);
            console.log(link, 1);
            !clicked && setClicked(!clicked);
            (linkClicked === link) && setClicked(!clicked);
            setLinkClicked(link);
            console.log(clicked, 2);
            return;
        }
        if (target.matches('.nav__list') ||
            target.matches('.menu-nav__container-content')) {
            setClicked(false);
            setMenuClicked(true);
            return;
        }
        if (target.matches('.menu-sub__container-content')) {
            setClicked(true);
            // setMenuClicked(true);
            return;
        }
        if (target.matches('.menu__icon') || target.matches('.menu__hamburger--use')) {
            setMenuClicked(!menuClicked);
            setClicked(false);
            return;
        }
        setClicked(false);
        setMenuClicked(false);


    };

    window.addEventListener('resize', () => {
        setClicked(false);
        setMenuClicked(false);
    });
    return (
        <div className='container' onClick={ handleClick }>
            <div className='component'>
                <HeaderView
                    clicked={ clicked }
                    clickedLink={ linkClicked }
                    menuClicked={ menuClicked }
                />
                <MainView />
                <FooterView />
            </div>
        </div>
    );
};

export default App;
