import React, {useEffect, useState} from 'react';
// import Horse from '../Horse/Horse';
import RaceTrack from '../Tracks/HorseTrack';

function Circuit() {
    let pokemons = []; //Players for the moment
    let displayLoading = true;
    const [items, setPlayers] = useState([]);
    const [displayLoadingSpinner, setLoading] = useState([true]);

    useEffect(() => {
        fetchPlayers(); 
    },[]);

    useEffect(() => {
    },[displayLoading])

    const fetchPlayers = async () => {
        for (let i = 0;  i <= randomPlayersNumber(1,12); i++) {
            let data = await fetch('https://pokeapi.co/api/v2/pokemon/'+ randomID(200))
            let pokemon = await data.json()
            pokemons.push(pokemon)
        }
        console.log(pokemons)
        setPlayers(pokemons)
        setLoading(false)
    }

    const randomPlayersNumber = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; 
    }

    const randomID = (max) => {
        return Math.floor(Math.random() * Math.floor(max)); //Id for the pokemon api call
    }

    return (
        <>
            <div id="earth">
                {displayLoadingSpinner ? 
                <>
                    <h1>Loading</h1>
                </>
                : 
                    <>
                        <div className="sky">

                        </div>
                        <div className="dirt">
                            {/* <RaceTrack itemQuantity={pokemons.length} props={pokemons[1]} /> */}
                            {items.map((pokemon, index) => (
                                <RaceTrack itemQuantity={pokemons.length} key={index} props={pokemon} />  
                            ))}
                        </div>
                    </>
                }
            </div>
        </>
        
    )
}

export default Circuit;