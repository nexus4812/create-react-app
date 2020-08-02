class Helper {
    static getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    static getDiceNumber() {
        return Helper.getRandomInt(1,6);
    }
}

export {Helper};