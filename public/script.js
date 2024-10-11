/*
    url = fipe/:tipo:/:marca:/:modelo:/:ano:

    marca.innerHTML = '<option value="">Selecione a Marca</option>';

    axios.get('').then((resposta) => {
        const data = resposta.data;
    });

    .addEventListener('change', function () {
    .addEventListener('click', function () {

    form.addEventListener('submit', function (evento) {
        evento.preventDefault();
        // lógica entra aqui
        return false;
    });

    ['a', 'b', 'c'].map((elemento) => {
        return elemento;
    }).join('-');

    resultado.style.display = 'block';
*/
const tipo_veiculo = document.querySelector("#tipo-veiculo");
const marca = document.querySelector("#marca");
const modelo = document.querySelector("#modelo");
const versao = document.querySelector("#versao");
const formulario = document.querySelector("#consulta-form");

tipo_veiculo.value = null;

tipo_veiculo.addEventListener("change", function () {
  const valor = tipo_veiculo.value;

  marca.innerHTML = '<option value="">Selecione a Marca</option>';
  modelo.innerHTML = '<option value="">Selecione o Modelo</option>';
  versao.innerHTML = '<option value="">Selecione a Versão</option>';
  resultado.style.display = "none";

  axios.get(`fipe/${valor}`).then((resposta) => {
    const data = resposta.data;

    data
      .map((elemento) => {
        marca.innerHTML += `<option value="${elemento.code}">${elemento.name}</option>`;
      })
      .join("");
  });
});

marca.addEventListener("change", function () {
  const valor = marca.value;

  modelo.innerHTML = '<option value="">Selecione o Modelo</option>';
  versao.innerHTML = '<option value="">Selecione a Versão</option>';
  resultado.style.display = "none";

  axios.get(`fipe/${tipo_veiculo.value}/${valor}`).then((resposta) => {
    const data = resposta.data;

    data
      .map((elemento) => {
        modelo.innerHTML += `<option value="${elemento.code}">${elemento.name}</option>`;
      })
      .join("");
  });
});

modelo.addEventListener("change", function () {
  const valor = modelo.value;

  versao.innerHTML = '<option value="">Selecione a Versão</option>';
  resultado.style.display = "none";

  axios
    .get(`fipe/${tipo_veiculo.value}/${marca.value}/${valor}`)
    .then((resposta) => {
      const data = resposta.data;

      data
        .map((elemento) => {
          versao.innerHTML += `<option value="${elemento.code}">${elemento.name}</option>`;
        })
        .join("");
    });
});

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  const valor = versao.value;

  resultado.style.textAlign = "center";
  axios
    .get(`fipe/${tipo_veiculo.value}/${marca.value}/${modelo.value}/${valor}`)
    .then((resposta) => {
      const data = resposta.data;
      resultado.style.display = "block";
      if (data.price == undefined) {
        resultado.innerHTML = "Selecione a versão";
      } else {
        resultado.innerHTML = `${data.price}`;
      }
    });

  return false;
});
