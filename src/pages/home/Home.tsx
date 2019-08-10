import React from 'react'

import { HomeStyle } from './style';
import {Countdown} from './components/Countdown';

interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {
    return (
        <HomeStyle>
            <Countdown />
        </HomeStyle>
    )
}

export default Home