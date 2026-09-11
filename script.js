function calcularIMC() {
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;

  if (peso === "" || altura === "" || altura <= 0) {
    document.getElementById("resultado").innerText =
      "Preencha peso e altura corretamente.";
    return;
  }

  const imc = peso / (altura * altura);
  let classificacao = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc < 25) {
    classificacao = "Peso normal";
  } else if (imc < 30) {
    classificacao = "Sobrepeso";
  } else {
    classificacao = "Obesidade";
  }

  document.getElementById("resultado").innerText =
    "Seu IMC é " + imc.toFixed(1) + " (" + classificacao + ")";
}
