import React from 'react';

import {characterFactory} from './Character';
import {Helper} from './Helper';

class Board extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            players: [
                {
                    playerId: 1,
                    position: 0,
                    characterType: 'cat'
                },
                {
                    playerId: 2,
                    position: 0,
                    characterType: 'wolf'
                },
            ],
            playerTarn: 1,
            diceNum: '',
        };

        this.goalPosition = 7;
    }


    getNextPlayerTarn() {
        if (this.state.players.length === this.state.playerTarn) {
            return 1; // 最後の人が終わったら初めからにする
        }
        return this.state.playerTarn　+ 1;
    }

    isGoalPosition(position) {
        return this.goalPosition <= position;
    }

    rollDice() {
        const diceNum = Helper.getDiceNumber();

        this.setState({
            players: this.state.players.map((player) => {
                if (player.playerId === this.state.playerTarn) {

                    if(this.isGoalPosition(player.position + diceNum)) {
                        player.position = this.goalPosition;
                    }else {
                        player.position = player.position + diceNum;
                    }
                }
                return player
            }),
            diceNum: diceNum,
            playerTarn: this.getNextPlayerTarn()
        });
    }


    renderSquares(squareCount) {
        return (
            <div className='square'>{
                this.state.players.map((player, key) => {
                if (player.position === squareCount) {
                    return characterFactory(player.characterType, key);
                }
                return '';
            })}</div>
        );
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <div className='boarder-row'>{this.renderSquares(0)}</div>
                    <div className='boarder-row'>{this.renderSquares(1)}</div>
                    <div className='boarder-row'>{this.renderSquares(2)}</div>
                    <div className='boarder-row'>{this.renderSquares(3)}</div>
                    <div className='boarder-row'>{this.renderSquares(4)}</div>
                    <div className='boarder-row'>{this.renderSquares(5)}</div>
                    <div className='boarder-row'>{this.renderSquares(6)}</div>
                    <div className='boarder-row'>{this.renderSquares(7)}</div>
                </div>
                <div>
                    <button onClick={this.rollDice.bind(this)}>サイコロを振る → [{this.state.diceNum}]</button>
                </div>
            </React.Fragment>
        );
    }
}

export default Board;