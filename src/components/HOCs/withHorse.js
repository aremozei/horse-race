import React, { Component } from 'react'

const HorseComponent = OriginalHorse => {
    class NewHorse extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                playerId: 0,
                score: 0,
                chairColor: 'white'
            }
        }

        idIncrement = () => {
            this.setState(prevState => {
                return { playerId: prevState.playerId + 1 }
            })
        }

        scoreCheck = () => {
            this.setState(prevState => {
                const min = Math.ceil(0)
                const max = Math.floor(100)
                prevState.score = Math.floor(Math.random * (max - min)) + min;
            })
        }

        render() {
            return <OriginalHorse
                playerId= {this.state.playerId}
                score= {this.state.score}
                chairColor= {this.state.chairColor}
                idIncrement= {this.idIncrement}
                scoreCheck= {this.scoreCheck}
            />
        }
    }
    return NewHorse
}

export default HorseComponent