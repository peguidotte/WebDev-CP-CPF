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
var valor_total = 0;
var subtotal_vinho1 = 0;
var subtotal_vinho2 = 0;
var subtotal_vinho3 = 0;
var subtotal_vinho4 = 0;
var subtotal_vinho5 = 0;
var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");
var item5 = document.getElementById("item5");
var total_compra = document.getElementById("total_compra");

function comprarvinho1() {
    var qtd_vinho1 = parseInt(document.getElementById('qtd_vinho1').value);
    subtotal_vinho1 = qtd_vinho1 * preco_vinho1 
    valor_total = subtotal_vinho1 + subtotal_vinho2 + subtotal_vinho3 + subtotal_vinho4 + subtotal_vinho5;
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Adicionado ao carrinho',
        showConfirmButton: false,
        timer: 1000
      });
    item1.innerHTML = `${qtd_vinho1}x ${vinho1} (R$${qtd_vinho1 * preco_vinho1.toFixed(2)})`
    total_compra.innerHTML = `R$${valor_total}`
    qtd_vinho1 = document.getElementById('qtd_vinho1').value = 0;
}

function comprarvinho2() {
    var qtd_vinho2 = parseInt(document.getElementById('qtd_vinho2').value);
    subtotal_vinho2 = qtd_vinho2 * preco_vinho2;
    valor_total = subtotal_vinho1 + subtotal_vinho2 + subtotal_vinho3 + subtotal_vinho4 + subtotal_vinho5;
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Adicionado ao carrinho',
        showConfirmButton: false,
        timer: 1000
      });
    item2.innerHTML = `${qtd_vinho2}x ${vinho2} (R$${subtotal_vinho2.toFixed(2)})`;
    total_compra.innerHTML = `R$${valor_total.toFixed(2)}`;
    document.getElementById('qtd_vinho2').value = 0;
}

function comprarvinho3() {
    var qtd_vinho3 = parseInt(document.getElementById('qtd_vinho3').value);
    subtotal_vinho3 = qtd_vinho3 * preco_vinho3;
    valor_total = subtotal_vinho1 + subtotal_vinho2 + subtotal_vinho3 + subtotal_vinho4 + subtotal_vinho5;
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Adicionado ao carrinho',
        showConfirmButton: false,
        timer: 1000
      });
    item3.innerHTML = `${qtd_vinho3}x ${vinho3} (R$${subtotal_vinho3.toFixed(2)})`;
    total_compra.innerHTML = `R$${valor_total.toFixed(2)}`;
    document.getElementById('qtd_vinho3').value = 0;
}

function comprarvinho4() {
    var qtd_vinho4 = parseInt(document.getElementById('qtd_vinho4').value);
    subtotal_vinho4 = preco_vinho4 * qtd_vinho4; 
    valor_total = subtotal_vinho1 + subtotal_vinho2 + subtotal_vinho3 + subtotal_vinho4 + subtotal_vinho5;
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Adicionado ao carrinho',
        showConfirmButton: false,
        timer: 1000
      });
    item4.innerHTML = `${qtd_vinho4}x ${vinho4} (R$${subtotal_vinho4.toFixed(2)})`;
    total_compra.innerHTML = `R$${valor_total.toFixed(2)}`;
    document.getElementById('qtd_vinho4').value = 0;
}
function comprarvinho5() {
    var qtd_vinho5 = parseInt(document.getElementById('qtd_vinho5').value);
    subtotal_vinho5 = preco_vinho5 * qtd_vinho5;
    valor_total = subtotal_vinho1 + subtotal_vinho2 + subtotal_vinho3 + subtotal_vinho4 + subtotal_vinho5;
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Adicionado ao carrinho',
        showConfirmButton: false,
        timer: 1000
      });
    item5.innerHTML = `${qtd_vinho5}x ${vinho5} (R$${subtotal_vinho5.toFixed(2)})`;
    total_compra.innerHTML = `R$${valor_total.toFixed(2)}`;
    document.getElementById('qtd_vinho5').value = 0;
}

function resetPage() {
    window.location.reload();
}

var preço_desconto = 0;
function btndesconto(){
    var desconto = document.getElementById("discount-code").value;
    if (desconto === "FIAP2024"){
        var preco_desconto = valor_total * 0.9;
        valor_total = preco_desconto;
        total_compra.innerText = `R$${valor_total.toFixed(2)}`;
        Swal.fire({
            title: 'Cupom aplicado',
            text: 'Desconto de 10%',
            icon: 'success',
            timer: 5000,
            timerProgressBar: true,
            showConfirmButton: false
        });
    } else {
        Swal.fire({
            title: 'Cupom inválido',
            text: 'Erro ao aplicar o cupom',
            icon: 'error',
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false
        });
    }
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

function finalizarCompra() {
    Swal.fire({
        title: "Quase lá!",
        text: "Faça o login para validarmos sua compra!",
        confirmButtonText: 'Vamos lá!',
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'login.html'
        }
    });
}

// LOGIN e DESCONTO. 

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var senha_cadastrada = '1234';
    var username_cadastrado = 'fiap';

    if (username_cadastrado === username && senha_cadastrada === password) {
        Swal.fire({
            title: 'Compra concluída',
            icon: 'success'
        });
    } else {
        Swal.fire({
            title: 'Senha ou usuário incorretos!',
            icon: 'error',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Tente novamente',
        });
    }
}
