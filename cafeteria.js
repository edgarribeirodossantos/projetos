// Navegação suave ao clicar nos links do menu
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('nav ul li a');

  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const target = this.getAttribute('href');
      const section = document.querySelector(target);

      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    });
  });
});

// Enviar mensagem de contato
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'contact.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
      if (xhr.status === 200 && xhr.responseText === 'success') {
        alert('Mensagem enviada com sucesso!');
        form.reset();
      } else {
        alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
      }
    };
    xhr.send('name=' + encodeURIComponent(name) + '&email=' + encodeURIComponent(email) + '&message=' + encodeURIComponent(message));
  });
});


    // Aqui você pode implementar a lógica para enviar a mensagem
    // por meio de uma requisição AJAX ou qualquer outro método desejado.

    // Exemplo de exibição de uma mensagem de sucesso
    alert('Mensagem enviada com sucesso!');

    // Limpar os campos do formulário
    form.reset();
  });
});
