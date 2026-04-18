const botao = document.querySelector("#botao");
const input = document.querySelector("#input");
const resultado = document.querySelector(".resultado");

botao.addEventListener("click", () => {
  const valorInput = input.value;
  buscarCep(valorInput);
});

async function buscarCep(valorInput) {
  if (!/^\d{8}$/.test(valorInput)) {
    resultado.textContent = "Digite um CEP válido!";
    return;
  }

  try {
    const res = await fetch(`https://viacep.com.br/ws/${valorInput}/json/`);
    const data = await res.json();

    if (data.erro) {
      resultado.textContent = "CEP não encontrado!";
      return;
    }

    resultado.textContent = `${data.logradouro}, Bairro ${data.bairro} - ${data.localidade}`;
  } catch (erro) {
    resultado.textContent = "Erro ao buscar CEP";
    console.log(erro);
  }
}
