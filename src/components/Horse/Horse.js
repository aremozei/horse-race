import React, { Component } from 'react'
import HorseComponent from '../HOCs/withHorse'
import { useSpring, animated } from 'react-spring'
import './horse.scss'

function Horse(props) {
    const { name } = props.data;

    const moveWithScore = () => {
        let min = Math.ceil(0);
        let max = Math.floor(100);
        let val = Math.floor(Math.random() * (max - min)) + min;
        return val.toString();
    }
    
    // while(1) {

    // }
    // setInterval(useSpring({

    // }))
    const horseMovement = useSpring({
        from: { left: '0%' },
        to:  async next => {
            await next ({ left: moveWithScore() + '%' })
        }
    })
    // const horseMovement = useSpring({ 
    //     // from : { 
    //     //     // opacity: 1, from: { opacity: 0} 
    //     //     left: '0%'
    //     //     // right: '0%'
    //     // },
    //     to:  {
    //         left: moveWithScore() + '%'
    //     }
    // });

    return (
        <animated.div style={horseMovement} className={"horse " }>
            {name}
        </animated.div>        
    )
}

export default Horse
