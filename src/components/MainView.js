import React from 'react';
import CoreServices from './CoreServices';
import coreServicesData from '../coreServicesData.json';
import FeaturedView from './FeaturedView';

const MainView = () => {
    return (
        <main className='main'>
            <h2 className='main__title ff-overpass'>
                Designed for the future
            </h2>
            <CoreServices
                section='top'
                title1={ coreServicesData.top[0].title }
                summary1={ coreServicesData.top[0].summary }
                title2={ coreServicesData.top[1].title }
                summary2={ coreServicesData.top[1].summary }
            />
            <FeaturedView />
            <CoreServices
                section='bottom'
                title1={ coreServicesData.bottom[0].title }
                summary1={ coreServicesData.bottom[0].summary }
                title2={ coreServicesData.bottom[1].title }
                summary2={ coreServicesData.bottom[1].summary }
            />
        </main>
    );
};

export default MainView;
