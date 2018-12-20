import React, { Component } from "react";
import SnakeBoard from "./snakeBoard";

class SnakeContainer extends Component {

    boardSize = 8
    
    render() {
        return (
            <div className="game">
                <SnakeBoard size={this.boardSize}/>
            </div>
        );
    }

}
export default SnakeContainer;
