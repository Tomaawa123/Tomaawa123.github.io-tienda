<?php
$nombre = $_POST['nombre'];
$mail = $_POST['email'];
$empresa = $_POST['mensaje'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
$mensaje .= "Su e-mail es: " . $mail . " \r\n";
$mensaje .= "Mensaje: " . $_POST['mensaje'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$destinatario = 'tinkypinky991@gmail.com';
$asunto = 'Mensaje de mi sitio web';

mail($destinatario, $asunto, utf8_decode($mensaje), $header);

header("Location:compra.html");
echo "<script>alert('correo enviado correctamente!')</script>"
echo "<script> setTimeout(\"location.href='tienda.html'\" ,100)</script>"
?>