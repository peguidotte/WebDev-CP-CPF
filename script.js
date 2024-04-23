//INDEX.HTML - Botão maior de idade
function botaosim(){
    window.location.href = "landing.html";
}

function botaonao() {
    alert("Você será redirecionado para o site inicial do Google, pois não tem a idade necessaria!");
    window.location.href = "https://www.google.com";
}

//ABOUT.HTML - Botão de adicionar vinho ao carrinho

var vinho1 = "Vinho Tinto Sangue Rosa";
var vinho2 = "Vinho Rose Fretado";
var vinho3 = "Vinho Branco Letui";
var vinho4 = "Vinho Tinto Porteiro";
var vinho5 = "Vinho Branco Olho de Cabra";
var preco_vinho1 = 120;
var preco_vinho2 = 210;
var preco_vinho3 = 500;
var preco_vinho4 = 156;
var preco_vinho5 = 100;

function comprarvinho1(){
    alert (`${vinho1} adicionado ao carrinho com sucesso!`);
}
function comprarvinho2(){
    alert (`${vinho2} adicionado ao carrinho com sucesso!`);
}
function comprarvinho3(){
    alert (`${vinho3} adicionado ao carrinho com sucesso!`);
}
function comprarvinho4(){
    alert (`${vinho4} adicionado ao carrinho com sucesso!`);
}
function comprarvinho5(){
    alert (`${vinho5} adicionado ao carrinho com sucesso!`);
}