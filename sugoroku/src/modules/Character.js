import React from 'react';
import cat from '../img/cat.png';
import wolf from '../img/wolf.png';

class Character extends React.Component {
    constructor(prop){
        super(prop);
        this.state = {characterImg : '../img/cat.png'};
    }

    render() {
        return (<img className="character-img" alt='character' src={this.state.characterImg}/>);
    }
}

class Cat extends Character {
    constructor(prop){
        super(prop);
        this.state = {characterImg : cat};
    }
}

class Wolf extends Character {
    constructor(prop){
        super(prop);
        this.state = {characterImg : wolf};
    }
}


function characterFactory (characterType, key) {
    switch (characterType) {
        case 'cat':
            return <Cat key={key}/>;
        case 'wolf':
            return <Wolf key={key}/>;
        default:
            break;
    }
}

export {characterFactory};