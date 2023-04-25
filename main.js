var vocales = ["a", "e", "i", "o", "u"];
var codigo = ["ai", "enter", "imes", "ober", "ufat"];
function removerAcentos(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function removerCaracteresEspeciales(texto) {
  return texto.replace(/[^0-9a-zA-Z. ]/g, "");
}

function validarTexto(texto) {
  texto = removerAcentos(texto);
  texto = removerCaracteresEspeciales(texto);
  return texto.toLowerCase();
}

function encriptarTexto() {
  var textoEncriptado = "";
  let textoEntrada = document.getElementById("textoEntrada").value;
  textoEntrada = validarTexto(textoEntrada);
  for (let x = 0; x < textoEntrada.length; x++) {
    if (buscarVocal(textoEntrada[x])) {
      textoEncriptado = textoEncriptado + buscarVocal(textoEntrada[x]);
    } else if (textoEntrada[x] == " ") {
      textoEncriptado = textoEncriptado + " ";
    } else {
      textoEncriptado = textoEncriptado + textoEntrada[x];
    }
  }
  mostrarTexto(textoEncriptado);
  ocultarImagen();
}
function buscarVocal(elemento) {
  for (let y = 0; y < 5; y++) {
    if (elemento == vocales[y]) {
      return codigo[y];
      break;
    }
  }
  return false;
}

function mostrarTexto(texto) {
  let textoSalida = document.getElementById("textoSalida");
  textoSalida.textContent = texto;
}
function ocultarImagen() {
  document.getElementById("img").style.display = "none";
}
function desencriptarTexto() {
  let textoDesencriptado = "";
  let textoEntrada = document.getElementById("textoEntrada").value;
  textoEntrada = validarTexto(textoEntrada);
  let contador = 0;
  while (contador < textoEntrada.length) {
    let item = buscarVocal(textoEntrada[contador]);
    if (item) {
      textoDesencriptado = textoDesencriptado + item[0];
      contador = contador + item.length;
      continue;
    } else if (textoEntrada[contador] == " ") {
      textoDesencriptado = textoDesencriptado + " ";
    } else {
      textoDesencriptado = textoDesencriptado + textoEntrada[contador];
    }
    contador = contador + 1;
  }
  mostrarTexto(textoDesencriptado);
  ocultarImagen();
}
function buscarCodigo(elemento) {
  for (let y = 0; y < 5; y++) {
    if (elemento == vocales[y]) {
      return codigo[y];
      break;
    }
  }
  return false;
}

function copiar() {
  let texto = document.getElementById("textoSalida").innerText;
  navigator.clipboard.writeText(texto);
}
