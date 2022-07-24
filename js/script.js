const playerFactory = (playerName, indicator) => {

    const makeMove = () =>{
        return Math.floor(Math.random(1, 10));
    }

    return {playerName, indicator, makeMove};
}
