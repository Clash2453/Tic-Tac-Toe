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

    const makeMove = (index) =>{
        board.forEach(row=>{
            if(row.includes(index))
                row[row.indexOf(index)] = player1.indicator;

            let marker = false;

            while(marker === false){

                if(!isNaN(row[Math.floor(Math.random(1, 10))])){
                        marker = true;
                        row[Math.floor(Math.random(1, 10))];
                    }
            }
        })
    }

    const winCon = (el) => {
        if(el === player1.indicator){
            return `${player1.playerName} wins`;
        }
        if(el === ai.indicator){
            return `${player1.playerName} wins`;
        }
    }

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