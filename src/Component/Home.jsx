import React from 'react';
import BackgroundVideo from './Background';
import Game from './Game';
import Schedual from './Schedual';
import Timeline from './Timeline';
import Map from './Map';

function Home(){
    return(
        <>
            {/* <Navbar/> */}
            <BackgroundVideo/>
            {/* <Timeline/> */}
            <Schedual />
            <Map/>
            {/* <Game/> */}
        </>
    )
}
export default Home;