var vocales = ["a", "e", "i", "o", "u"];
var code = ["ai", "enter", "imes", "ober", "ufat"];
var textoEncriptado = "";

function encriptarTexto() {
  var textoEntrada = document.getElementById("textoEntrada").value;
  var t = textoEntrada.replace("a", "ai");
  for (var x = 0; x < textoEntrada.length; x++) {
    if (buscarVocal(textoEntrada[x])) {
      textoEncriptado = textoEncriptado + buscarVocal(textoEntrada[x]);
    } else if (textoEntrada[x] == " ") {
      textoEncriptado = textoEncriptado + " ";
    } else {
      textoEncriptado = textoEncriptado + textoEntrada[x];
    }
  }

  console.log(textoEncriptado);
}
function buscarVocal(elemento) {
  for (var y = 0; y < 5; y++) {
    if (elemento == vocales[y]) {
      return code[y];
      break;
    }
  }
  return false;
}
