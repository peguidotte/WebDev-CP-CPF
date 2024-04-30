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
var qtd_vinho1 = 0;
var qtd_vinho2 = 0;
var qtd_vinho3 = 0;
var qtd_vinho4 = 0;
var qtd_vinho5 = 0;
var valor_total = 0;

function comprarvinho1() {
    qtd_vinho1++;
    var valor_total = (qtd_vinho1 * preco_vinho1)+(qtd_vinho2 * preco_vinho2)+(qtd_vinho3 * preco_vinho3)+(qtd_vinho4 * preco_vinho4)+(qtd_vinho5 * preco_vinho5);
    Swal.fire({
        title: 'Adicionado ao carrinho!',
        text: `${vinho1} adicionado ao carrinho com sucesso! Valor atual da compra: R$${valor_total.toFixed(2)}`,
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ir para o carrinho',
        cancelButtonText: 'Continuar a comprar'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'login.html'
        }
    });
}
function comprarvinho2() {
    qtd_vinho2++;
    var valor_total = (qtd_vinho1 * preco_vinho1)+(qtd_vinho2 * preco_vinho2)+(qtd_vinho3 * preco_vinho3)+(qtd_vinho4 * preco_vinho4)+(qtd_vinho5 * preco_vinho5);
    Swal.fire({
        title: 'Adicionado ao carrinho!',
        text: `${vinho2} adicionado ao carrinho com sucesso! Valor atual da compra: R$${valor_total.toFixed(2)}`,
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ir para o carrinho',
        cancelButtonText: 'Continuar a comprar'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'login.html'
        }
    });
}
function comprarvinho3() {
    qtd_vinho3++;
    var valor_total = (qtd_vinho1 * preco_vinho1)+(qtd_vinho2 * preco_vinho2)+(qtd_vinho3 * preco_vinho3)+(qtd_vinho4 * preco_vinho4)+(qtd_vinho5 * preco_vinho5);
    Swal.fire({
        title: 'Adicionado ao carrinho!',
        text: `${vinho3} adicionado ao carrinho com sucesso! Valor atual da compra: R$${valor_total.toFixed(2)}`,
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ir para o carrinho',
        cancelButtonText: 'Continuar a comprar'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'login.html'
        }
    });
}
function comprarvinho4() {
    qtd_vinho4++;
    var valor_total = (qtd_vinho1 * preco_vinho1)+(qtd_vinho2 * preco_vinho2)+(qtd_vinho3 * preco_vinho3)+(qtd_vinho4 * preco_vinho4)+(qtd_vinho5 * preco_vinho5);
    Swal.fire({
        title: 'Adicionado ao carrinho!',
        text: `${vinho4} adicionado ao carrinho com sucesso! Valor atual da compra: R$${valor_total.toFixed(2)}`,
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ir para o carrinho',
        cancelButtonText: 'Continuar a comprar'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'login.html'
        }
    });
}
function comprarvinho5() {
    qtd_vinho5++;
    var valor_total = (qtd_vinho1 * preco_vinho1)+(qtd_vinho2 * preco_vinho2)+(qtd_vinho3 * preco_vinho3)+(qtd_vinho4 * preco_vinho4)+(qtd_vinho5 * preco_vinho5);
    Swal.fire({
        title: 'Adicionado ao carrinho!',
        text: `${vinho5} adicionado ao carrinho com sucesso! Valor atual da compra: R$${valor_total.toFixed(2)}`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ir para o carrinho',
        cancelButtonText: 'Continuar a comprar'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'login.html'
        }
    });
}
function sugestao1() {
    Swal.fire({
        title: 'Sugestões de Harmonização',
        text: 'Combina com carnes vermelhas grelhadas, massas com molhos intensos, e queijos maduros.',
        icon: 'info'
    });
}

function sugestao2() {
    Swal.fire({
        title: 'Sugestões de Harmonização',
        text: 'Perfeito com saladas frescas, frutos do mar, e pratos levemente picantes.',
        icon: 'info'
    });
}

function sugestao3() {
    Swal.fire({
        title: 'Sugestões de Harmonização',
        text: 'Ideal para acompanhar peixes, frutos do mar, e pratos com molhos leves.',
        icon: 'info'
    });
}

function sugestao4() {
    Swal.fire({
        title: 'Sugestões de Harmonização',
        text: 'Excelente com churrasco, pratos com molho barbecue e queijos fortes.',
        icon: 'info'
    });
}

function sugestao5() {
    Swal.fire({
        title: 'Sugestões de Harmonização',
        text: 'Harmoniza bem com saladas, pratos à base de frango e frutos do mar.',
        icon: 'info'
    });
}

// LOGIN e DESCONTO. 

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var senha_cadastrada = '1234';
    var username_cadastrado = 'fiap';

    if (username_cadastrado === username && senha_cadastrada === password) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('container-carrinho-desconto').style.display = 'flex'; // Mostra o container do carrinho e cupom de desconto
        var total_compra = document.getElementById("total_compra"); // Corrigido aqui
        total_compra.innerText = valor_total.toFixed(2); // Atualiza o valor total de compra no elemento HTML
    } else {
        Swal.fire({
            title: 'Senha ou usuário incorretos!',
            icon: 'error',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Tente novamente',
        });
    }
}
