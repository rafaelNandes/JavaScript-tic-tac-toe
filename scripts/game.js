//Inicializando variáveis do jogo
let board = ['','','','','','','','',''];
let playerTime = 0;
let symbols = ['shield','sword'];
let gameOver = false;
let winStates = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

/*Recebe a posição clicada tratada no arquivo interface.js,
 e atualiza o board com o simbolo do jogadore atual (0 e 1)*/
function handleMove(position){
    
    //Quando gameOver for true, a função retornará apenas true e não vai inserir os simbolos e trocar de jogador
    
    if(gameOver){
        return;     
    }   

    
    if(board[position] == ''){
        board[position] = symbols[playerTime];

        gameOver = isWin();

        if(!gameOver){
            playerTime = (playerTime == 0) ? 1 : 0;          
        }
    }
    

    return gameOver;
}

function isWin(){

    for(i = 0 ; i < winStates.length ; i++){
        let sequence = winStates[i];

        let positionA = sequence[0];
        let positionB = sequence[1];
        let positionC = sequence[2];

        if(board[positionA] == board[positionB] && board[positionA] == board[positionC] && board[positionA] != ''){
            return true;
        }
    }
}