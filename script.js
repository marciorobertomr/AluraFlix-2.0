/* function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    
    if (filmeFavorito.endsWith(".jpg")) { //verifica se o final de uma string termina com .jpg, identifcando se é uma imagem
        var elementoFilmeFavorito = "<img src=" + filmeFavorito + ">";
        var elementoListaFilmes = document.getElementById("listaFilmes");
        elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
    } else {
        console.error("Endereço de filme inválido");
    }

    document.getElementById("filme").value = ""; //Limpa o valor do campo input, retornando vazio
    
} */

/* LISTA DE FILMES PARA TESTE
    https://br.web.img2.acsta.net/medias/nmedia/18/89/39/66/20044639.jpg - Fúria de Titans 2
    https://upload.wikimedia.org/wikipedia/pt/2/28/Transformers_The_Last_Knight.jpg - Transformers 5
    https://www.themoviedb.org/t/p/original/xi3eevL5oqS2hzNAJU7g84y3rQR.jpg - Liga da Justiça de Zack Snyder
    https://img.elo7.com.br/product/zoom/2678F78/cartaz-poster-vingadores-4-ultimato-filme-marvel-avengers-colecionador.jpg - Vingadores Ultimato
    https://1.bp.blogspot.com/-xrxHo3xBdnk/YIM6lBwv4zI/AAAAAAAANEg/91vlCBV8fOIw0LMwCXk6So17GcINxEQFgCLcBGAsYHQ/s600/gladiador.jpg - Gladiador
    https://br.web.img3.acsta.net/pictures/22/04/15/22/05/1348210.jpg - Jurassic World 3: Domínio
    https://http2.mlstatic.com/D_NQ_NP_924548-MLB47711012599_092021-O.jpg - O Hobbit: A Desolação de Smaug
    https://cinema10.com.br/upload/upload/avatar%20cartaz.jpg - Avatar
*/

/*  DESAFIOS
    Criar um botão para remover um filme na tela
    Além de colocar a imagem do filme, também adicionar o nome por meio de outro input
    Guardar todos os filmes adicionados em uma lista/array e percorrer essa lista toda vez que quiser imprimir ou remover o filme
    Conversor de moedas: criar funções para cada tipo de conversão e chamá-las dependendo do que você quiser fazer, podendo colocar inputs ou botões e quando clicar chamar cada função converteDolar(), converteReal(), converteEuro() e converteBitcoin(), por exemplo
*/


//Quebra de código em partes menores 

var listaImagem = [];
var listaNome = [];
var localLista = "";

function adicionarFilme() {
    var imagemFilmeFavorito = document.getElementById("imagemFilme").value;
    var nomeFilmeFavorito = document.getElementById("nomeFilme").value;
    
    var novo = true;
    
    if (imagemFilmeFavorito.endsWith(".jpg") && nomeFilmeFavorito != "") { //verifica se o final de uma string termina com .jpg, identifcando se é uma imagem. != verifica se é diferente
        for (var teste = 0; teste < listaImagem.length; teste++) {
            if (imagemFilmeFavorito == listaImagem[teste] && nomeFilmeFavorito == listaNome[teste]) {
                alert("Filme já existente na coletânia.");
                teste = listaImagem.length;
                novo = false;
            } else if (imagemFilmeFavorito == listaImagem[teste]) {
                alert("Imagem já adicionado. Por favor, escolha outra.");
                teste = listaImagem.length;
                novo = false;
            } else if (nomeFilmeFavorito == listaNome[teste]) {
                alert("Nome já adicionado. Por favor, escolha outro.");
                teste = listaImagem.length;
                novo = false;
            }
        }
        if (novo == true) {
            listaImagem.push(imagemFilmeFavorito);
            listaNome.push(nomeFilmeFavorito);
            localLista = nomeFilmeFavorito.replace(/ /g, ""); //Remove os espaços de uma string
            listarFilmesNaTela(imagemFilmeFavorito , nomeFilmeFavorito , localLista); //Envia a variável para a função
            console.log(listaImagem);
            console.log(listaNome);
        }
    } else {
        alert("Endereço ou nome do filme inválido");
    }
    document.getElementById("imagemFilme").value = ""; //Limpa o valor do campo input, retornando vazio
    document.getElementById("nomeFilme").value = "";
}

function listarFilmesNaTela (imagemFilme , nomeFilme , localLista) { //Recebe a variável filmeFavorito na função e adiciona na nova variável filme
    var elementoFilmeFavorito = "<figure id=" + localLista + "><img src=" + imagemFilme + ">" + "<figcaption>" + nomeFilme + "</figcaption></figure>";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}

function retirarFilmesDaTela (localLista) {
    var filmeDeletado = document.getElementById(localLista); //Pega todo o campo html com o ID informado
    filmeDeletado.remove(); //Deleta o campo html completo
}

function removerFilme() {
    var imagemFilmeDeletado = document.getElementById("imagemFilme").value;
    var nomeFilmeDeletado = document.getElementById("nomeFilme").value;

    if (imagemFilmeDeletado.endsWith(".jpg") && nomeFilmeDeletado != "") {
        var confirma = confirm("Deseja excluir o filme?");
        if (confirma == true) {
            for (var i = 0; i < listaImagem.length; i++) {
                if (imagemFilmeDeletado == listaImagem[i] && nomeFilmeDeletado == listaNome[i]) {
                    var existe = true;
                    var indice = i;
                    i = listaImagem.length;
                } else {
                    var existe = false;
                }
            }
            if (existe == true) {
                listaImagem.splice(indice, 1); //Retira um elemento do array. Se quisesse excluir mais, mudava o número 1 para a quantidade de elementos
                listaNome.splice(indice, 1);
                localLista = nomeFilmeDeletado.replace(/ /g, "");
                retirarFilmesDaTela(localLista);
            } else {
                alert("O filme não existe na coletânea.");
            }
        } else {
            alert("O filme não foi excluído.")
        }
    } else {
        alert("Imagem ou nome do filme inválido");
    }
    document.getElementById("imagemFilme").value = "";
    document.getElementById("nomeFilme").value = "";
}

