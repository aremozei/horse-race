import React from 'react'
import Horse from '../Horse/Horse'

function HorseTrack(player) {
    const playerData = player.props;
    const numberOfPokemons = player.itemQuantity;

    return (
        <div className="race-track">
            {/* <hr></hr> */}
            <Horse data={playerData} />
        </div>
    )
}

export default HorseTrack
