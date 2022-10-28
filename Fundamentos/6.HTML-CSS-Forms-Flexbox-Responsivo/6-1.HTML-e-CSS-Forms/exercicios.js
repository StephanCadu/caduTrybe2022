const submit = document.querySelector('#submeter');
const imeio = document.querySelector('#imeio'); 
const nome = document.querySelector('#nome-completo');

// submit.addEventListener('click', (event) => {
//    event.preventDefault();
// });

submit.addEventListener('click', () => {
    if (nome.value.length < 10 || nome.value.length > 50 || imeio.value.length < 10 || imeio.value.length > 50) {
      alert('Dados Inválidos.');
    } else {
      alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
  });
