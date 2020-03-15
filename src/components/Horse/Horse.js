import React, { Component } from 'react'
import HorseComponent from '../HOCs/withHorse'
import './horse.css'

function Horse(props) {
    const { name } = props.data;

    return (
        <div className="horse">
            {name}
        </div>        
    )
}

export default Horse
