import React, { Component } from "react";

//STYLE
import "./RockScissorPaper.css";

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
  };

  //HANDLER
  handleChoice = choice => {
    return this.checkChoice(choice);
  };

  //FUNCTION
  checkChoice = choice => {
    let { arr } = this.state;
    let player =
      choice === "ROCK" ? arr[0] : choice === "SCISSOR" ? arr[1] : arr[2];
    let com = arr[Math.floor(Math.random() * arr.length)];
    // arr[0] = ROCK , arr[1] = SCISSOR , arr[2] = PAPER
    let stats =
      (com === arr[2] && player === arr[0]) ||
      (com === arr[0] && player === arr[1]) ||
      (com === arr[1] && player === arr[2])
        ? "LOSE"
        : (com === arr[1] && player === arr[0]) ||
          (com === arr[2] && player === arr[1]) ||
          (com === arr[0] && player === arr[2])
        ? "WIN"
        : "DRAW";
    let result = {
      show: `(COM) ${com} <=== VS ===> ${player} (YOU)`,
      stats: stats
    };

    //Check Stats
    stats === "WIN"
      ? this.setState({
          score: { ...this.state.score, win: this.state.score.win + 1 }
        })
      : stats === "LOSE"
      ? this.setState({
          score: { ...this.state.score, lose: this.state.score.lose + 1 }
        })
      : this.setState({
          score: { ...this.state.score, draw: this.state.score.draw + 1 }
        });

    this.setState({ result: result });
  };

  render() {
    let { result, score } = this.state;
    return (
      <div className="game-rsp">
        <h2>
          <span role="img" aria-label="rock-scissor-paper">
            ROCK✊ SCISSOR✌️ PAPER✋
          </span>
        </h2>
        <hr />
        <h3>
          YOUR SCORE
          <span role="img" aria-label="rocket">
            🚀
          </span>
        </h3>
        <p>
          WIN : {score.win}
          <br /> LOSE : {score.lose}
          <br /> DRAW : {score.draw}
        </p>
        <button
          className="btn-choice"
          onClick={() => this.handleChoice("ROCK")}
        >
          <span role="img" aria-label="Rock">
            ROCK✊
          </span>
        </button>
        <button
          className="btn-choice"
          onClick={() => this.handleChoice("SCISSOR")}
        >
          <span role="img" aria-label="Scissor">
            SCISSOR✌️
          </span>
        </button>
        <button
          className="btn-choice"
          onClick={() => this.handleChoice("PAPER")}
        >
          <span role="img" aria-label="Paper">
            PAPER✋
          </span>
        </button>
        <hr />
        <p className="result">
          <span role="img" aria-label="rock-scissor-paper">
            {result.show}
          </span>
        </p>
        <p className={result.stats}>{result.stats}</p>
      </div>
    );
  }
}
