function validar() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (password == "" && email == "") {
        alert('Todos os campos precisam ser preenchidos corretamente');
    } else
    if (password.length < 8) {
        alert("Senha deve ter no minimo 8 caracteres");
    }
}
