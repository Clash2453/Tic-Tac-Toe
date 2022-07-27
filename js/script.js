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

            while(marker === false){

                const aiMove = Math.floor(Math.random(1, 10));

                if(!isNaN(row[aiMove]) && row[aiMove] !== player1.indicator){
                        marker = true;
                        row[Math.floor(Math.random(1, 10))] = 'o';
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
        if(el === ai.indicator){
            return `${player1.playerName} wins`;
        }
    }

    const gameState = () =>{
        board.forEach(row => row.every(el => winCon));
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