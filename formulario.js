document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("botaocadastro").addEventListener("click", function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        
        // Verifica se todos os campos estão preenchidos
        var email = document.getElementById("email").value;
        var telefone = document.getElementById("telefone").value;
        var assunto = document.getElementById("assunto").value;
        
        if (email !== '' && telefone !== '' && assunto !== '') {
            // Exibir alerta de sucesso se todos os campos estiverem preenchidos
            Swal.fire({
                title: 'Obrigado por entrar em contato!',
                text: 'Responderemos em breve.',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        } else {
            // Exibir alerta de erro se algum campo estiver vazio
            Swal.fire({
                title: 'Erro!',
                text: 'Por favor, preencha todos os campos.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    });
});
