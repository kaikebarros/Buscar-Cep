const botao = document.querySelector("#botao");
const input = document.querySelector("#input");
botao.addEventListener("click", () => {
  const valorInput = input.value;
  buscarCep(valorInput);
});

async function buscarCep(valorInput) {
  const res = await fetch(`https://viacep.com.br/ws/${valorInput}/json/`);
  const data = await res.json();
  console.log(data.bairro, data.logradouro, data.localidade);

  const resultado = document.querySelector(".resultado");
  resultado.textContent = ` ${data.logradouro}, Bairro ${data.bairro} - ${data.localidade}`;
  try {
    const res = await fetch(`https://viacep.com.br/ws/${valorInput}/json/`);
    const data = await res.json();
  } catch (erro) {
    console.log("Erro ao buscar cep");
  }
}
