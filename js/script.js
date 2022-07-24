const playerFactory = (playerName, indicator) => {

    const makeMove = () =>{
        return Math.floor(Math.random(1, 10));
    }

    return {playerName, indicator, makeMove};
}

const gameBoard = (() =>{

    const player1 = playerFactory('clash', 'x');
    const ai = playerFactory('AI', 'o');
    
    const board = [ ['.','.','.'],
                    ['.','.','.'],
                    ['.','.','.']];

    const boardState = () =>{
        console.log(board);
    }

    const makeMove = () =>{
        
    }

    return {
        boardState
    }
    
})();

