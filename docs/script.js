let carta1 = {
    nome: "Bulbassauro",
    imagem: "https://p4.wallpaperbetter.com/wallpaper/761/368/837/pokemon-bulbasaur-pokemon-pokemon-tcg-hd-wallpaper-preview.jpg",
    atributos: {
        ataque: 4,
        defesa: 6,
        magia: 5
    }
}

let carta2 = {
    nome: "Charmander",
    imagem: "https://i.pinimg.com/originals/a7/38/2e/a7382e4d941b07f4300bf52b950eb3a9.jpg",
    atributos: {
        ataque: 7,
        defesa: 4,
        magia: 5
    }
}

let carta3 = {
    nome: "Squirtle",
    imagem: "https://i.pinimg.com/originals/51/40/41/514041a2c265ccd31df9152a76a701f3.jpg",
    atributos: {
        ataque: 4,
        defesa: 7,
        magia: 6
    }
}

let cartas = [carta1, carta2, carta3];
let cartaMaquina;
let cartaJogador;

function sortearCarta() {
    let cardSystemNumber = parseInt(Math.random() * cartas.length);
    cartaMaquina = cartas[cardSystemNumber];

    let cardPLayerNumber;
    do {
        cardPLayerNumber = parseInt(Math.random() * cartas.length);
    } while (cardPLayerNumber == cardSystemNumber)
    cartaJogador = cartas[cardPLayerNumber];

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false
    console.log(cartaJogador)
    console.log(cartaMaquina)

    exibirCarta();
    zerarCarta();
}


function atributoSelecionado() {
    let selecionado = document.getElementsByName("atributo")
    for (let i = 0; i < selecionado.length; i++) {
        if (selecionado[i].checked == true) {
            return selecionado[i].value;
        }
    }
}

function jogar() {
    var atributo = atributoSelecionado();
    let resultado = document.getElementById("resultado")
    if (cartaJogador.atributos[atributo] > cartaMaquina.atributos[atributo]) {
        resultado.innerHTML = `<p class="resultado-final">Venceu!</p>`
    } else if (cartaJogador.atributos[atributo] == cartaMaquina.atributos[atributo]) {
        resultado.innerHTML = `<p class="resultado-final">Empatou!</p>`
    } else {
        resultado.innerHTML = `<p class="resultado-final">Perdeu!</p>`
    }
    document.getElementById("btnSortear").disabled = false;
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
}

function exibirCarta() {
    let divCarta = document.getElementById("carta-jogador");
    divCarta.style.backgroundImage = `url(${cartaJogador.imagem})`

    let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"style=" width: inherit; height: inherit; position: absolute;">'

    let tagHTML = '<div id="opcoes" class="carta-status">'

    let opcoesTexto = ""

    for (let atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }
    let nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    divCarta.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

function exibirCartaMaquina() {
    let divCarta = document.getElementById("carta-maquina");
    divCarta.style.backgroundImage = `url(${cartaMaquina.imagem})`

    let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"style=" width: inherit; height: inherit; position: absolute;">'

    let tagHTML = '<div id="opcoes" class="carta-status">'

    let opcoesTexto = ""

    for (let atributo in cartaJogador.atributos) {
        opcoesTexto += "<p>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>"
    }
    let nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    divCarta.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}