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

    //HANDLER
    handleChoice = (choice) => {
        return this.checkChoice(choice)
    }

    //FUNCTION
    checkChoice = (choice) => {
        let { arr } = this.state
        let player = choice === 'ROCK' ? arr[0] : choice === 'SCISSOR' ? arr[1] : arr[2]
        let com = arr[Math.floor(Math.random() * arr.length)]
        // arr[0] = ROCK , arr[1] = SCISSOR , arr[2] = PAPER
        let stats = (com === arr[2] && player === arr[0])
            || (com === arr[0] && player === arr[1])
            || (com === arr[1] && player === arr[2]) ? 'LOSE' :
            (com === arr[1] && player === arr[0])
                || (com === arr[2] && player === arr[1])
                || (com === arr[0] && player === arr[2]) ? 'WIN' : 'DRAW'
        let result = {
            show: `(COM) ${com} <=== VS ===> ${player} (YOU)`,
            stats: stats
        }
        this.setState({ result: result })
    }

    render() {
        let { result } = this.state
        return (
            <div className="game-rsp">
                <h2><span role="img" aria-label="rock-scissor-paper">ROCK✊ SCISSOR✌️ PAPER✋</span></h2>
                <hr />
                <p>YOUR SCORE <span role="img" aria-label="rocket">🚀</span></p>
                <button className="btn-choice" onClick={() => this.handleChoice('ROCK')}>
                    <span role="img" aria-label="Rock">ROCK✊</span>
                </button>
                <button className="btn-choice" onClick={() => this.handleChoice('SCISSOR')}>
                    <span role="img" aria-label="Scissor">SCISSOR✌️</span>
                </button>
                <button className="btn-choice" onClick={() => this.handleChoice('PAPER')}>
                    <span role="img" aria-label="Paper">PAPER✋</span>
                </button>
                <hr />
                <p className="result"><span role="img" aria-label="rock-scissor-paper">{result.show}</span></p>
                <p className={result.stats}>{result.stats}</p>
            </div>
        )
    }
}