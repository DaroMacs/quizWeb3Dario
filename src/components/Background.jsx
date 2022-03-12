import React from 'react';
import Particles from 'react-tsparticles';
import particlesConfig from '../config/configParticles';

const Background = () => {
    return (
        <Particles params={particlesConfig}></Particles>
    );
};

export default Background;