document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulário enviado com sucesso!');
    
    // Coletar os dados do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Exibir os dados preenchidos no div "formResult"
    document.getElementById('formResult').innerText = 
      `Dados enviados:\nNome: ${name}\nEmail: ${email}\nMensagem: ${message}`;
  });
  