import React, { Component } from 'react'
import HorseComponent from '../HOCs/withHorse'

function Horse(props) {
    const { playerId, score, chairColor } = this.props;
    
    return (
        <div>
            Hola {playerId} color {chairColor}
        </div>        
    )
}

export default Horse
