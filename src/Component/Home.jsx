import React from 'react';
import BackgroundVideo from './Background';
import Game from './Game';
import Schedual from './Schedual';
import Timeline from './Timeline';
import Map from './Map';
import General_rules from './General_rules';
import Form from './Form';
import Payment from './Payment';
import Timeline_new from './New_timeline';
import Particle from './Particle';

function Home(){
    return(
        <>
            {/* <Navbar/> */}
            <BackgroundVideo/>
            <General_rules/>
            {/* <Timeline/> */}
            <Timeline_new/>
            <Schedual />
            <Map/>
            <Payment/>
            {/* <Form/> */}
            {/* <Game/> */}
            {/* <Particle/> */}
        </>
    )
}
export default Home;