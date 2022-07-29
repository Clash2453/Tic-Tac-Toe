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

    const resetBoard = () =>{
        let counter = 1;
        for (let i = 0; i < board.length; i++) {
            const row = board[i];
            for (let k = 0; k < row.length; k++) {
                row[k] = counter;
                counter++;
            }
        }
    }

    const aiMove = () => {
        let done = false;
        while(done===false){
            let x = Math.floor(Math.random()*3);
            let y = Math.floor(Math.random()*3);
            console.log('ai thinking')
            if(!isNaN(board[x][y])){
                let areaNumber = board[x][y];
                done = true;
                board[x][y] = ai.indicator;
                return areaNumber;
            }
        }

    }
    const transposeMatrix = () => {
        return [[board[0][0],board[1][0],board[2][0]],
        [board[0][1],board[1][1],board[2][1]],
        [board[0][2],board[1][2],board[2][2]]];
    }
    const makeMove = (index) =>{

        for (let i = 0; i < board.length; i++) {
            const row = board[i];
            for (let k = 0; k < row.length; k++) {
                let element = row[k];
                if(element === index){
                    board[i][k] = player1.indicator;
                    aiMove();
                    boardState();

                    displayController.updateMove(index, player1.indicator);
                    displayController.updateMove(aiMove(), ai.indicator);

                    winCon([[board[0][0], board[1][1], board[2][2]], [board[0][2], board[1][1], board[2][0]]]);
            
                    winCon(transposeMatrix(board));
                    winCon(board);

                    console.log('here I am');
                    return;
                }
            }
            
        }

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
    }
    
})();

const displayController = (() =>{
    
    const areas = [...document.getElementsByClassName('area')];

    const updateMove = (arg, marker) => {
        const area = document.querySelector(`[data-number="${arg}"]`);
        const image = document.createElement('img');
        image.classList.add('marker');

        if(marker === 'o'){
            image.src = '../images/circle.png';
            area.appendChild(image)
            return;
        }

        image.src = '../images/X.png';
        area.appendChild(image)

    }
    const resetBoard = () => {
        areas.forEach(area =>{
            if(area.childNodes.length !== 0)
                area.removeChild(area.childNodes[0]);
        })
    }
    function move() {
        gameBoard.makeMove(Number(this.dataset.number));
    }
    
    const addEvent = () => {
        areas.forEach(area => area.addEventListener('click', move)
        );    
    }

    const removeEvent = (area) =>{
        area.removeEventListener('click', move);
    } 

    addEvent();
    return {
        updateMove,
        addEvent,
        resetBoard,
        addEvent
    }

})();