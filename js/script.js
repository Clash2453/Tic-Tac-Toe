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
        
    const gameState = () =>{
        board.forEach(row => row.every(el => winCon));
    }

    return {
        boardState
    }
    
})();

const displayController = (() =>{
    
    const board = document.getElementById('game-board');
    const areas = [...board.childNodes];
    const addMarker = (index) =>{
        gameBoard.makeMove()
    }
    areas.forEach(area => area.addEventListener('click', addMarker(area.nodeValue)));

})();