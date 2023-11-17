
function adicionarFilme(){
    //Pegar um elemento do html
    var filmeFavorito = document.getElementById('filme').value;
    
    var elementoListaFilmes = document.getElementById('listaFilmes');

    //Adicionar um elemento no HTML
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + '<img src =' + filmeFavorito + '>';
     
    document.getElementById('filme').value = null;
}