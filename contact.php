<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Configurações do e-mail
  $to = 'edgarribeirodoosantos@gamil.com'; // Insira aqui o seu endereço de e-mail
  $subject = 'Nova mensagem de contato';
  $headers = "From: $name <$email>" . "\r\n";
  $headers .= "Reply-To: $email" . "\r\n";

  // Corpo da mensagem
  $body = "Nome: $name\n";
  $body .= "E-mail: $email\n";
  $body .= "Mensagem:\n$message";

  // Envia o e-mail
  $success = mail($to, $subject, $body, $headers);

  if ($success) {
    echo 'success'; // Envia uma resposta de sucesso para o JavaScript
  } else {
    echo 'error'; // Envia uma resposta de erro para o JavaScript
  }
}
?>
