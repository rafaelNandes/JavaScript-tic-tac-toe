//Inicializando variáveis do jogo
let board = ['','','','','','','','',''];
let playerTime = 0;
let symbols = ['shield','sword'];

/*Recebe a posição clicada tratada no arquivo interface.js,
 e atualiza o board com o simbolo do jogadore atual (0 e 1)*/
function handleMove(position){
    
    if(board[position] == ''){
        board[position] = symbols[playerTime];

        if(playerTime == 0){
                playerTime = 1;
        }else{
            playerTime = 0;
        }
    }
}