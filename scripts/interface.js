document.addEventListener('DOMContentLoaded', () => {   //Chamar a função após carregamento da tela
    
    //Busca cada square e adiciona no array Squares
    let squares = document.querySelectorAll(".square"); 

    //Percorre o array Square e se houver evento de clique em algum chama a função handleClick
    squares.forEach((square) => {
        square.addEventListener('click', handleClick); 
    })
})

function handleClick(event){
    /*
    Chama a função handleMove no arquivo game.js
    Parâmetro é o id da DIV em que houve o evento de clique.
    */
    let position = event.target.id
    if(handleMove(position)){
        
        setTimeout(() => {
            alert("O jogo acabou, ganhador é o Player " + playerTime);
        }, 10);
        
    }    
    updateSquare(position);

}

//Varre os squares da tela novamente e, se o square clicado estiver vazio, adiciona nele o simbolo respectivo do atual jogador.
function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;

}