import React from 'react';
import BackgroundVideo from './Background';
import Game from './Game';
import Schedual from './Schedual';
import Timeline from './Timeline';

function Home(){
    return(
        <>
            {/* <Navbar/> */}
            <BackgroundVideo/>
            {/* <Timeline/> */}
            <Schedual />
            {/* <Game/> */}
        </>
    )
}
export default Home;