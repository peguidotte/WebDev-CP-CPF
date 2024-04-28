function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var senha_cadastrada = '1234'; // Coloquei entre aspas para que seja interpretado como string
    var username_cadastrado = '1234'; // Coloquei entre aspas para que seja interpretado como string

    if (username_cadastrado === username && senha_cadastrada === password) {
        // Faça o container do login desaparecer e aparecer no lugar um container de compra e cupom de desconto
        // Código para esconder o container de login e mostrar o container de compra
        // Exemplo:
        document.getElementById('login').style.display = 'none';
        document.getElementById('container-compra').style.display = 'block';
    } else {
        Swal.fire({
            title: 'Senha ou usuário incorretos!',
            icon: 'error',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Tente novamente',
        });
    }
}
