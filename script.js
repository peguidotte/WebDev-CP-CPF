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