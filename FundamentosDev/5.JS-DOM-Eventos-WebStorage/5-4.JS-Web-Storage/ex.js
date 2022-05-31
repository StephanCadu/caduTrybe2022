// REQUISITOS:
// 1 cor de fundo da tela [X]
// 2 cor do texto [X]
// 3 tamanho da fonte [X]
// 4 espaçamento ente linhas do texto [X]
// 5 tipo da fonte []
// window.onload = function () {
//     alert('be my guess!')
// }
function changeBackColor () {
  const div = document.createElement('div');
  const input = document.createElement('input');
  const btn = document.createElement('button');
  const h4div = document.createElement('h4')
  const corpo = document.querySelector('#body');

  h4div.innerText = 'Type bg color here:'
  btn.innerText = 'set'
  btn.style.backgroundColor = 'black';
  btn.style.color = 'white';

  btn.addEventListener('click', function () {
    corpo.style.backgroundColor = input.value;    
  });

  input.addEventListener('keyup', function () {
    if (event.which === 13) {
      corpo.style.backgroundColor = input.value;
    }
  });

  corpo.appendChild(div);
  div.appendChild(h4div);
  div.appendChild(input);
  div.appendChild(btn);
}
changeBackColor();

function changeTextColor () {
  const corpo = document.querySelector('#body');
  const div2 = document.createElement('div');
  const secondH4 = document.createElement('h4');
  const secondBtn = document.createElement('button');
  const input2 = document. createElement('input');

  secondH4.innerText = 'Type text color here:';
  secondBtn.innerText = 'set';
  secondBtn.style.backgroundColor = 'black';
  secondBtn.style.color = 'white';


  secondBtn.addEventListener('click', function () {
    corpo.style.color = input2.value;    
  });

  input2.addEventListener('keyup', function () {
    if (event.which === 13) {
      corpo.style.color = input2.value;
    }
  });


  corpo.appendChild(div2);
  div2.appendChild(secondH4);
  div2.appendChild(input2);
  div2.appendChild(secondBtn);
}
changeTextColor();

function changeFontSize () {
  const corpo = document.querySelector('#body');
  const div3 = document.createElement('div');
  const thirdH4 = document.createElement('h4');
  const thirdBtn = document.createElement('button');
  const input3 = document. createElement('input');

  thirdH4.innerText = 'Choose font size:';
  thirdBtn.innerText = 'set';
  thirdBtn.style.backgroundColor = 'black';
  thirdBtn.style.color = 'white';

  thirdBtn.addEventListener('click', function () {
    corpo.style.fontSize = parseInt(input3.value) + 'px';
  });
  input3.addEventListener('keyup', function () {
    if (event.which === 13) {
      corpo.style.fontSize = parseInt(input3.value) + 'px';
    }
  });

  corpo.appendChild(div3);
  div3.appendChild(thirdH4);
  div3.appendChild(input3);
  div3.appendChild(thirdBtn);
}
changeFontSize();

function changeLineSize () {
  const corpo = document.querySelector('#body');
  const div4 = document.createElement('div');
  const fourthH4 = document.createElement('h4');
  const fourthBtn = document.createElement('button');
  const input4 = document. createElement('input');
  
  fourthH4.innerText = 'Choose line size:';
  fourthBtn.innerText = 'set';
  fourthBtn.style.backgroundColor = 'black';
  fourthBtn.style.color = 'white';

  fourthBtn.addEventListener('click', function () {
    corpo.style.lineHeight = parseInt(input4.value) + 'px';
  });
  input4.addEventListener('keyup', function () {
    if (event.which === 13) {
      corpo.style.lineHeight = parseInt(input4.value) + 'px';
    }
  });

  corpo.appendChild(div4);
  div4.appendChild(fourthH4);
  div4.appendChild(input4);
  div4.appendChild(fourthBtn);
}
changeLineSize();


// ainda não ta legal
function changeFontFamiy () {
    const corpo = document.querySelector('#body');
    const div5 = document.createElement('div');
    const fifthH4 = document.createElement('h4');
    const fifthBtn = document.createElement('button');
    const input5 = document. createElement('input');
    
    fifthH4.innerText = 'Choose font family:';
    fifthBtn.innerText = 'set';
    fifthBtn.style.backgroundColor = 'black';
    fifthBtn.style.color = 'white';
  
    fifthBtn.addEventListener('click', function () {
      corpo.style.fontFamily = input5.value;
    });
    input5.addEventListener('keyup', function () {
      if (event.which === 13) {
        corpo.style.fontFamily = input5.value;
      }
    });
  
    corpo.appendChild(div5);
    div5.appendChild(fifthH4);
    div5.appendChild(input5);
    div5.appendChild(fifthBtn);
  }
  changeFontFamiy();