const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_d5yz6d5';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Eviar';
        alert('Eviado!');
      }, (err) => {
        btn.value = 'Falha ao enviar';
        alert('Erro ao enviar');
      });
  });