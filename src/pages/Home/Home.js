import React from 'react';
import UniqueNeeds from '../UniqueNeeds/UniqueNeeds';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Services></Services>
            <UniqueNeeds></UniqueNeeds>
        </div>
    );
};

export default Home;