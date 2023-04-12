var vocales = ["a", "e", "i", "o", "u"];
var code = ["ai", "enter", "imes", "ober", "ufat"];

function encriptarTexto() {
  var textoEncriptado = "";
  let textoEntrada = document.getElementById("textoEntrada").value;
  for (let x = 0; x < textoEntrada.length; x++) {
    if (buscarVocal(textoEntrada[x])) {
      textoEncriptado = textoEncriptado + buscarVocal(textoEntrada[x]);
    } else if (textoEntrada[x] == " ") {
      textoEncriptado = textoEncriptado + " ";
    } else {
      textoEncriptado = textoEncriptado + textoEntrada[x];
    }
  }
}
function buscarVocal(elemento) {
  for (let y = 0; y < 5; y++) {
    if (elemento == vocales[y]) {
      return code[y];
      break;
    }
  }
  return false;
}
