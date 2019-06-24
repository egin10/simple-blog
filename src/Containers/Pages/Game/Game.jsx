import React, { Component } from 'react'

//STYLE
import './Game.css'

export default class Game extends Component {
    moveToRSP = () => {
        this.props.history.push('/games/rsp')
    }
    render() {
        return (
            <div className="games">
                <h2><span role="img" aria-label="alien-robot">👾 GAMES 🤖</span></h2>
                <button className="btn-games" onClick={this.moveToRSP}>
                    <span role="img" aria-label="rock-scissor-paper">Rock✊ Scissor✌️ Paper✋</span>
                </button>
            </div>
        )
    }
}