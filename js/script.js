const playerFactory = (playerName, indicator) => {

    const makeMove = () =>{
        return 
    }

    return {playerName, indicator, makeMove};
}

const gameBoard = (() =>{

    const player1 = playerFactory('clash', 'x');
    const ai = playerFactory('AI', 'o');

    const board = [ [1,2,3],
                    [4,5,6],
                    [7,8,9]];

    const boardState = () =>{
        console.log(board);
    }

    const aiMove = () => {
        let done = false;
        while(done===false){
            let x = Math.floor(Math.random()*3);
            let y = Math.floor(Math.random()*3);
            console.log('ai thinking')
            if(!isNaN(board[x][y])){
                done = true;
                board[x][y] = ai.indicator;
            }
        }

            let marker = false;

    const makeMove = (index) =>{

        for (let i = 0; i < board.length; i++) {
            const row = board[i];
            for (let k = 0; k < row.length; k++) {
                let element = row[k];
                if(element === index){
                    board[i][k] = player1.indicator;
                    aiMove();
                    boardState();
                    winCon([[board[0][0], board[1][1], board[2][2]], [board[0][2], board[1][1], board[2][0]]]);
                    winCon(transposeMatrix(board));
                    winCon(board);
                    console.log('here I am');
                    return;
                }
            }
        });

            
        boardState();
        console.log('here I am');
        }

    const winCon = (el) => {
        if(el === player1.indicator){
            return `${player1.playerName} wins`;
    }
    const winCon = (arr) => {

        arr.forEach(row => {
            if(row.every(value => value === player1.indicator)){
                console.log('Player won');
                resetBoard();
            }

            if(row.every(value => value === ai.indicator)){
                console.log('AI won');
                resetBoard();
            }

        })
    }
    return {
        boardState,
        makeMove,
        gameState,
    }
    
})();

const displayController = (() =>{
    
    const areas = [...document.getElementsByClassName('area')];

    const updateMove = (arg) => {
        const image = document.createElement('img');

        if(arg === 'o')
            image.src('../images/circle.png');

        image.src('../images/X.png');
        
        image.classList.add('marker');

    }

    areas.forEach(area => area.addEventListener('click', function () {
        gameBoard.makeMove(Number(area.dataset.number));

    })
    );

})();