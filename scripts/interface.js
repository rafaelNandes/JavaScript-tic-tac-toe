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
    handleMove(event.target.id); 
    
    updateSquares();

}

//Varre os squares da tela novamente e, se o square clicado estiver vazio, adiciona nele o simbolo respectivo do atual jogador.
function updateSquares(){
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if(symbol != ''){
            square.innerHTML = `<div class='${symbol}'> </div>`;
        }
    })

   

}