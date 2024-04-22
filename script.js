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
    let nomeFilmeFavoritoInput = document.getElementById("nomeFilme");
    let imagemFilmeFavoritoInput = document.getElementById("imagemFilme");

    let nomeFilmeFavorito = nomeFilmeFavoritoInput.value;
    let imagemFilmeFavorito = imagemFilmeFavoritoInput.value;

    nomeFilmeFavorito = nomeFilmeFavorito.trim();
    imagemFilmeFavorito = imagemFilmeFavorito.replace(/\s/g, '');
    
    let novo = true;
    let filmes = coletaneaFilmes();

    let filme = {
        nome: nomeFilmeFavorito,
        imagem: imagemFilmeFavorito
    }

    
    if (imagemFilmeFavorito.endsWith(".jpg") && nomeFilmeFavorito != "") {
        for (let i = 0; i < filmes.length; i++) {
            if (nomeFilmeFavorito === filmes[i].nome && imagemFilmeFavorito === filmes[i].imagem) {
                alert("Filme já existente na coletânia.");
                novo = false;
                break;
            } else if (imagemFilmeFavorito === filmes[i].imagem) {
                alert("Imagem já adicionado. Por favor, escolha outra.");
                novo = false;
                break;
            } else if (nomeFilmeFavorito == filmes[i].nome) {
                alert("Nome já adicionada. Por favor, escolha outro.");
                novo = false;
                break;
            }
        }
    
        if (novo == true) {
            let localLista = nomeFilmeFavorito.replace(/ /g, "").toLowerCase();
            localStorage.setItem(localLista, JSON.stringify(filme));
            listarFilmesNaTela();
        }
    } else {
        alert("Endereço ou nome do filme inválido");
    }
    
    nomeFilmeFavoritoInput.value = ""; 
    imagemFilmeFavoritoInput.value = "";

}

function listarFilmesNaTela () {
    let elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = '';

    let elementoFilmeFavorito = '';
    let filmes = coletaneaFilmes();

    for(let i = 0; i < filmes.length; i++) {
        elementoFilmeFavorito += "<figure id=" + filmes[i].identificador + "><img src=" + filmes[i].imagem + ">" + "<figcaption>" + filmes[i].nome + "<abbr title='Remover'><ion-icon class='remover' name='close-outline'></abbr></ion-icon></figcaption></figure>";

    }

    elementoListaFilmes.innerHTML = elementoFilmeFavorito;

    let remover = document.querySelectorAll('.remover');
    remover.forEach((icone) => {
        icone.addEventListener('click', () => {
            let iconeBorda = icone.parentElement;
            let legenda = iconeBorda.parentElement;
            let divFilme = legenda.parentElement;
            removerFilme(divFilme, legenda);
        })
    })
}

function coletaneaFilmes() {
    let filmes = [];

    for(let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i);

        let valor = JSON.parse(localStorage.getItem(chave));

        let filme = {
            identificador: chave,
            nome: valor.nome,
            imagem: valor.imagem
        }

        filmes.push(filme);
    }

    return filmes;
}

function removerFilme(idFilme, legenda) {
    let confirma = confirm("Deseja excluir o filme: " + legenda.textContent);
    
    if(confirma) {
        let filmeDeletado = document.getElementById(idFilme.id); 
        localStorage.removeItem(idFilme.id);
        filmeDeletado.remove();
    } else {
        alert("O filme não foi excluído.")
    }
}



listarFilmesNaTela();