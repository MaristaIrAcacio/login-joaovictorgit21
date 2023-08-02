var dadosLista = [];

function salvarUser()
{
    let nomeUser = document.getElementById("nomeUser").value;
    let itemUser = document.getElementById("itemUser").value;
    let priceitemUser = document.getElementById("priceitemUser").value;

    if (nomeUser) {
        dadosLista.push(nomeUser);
        criarLista();
        document.getElementById("nomeUser").value = '';
        //console.log(dadosLista);
    }
    if (itemUser) {
        dadosLista.push(itemUser);
        document.getElementById("nomeUser").value = '';
    }
    if (priceitemUser) {
        dadosLista.push(priceitemUser);
        document.getElementById("priceitemUser").value = '';
    }
}

//Funão para a criação de array
function criarLista()
{
    let table = document.getElementById("tabela").innerHTML = "<tr><th>Nome Usuário</th><th>Produto</th><th>Preço</th><th>Ações</th></tr>";

    for(let i=0; i <= (dadosLista.length-1); i++)
    {
        table += "<tr><td>" + dadosLista[i] + "</td><td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        document.getElementById('tabela').innerHTML = table;
    }
}

//Função para a edição da array
function editar(i)
{
    document.getElementById('nomeUser').value = dadosLista[(i - 1)];
    dadosLista.splice(dadosLista[(i - 1), 1]);
}


//Função para o exclusão da array
function excluir(i)
{
    dadosLista.splice((i - 1), 1);
    document.getElementById("tabela").deleteRow(i);
}