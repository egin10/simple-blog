import React, { Component } from 'react'

//STYLE
import './RockScissorPaper.css'

export default class RockScissorPaper extends Component {
    state = {
        arr: ["ROCK✊", "SCISSOR✌️", "PAPER✋"],
        score: {
            win: 0,
            lose: 0,
            draw: 0
        },
        result: {
            show: "",
            stats: ""
        }
    }

    handleRock = () => {
        let { arr } = this.state
        let result = {
            show: arr[Math.floor(Math.random * arr.length)],
            stats: "LOSE"
        }
        this.setState({ result: result }, () => this.state.result)
    }

    render() {
        let { result } = this.state
        return (
            <div className="game-rsp">
                <h2><span role="img" aria-label="Panda">ROCK✊ SCISSOR✌️ PAPER✋</span></h2>
                <hr />
                <p></p>
                <button className="btn-choice" onClick={this.handleRock}>
                    <span role="img" aria-label="Rock">ROCK✊</span>
                </button>
                <button className="btn-choice">
                    <span role="img" aria-label="Panda">SCISSOR✌️</span>
                </button>
                <button className="btn-choice">
                    <span role="img" aria-label="Panda">PAPER✋</span>
                </button>
                <p>{result.show}</p>
            </div>
        )
    }
}