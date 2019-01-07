import React, { Component } from "react";
import SnakeBoard from "./snakeBoard";

import * as constants from '../util/constants';

class Snake extends Component {

    newDirectionPressed = false;
    lastDirectionPressed = "";
    boardSize = 10;

    gameTick;

    componentDidMount() {
        document.addEventListener('keydown', this.trackPress);

        // const self = this;
        this.gameTick = setInterval(() => {
            console.log('tick', self.newDirectionPressed);
            if (self.newDirectionPressed) {
                self.newDirectionPressed = false;
                console.log('trigger reducer for direction pressed');
                self.props.directionPressed(self.keyPressed);
            }
        }, 1000);
      }

    trackPress(event) {
        if (!event.key) return; 

        console.log('key down detected', event.key);

        const key = event.key;
        if (constants.arrowKeys.includes(key) && key != this.lastDirectionPressed) {
            this.lastDirectionPressed = key;
            this.keyPressed = key;
            // this.props.directionPressed(key);
        } else {
            console.log('incorrect key or same key detected');
        }
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.trackPress);
        clearInterval(this.gameTick);
    }
    
    render() {
        return (
            <div className="game">
                <SnakeBoard size={this.boardSize}/>
            </div>
        );
    }

}
export default Snake;
