async function chamarapi(cep)
{
    const URL = `https://viacep.com.br/ws/${cep}/json/`
    const resp = await fetch(URL);
    if (resp.status == 200)
    {
    const dados = await resp.json();
    console.log(dados)

    if (dados.erro == "true")
    {
        alert("CEP inválido! Este CEP não existe!")
    }

    document.getElementById("Estado").value = dados.uf 
    document.getElementById("Cidade").value = dados.localidade
    document.getElementById("Bairro").value = dados.bairro
    document.getElementById("Logradouro").value = dados.logradouro
    }
}

async function bora() {
    const cep_digitado = document.getElementById("CEP").value
    if (cep_digitado.length == 8)
    {
    chamarapi(cep_digitado)
    }
    else
    {
    alert("O CEP deve ter 8 digitos!")
    }
}
