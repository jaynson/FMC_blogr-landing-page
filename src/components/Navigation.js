import React from 'react';

const Navigation = ({ navLinks, navType }) => {

    return (
        <nav className={ `nav ` }>
            <ul className={ `nav__${navType || ''}list ${(navType) ? 'menu-sub__container-content' : ''}` }>
                { navLinks }
            </ul>
        </nav>
    );
};

export default Navigation;
