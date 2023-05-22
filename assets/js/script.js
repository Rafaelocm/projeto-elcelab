document.querySelector('#submit').addEventListener('click', function () {
    let nome = document.querySelector('#nome').value;
    let cnpj = document.querySelector('#cnpj').value;
    let email = document.querySelector('#email').value;
    let assunto = document.querySelector('#assunto').value;

    if (nome !== '' && cnpj !== '' && email !== '' && assunto !== '') {
        let url = "https://api.whatsapp.com/send?phone=557196357878&text=Nome? " + nome + "%0AQual o seu e-mail: " + email + " %0AQual o seu cnpj? " +
            cnpj + " %0AAssunto ou itens: " + assunto;
        window.open(url);
    } else {
        if (nome === '') {
            document.getElementById('nome').style.border = '2px solid red';
        } else if (nome !== '') {
            document.getElementById('nome').style.border = '3px solid green';
        }
        if (cnpj === '') {
            document.getElementById('cnpj').style.border = '2px solid red';
        } else if (cnpj !== '') {
            document.getElementById('cnpj').style.border = '3px solid green';
        }
        if (email === '') {
            document.getElementById('email').style.border = '2px solid red';
        }
        else if (email !== '') {
            document.getElementById('email').style.border = '3px solid green';
        }
        if (assunto === '') {
            document.getElementById('assunto').style.border = '2px solid red';
        } else if (assunto !== '') {
            document.getElementById('assunto').style.border = '3px solid green';
        }
    }
});
