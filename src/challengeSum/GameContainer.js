import React, { Component } from "react";
import Board from './Board'

//TODO make new level functionality

class GameContainer extends React.Component {

    state = {
        gameId: 1,
    };

    resetGame = () =>
        this.setState((prevState) => ({
            gameId: prevState.gameId + 1,
        }));

    render() {
        return (
            <Board    
                key={this.state.gameId}
                autoPlay={this.state.gameId > 1}
                challengeSize={6}
                challengeRange={[2, 9]} 
                initialSeconds={10}
                onPlayAgain={this.resetGame}
            />
        )
    }

}

export default GameContainer;