function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var senha_cadastrada = '1234';
    var username_cadastrado = 'fiap';

    if (username_cadastrado === username && senha_cadastrada === password) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('container-carrinho-desconto').style.display = 'flex'; // Mostra o container do carrinho e cupom de desconto
        // Supondo que essas funções estejam implementadas
        carregarItensCarrinho();
    } else {
        Swal.fire({
            title: 'Senha ou usuário incorretos!',
            icon: 'error',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Tente novamente',
        });
    }
}
