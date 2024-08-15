// Elementos necessariso para funcoes
const campoTexto = document.querySelector('textarea#campo-texto');
const campoResultado = document.querySelector('div.campo-resultado');
const btnCriptografar = document.querySelector('button.btn-criptografar');
const btnDescriptografar = document.querySelector('button.btn-descriptografar');
let timeoutAlerta = undefined; // variavel do tempo para sumir o popup
const btnCopiar = document.createElement('button');
const caixaAlerta = document.createElement('div');

btnCopiar.innerText = 'Copiar';
btnCopiar.classList.add('btn');

caixaAlerta.innerHTML = '<p>Texto inválido! Por favor, insira um texto com letras minúsculas e sem acentos.</p><button onclick="removerAlerta()">X</button>';
caixaAlerta.classList.add('caixa-alerta');

// Cifra o texto
const criptografar = (texto) => {
  return texto
        .replaceAll('e', 'enter')
        .replaceAll('o', 'ober')
        .replaceAll('i', 'imes')
        .replaceAll('a', 'ai')
        .replaceAll('u', 'ufat');
};

// Funcao de reversao de cifra
const descriptografar = (texto) => {
  return texto
        .replaceAll('enter', 'e')
        .replaceAll('ober', 'o')
        .replaceAll('imes', 'i')
        .replaceAll('ai', 'a')
        .replaceAll('ufat', 'u');
};

// Funcao para validar o texto
const validarTexto = (texto) => {
  return !/[A-ZÀ-Ü]/.test(texto);
}; 

// Funcao para remover o alerta
const removerAlerta = () => {
  const caixa = document.querySelector('.caixa-alerta');
  if (caixa) {
    caixa.remove();
    clearTimeout(timeoutAlerta);
  }
};

// Evento do botao criptografar
btnCriptografar.addEventListener('click', () => {
  const textoValido = validarTexto(campoTexto.value);
  if (campoTexto.value && textoValido) {
    campoResultado.innerHTML = `<div class="texto-resultado">${criptografar(campoTexto.value)}</div>`;
    campoResultado.append(btnCopiar);
    btnCopiar.innerText = 'Copiar';
    btnCopiar.disabled = false;
  } else {
    if (timeoutAlerta) {
      clearTimeout(timeoutAlerta);
    }
    const corpo = document.querySelector('.container');
    corpo.append(caixaAlerta);
    timeoutAlerta = setTimeout(removerAlerta, 10 * 1000);
  }
});

// Evento do botao descriptografa r
btnDescriptografar.addEventListener('click', () => {
  const textoValido = validarTexto(campoTexto.value);
  if (campoTexto.value && textoValido) {
    campoResultado.innerHTML = `<div class="texto-resultado">${descriptografar(campoTexto.value)}</div>`;
    campoResultado.append(btnCopiar);
    btnCopiar.innerText = 'Copiar';
    btnCopiar.disabled = false;
  } else {
    if (timeoutAlerta) {
      clearTimeout(timeoutAlerta);
    }
    const corpo = document.querySelector('.container');
    corpo.append(caixaAlerta);
    timeoutAlerta = setTimeout(removerAlerta, 10 * 1000);
  }
});

// Evento para o botao de copiar
btnCopiar.addEventListener('click', () => {
  const texto = document.querySelector('div.texto-resultado').innerText;
  navigator.clipboard.writeText(texto).then(() => {
    btnCopiar.innerText = 'Copiado!';
    btnCopiar.disabled = true;
  });
});
