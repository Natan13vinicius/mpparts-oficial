const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    // if (=== '') {
    //   alert('Preencha o cnpj')
    //   return;
    // }

    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'templateID';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Enviado';
        alert('E-mail enviado');
      }, (err) => {
        btn.value = 'Falha ao enviar';
        alert('Erro ao enviar');
      });
  });



