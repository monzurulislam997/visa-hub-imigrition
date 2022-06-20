import React from 'react';
import UniqueNeeds from '../UniqueNeeds/UniqueNeeds';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>

            <div style={{ backgroundColor: "#000", marginBottom: "-8px", color: 'orange' }}>
                <h3 className='text-center  '>VISA HUB IMIGRATION </h3>

            </div>
            <Banner></Banner>
            <Services></Services>
            <UniqueNeeds></UniqueNeeds>

        </div>
    );
};

export default Home;