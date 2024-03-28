import React from 'react';
import BackgroundVideo from './Background';
import Game from './Game';
import Schedual from './Schedual';
import Timeline from './Timeline';
import Map from './Map';
import General_rules from './General_rules';
import Form from './Form';

function Home(){
    return(
        <>
            {/* <Navbar/> */}
            <BackgroundVideo/>
            <General_rules/>
            {/* <Timeline/> */}
            <Schedual />
            <Map/>
            {/* <Form/> */}
            {/* <Game/> */}
        </>
    )
}
export default Home;