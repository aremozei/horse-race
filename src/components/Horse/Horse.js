import React, { Component } from 'react'
import HorseComponent from '../HOCs/withHorse'

function Horse(props) {
    const { name } = props.props;

    return (
        <div>
            Hola {name}
        </div>        
    )
}

export default Horse
