import React, {useEffect, useState} from 'react';
import Horse from '../Horse/Horse';

function Circuit() {
    let pokemons = []; //Players for the moment

    useEffect(() => {
        fetchPlayers();
        // makeHorses();
    },[]);
    //Brackets means it will only run when it mounts

    const [items, setPlayers] = useState([]);

    const fetchPlayers = async () => {
        for (let i = 0;  i <= randomPlayersNumber(1,12); i++) {
            let data = await fetch('https://pokeapi.co/api/v2/pokemon/'+ randomID(200))
            let pokemon = await data.json()
            pokemons.push(pokemon)
        }
        console.log(pokemons)
        setPlayers(pokemons)
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
        // <>Holi</>
        <>
            {items.map(pokemon => (
              <Horse props={pokemon} />  
            ))}
        </>
        // <>
        //     {pokemons &&
        //         <>
        //             {pokemons.map(pokemon => (
        //                 <Horse props={pokemon} />
        //             ))}
        //         </>
        //     }
        // </>
    )
}

export default Circuit;


// import React, { Component } from 'react'
// // import Horse from '../Horse/Horse'
//OLD
// class Circuit extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             players: [
//                 {call:'station one',frequency:'000'},
//                 {call:'station two',frequency:'001'}
//             ],
//             raceId: ""
//         }
//     }

//     render() {
//         const { players } = this.state
        
//         return (
//             <>
//                 {players.map(player => 
//                        <div> Hello {player.call} from {player.frequency} </div>
//                 )}
//             </>
//         )
//     }
// }

// export default Circuit