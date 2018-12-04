//TODO: refactor into separate components
import React, { Component } from "react";
import Number from './Number'
var _ = require('lodash');

class Board extends React.Component {

    colors = {
        new: 'lightblue',
        playing: 'deepskyblue',
        won: 'lightgreen',
        lost: 'lightcoral',
    };

    bgColors = {
        playing: '#ccc',
        won: 'green',
        lost: 'red',
    };

    //challengeSize is an int, challengeRange is a two integer array
    //challengeSize must be 2 or greater
    constructor(props) {
        super(props)
        this.challengeNumbers = this.constructNumbers()
        this.target = this.computeTarget()

        //core of react
        this.state = {
            gameStatus: 'new', // new, playing, won, lost
            remainingSeconds: this.props.initialSeconds,
            selectedIds: [],
        };
    }

    startGame = () => {
        this.setState({ gameStatus: 'playing' }, () => {
          this.intervalId = setInterval(() => {
            this.setState((prevState) => {
              const newRemainingSeconds = prevState.remainingSeconds - 1;
              if (newRemainingSeconds === 0) {
                clearInterval(this.intervalId);
                return { gameStatus: 'lost', remainingSeconds: 0 };
              }
              return { remainingSeconds: newRemainingSeconds };
            });
          }, 1000);
        });
    };

    selectNumber = (numberIndex) => {
        console.log('selected ' + numberIndex);
        if (this.state.gameStatus !== 'playing') {
          return;
        }
        this.setState(
          (prevState) => ({
            selectedIds: [...prevState.selectedIds, numberIndex],
            gameStatus: this.calcGameStatus([
              ...prevState.selectedIds,
              numberIndex,
            ]),
          }),
          () => {
            if (this.state.gameStatus !== 'playing') {
              clearInterval(this.intervalId);
            }
          }
        );
      };
      
      calcGameStatus = (selectedIds) => {
        const sumSelected = selectedIds.reduce(
          (acc, curr) => acc + this.challengeNumbers[curr],
          0
        );
        if (sumSelected < this.target) {
          return 'playing';
        }
        return sumSelected === this.target ? 'won' : 'lost';
      };

    isNumberAvailable(numberIndex) {
        return this.state.selectedIds.indexOf(numberIndex) === -1;
    }

    // state = {
    //     gameStatus: 'playing',
    //     remainingSeconds: 7,
    //     selectedIds: [0, 3, 4],
    //   };
      
    //   // Also test with
    //     gameStatus: 'lost'
      
    //   // And
    //     gameStatus: 'won'

    randomNumberBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    constructNumbers() {
        let numbers = []

        for (let i = 0; i < this.props.challengeSize; i++) {
            numbers.push(this.randomNumberBetween(...this.props.challengeRange))
        }

        console.log(numbers);
        return numbers;
    }

    computeTarget() {
        let target = _.sampleSize(
            this.challengeNumbers,
            this.randomNumberBetween(2, this.props.challengeSize)
        ).reduce((acc, curr) => acc + curr, 0);
        
        console.log(target);

        return target;
    }

    render() {
      return (
        <div className="game">
          <div className="help">
            Pick numbers that sum to the target in {this.props.initialSeconds} seconds
          </div>
          <div 
            className="target"
            style={{ backgroundColor: this.bgColors[this.state.gameStatus] }}
          >
            {this.state.gameStatus === 'new' ? '?' : this.target}
          </div>
          <div className="challenge-numbers">
          {/* TODO: fix map and subsequent onclick shenanigans */}
            {this.challengeNumbers.map((value, index) =>
            <Number 
                key={index} 
                id={index}
                value={this.state.gameStatus === 'new' ? '?' : value}
                clickable={this.isNumberAvailable(index)}
                onClick={this.selectNumber}
            />
            )}
          </div>
          <div className="footer">
          {this.state.gameStatus === 'new' ? (
                <button onClick={this.startGame}>Start</button>
            ) : (
                <div className="timer-value">{this.state.remainingSeconds}</div>
            )}
            {['won', 'lost'].includes(this.state.gameStatus) && (
                <button>Play Again</button>
            )}
          </div>
        </div>
      );
    }

    //TODO create parent component thats a controler to get a message to reset the game
    componentWillUnmount() {
        clearInterval(this.intervalId);
      }

  }



  export default Board;