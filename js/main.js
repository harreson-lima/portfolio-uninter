const form = document.getElementById("mensagem-form");
const inputs = document.querySelectorAll("input");

// previne o comportamento padão do formulário
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Mensagem Enviada!");

  // limpa os campos do formulário
  inputs.forEach((input) => {
    input.value = "";
  });

  document.getElementById("mensagem").value = "";
});
