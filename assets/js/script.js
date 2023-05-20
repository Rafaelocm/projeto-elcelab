document.querySelector('#submit').addEventListener('click', function () {
    let nome = document.querySelector('#nome').value;
    let cnpj = document.querySelector('#cnpj').value;
    let email = document.querySelector('#email').value;
    let cpf = document.querySelector('#cpf').value;
    let assunto = document.querySelector('#assunto').value;

    let url = "https://api.whatsapp.com/send?phone=557193456144&text= Nome? %0A " + nome + "%0A Qual o seu e-mail %0A " + email + " %0A Qual o seu cnpj?%0A" +
        cnpj + " %0A Qual o seu cpf?%0A" + cpf + " %0A Assunto ou itens: %0A" + assunto;

    window.open(url);
});
