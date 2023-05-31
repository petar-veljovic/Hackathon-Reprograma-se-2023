const corpo = document.getElementsByTagName("body")[0];


function aumentarFonte() {
  var tamanhoFonte = parseInt(window.getComputedStyle(corpo, null).getPropertyValue('font-size'));
  tamanho = corpo.style.fontSize = (tamanhoFonte + 3) + 'px';
  localStorage.setItem("tamanhoFonte", JSON.stringify(tamanho))
}

function diminuirFonte() {
  var tamanhoFonte = parseInt(window.getComputedStyle(corpo, null).getPropertyValue('font-size'));
  tamanho = corpo.style.fontSize = (tamanhoFonte - 3) + 'px';
  localStorage.setItem("tamanhoFonte", JSON.stringify(tamanho))
}

function carregaFonte() {
  var tamanhoFonte = parseInt(window.getComputedStyle(corpo, null).getPropertyValue('font-size'));
  fonte = JSON.parse(localStorage.getItem("tamanhoFonte"));
  corpo.style.fontSize = fonte;
}

function autoContraste() {
  var body = document.getElementsByTagName("body")[0];
  body.style.backgroundColor = "black";
  body.style.color = "yellow";
  localStorage.setItem("AutoConstraste", "ativo")
}

function semContraste() {
  var body = document.getElementsByTagName("body")[0];
  body.style.backgroundColor = "white";
  body.style.color = "black";
  localStorage.setItem("AutoConstraste", "desativado")
}

window.onload = function() {
  var autoContrasteAtivo = localStorage.getItem("AutoConstraste");
  if (autoContrasteAtivo === "ativo") {
    autoContraste();
  }

  else {
    semContraste();
  }

  carregaFonte();
}