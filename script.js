/* LISTA DE FILMES PARA i
    https://br.web.img2.acsta.net/medias/nmedia/18/89/39/66/20044639.jpg - Fúria de Titans 2
    https://upload.wikimedia.org/wikipedia/pt/2/28/Transformers_The_Last_Knight.jpg - Transformers 5
    https://www.themoviedb.org/t/p/original/xi3eevL5oqS2hzNAJU7g84y3rQR.jpg - Liga da Justiça de Zack Snyder
    https://img.elo7.com.br/product/zoom/2678F78/cartaz-poster-vingadores-4-ultimato-filme-marvel-avengers-colecionador.jpg
    Vingadores Ultimato
    https://1.bp.blogspot.com/-xrxHo3xBdnk/YIM6lBwv4zI/AAAAAAAANEg/91vlCBV8fOIw0LMwCXk6So17GcINxEQFgCLcBGAsYHQ/s600/gladiador.jpg - Gladiador
    https://br.web.img3.acsta.net/pictures/22/04/15/22/05/1348210.jpg - Jurassic World 3: Domínio
    https://http2.mlstatic.com/D_NQ_NP_924548-MLB47711012599_092021-O.jpg - O Hobbit: A Desolação de Smaug
    https://cinema10.com.br/upload/upload/avatar%20cartaz.jpg
    Avatar
    https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/08/25/one-piece-netflix-1jefhfx050m02.jpg
    One Piece
    https://images.justwatch.com/backdrop/312101817/s640/avatar-the-last-airbender.%7Bformat%7D.jpg
    The Last Airbender
*/

function adicionarFilme() {
    let imagemFilmeFavorito = document.getElementById("imagemFilme").value;
    let nomeFilmeFavorito = document.getElementById("nomeFilme").value;

    nomeFilmeFavorito = nomeFilmeFavorito.trim();
    imagemFilmeFavorito = imagemFilmeFavorito.replace(/\s/g, '');
    
    let novo = true;
    
    if (imagemFilmeFavorito.endsWith(".jpg") && nomeFilmeFavorito != "") { //verifica se o final de uma string termina com .jpg, identifcando se é uma imagem. != verifica se é diferente
        for (let i = 0; i < listaImagem.length; i++) {
            if (imagemFilmeFavorito == listaImagem[i] && nomeFilmeFavorito == listaNome[i]) {
                alert("Filme já existente na coletânia.");
                novo = false;
                break;
            } else if (imagemFilmeFavorito == listaImagem[i]) {
                alert("Imagem já adicionado. Por favor, escolha outra.");
                novo = false;
                break;
            } else if (nomeFilmeFavorito == listaNome[i]) {
                alert("Nome já adicionado. Por favor, escolha outro.");
                novo = false;
                break;
            }
        }

        if (novo == true) {
            listaImagem.push(imagemFilmeFavorito);
            listaNome.push(nomeFilmeFavorito);
            localLista = nomeFilmeFavorito.replace(/ /g, ""); //Remove os espaços de uma string
            listarFilmesNaTela(imagemFilmeFavorito , nomeFilmeFavorito , localLista.toLowerCase()); //Envia a variável para a função
        }
    } else {
        alert("Endereço ou nome do filme inválido");
    }
    document.getElementById("imagemFilme").value = ""; //Limpa o valor do campo input, retornando vazio
    document.getElementById("nomeFilme").value = "";
}

function listarFilmesNaTela (imagemFilme , nomeFilme , localLista) {
    let elementoFilmeFavorito = "<figure id=" + localLista + "><img src=" + imagemFilme + ">" + "<figcaption>" + nomeFilme + "</figcaption></figure>";
    let elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}

function removerFilme() {
    let imagemFilmeDeletado = document.getElementById("imagemFilme").value;
    let nomeFilmeDeletado = document.getElementById("nomeFilme").value;

    nomeFilmeDeletado = nomeFilmeDeletado.trim();
    imagemFilmeDeletado = imagemFilmeDeletado.replace(/\s/g, '');

    let existe;
    let indice;

    if (imagemFilmeDeletado.endsWith(".jpg") && nomeFilmeDeletado != "") {
        let confirma = confirm("Deseja excluir o filme?");
        if (confirma == true) {
            for (let i = 0; i < listaImagem.length; i++) {
                if (imagemFilmeDeletado == listaImagem[i] && nomeFilmeDeletado == listaNome[i]) {
                    existe = true;
                    indice = i;
                    break;
                } else {
                    existe = false;
                }
            }

            if (existe === true) {
                listaImagem.splice(indice, 1); 
                listaNome.splice(indice, 1);
                localLista = nomeFilmeDeletado.replace(/ /g, "");
                retirarFilmesDaTela(localLista.toLowerCase());
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

function retirarFilmesDaTela (localLista) {
    let filmeDeletado = document.getElementById(localLista); 
    filmeDeletado.remove();
}

let listaImagem = [];
let listaNome = [];
let localLista = "";