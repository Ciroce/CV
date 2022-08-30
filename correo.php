<?php
if(isset($_POST['email'])) {

// Debes editar las próximas dos líneas de código de acuerdo con tus preferencias
$email_to = "mf.baquera@gmail.com";
$email_subject = "Contacto desde el sitio web";

// Aquí se deberían validar los datos ingresados por el usuario
if(!isset($_POST['nombre']) ||
!isset($_POST['apellido']) ||
!isset($_POST['domicilio']) ||
!isset($_POST['localidad']) ||
!isset($_POST['barrio']) ||
!isset($_POST['codigoPostal']) ||
!isset($_POST['telefono']) ||
!isset($_POST['email']) ||
!isset($_POST['pais']) ||
!isset($_POST['tarea']) ||
!isset($_POST['campo'])) {

echo "<b>Ocurrió un error y el formulario no ha sido enviado. </b><br />";
echo "Por favor, vuelva atrás y verifique la información ingresada<br />";
die();
}

$email_message = "Detalles del formulario de contacto:\n\n";
$email_message .= "NOMBRE_ " . $_POST['nombre'] . "\n";
$email_message .= "APELLIDO_ " . $_POST['apellido'] . "\n";
$email_message .= "DOMICILIO_ " . $_POST['domicilio'] . "\n";
$email_message .= "LOCALIDAD_ " . $_POST['localidad'] . "\n";
$email_message .= "BARRIO_ " . $_POST['barrio'] . "\n";
$email_message .= "C.P._ " . $_POST['codigoPostal'] . "\n";
$email_message .= "TELEFONO_ " . $_POST['telefono'] . "\n";
$email_message .= "E-MAIL_ " . $_POST['email'] . "\n";
$email_message .= "PAIS_ " . $_POST['pais'] . "\n";
$email_message .= "LABORES_ " . $_POST['tarea'] . "\n";
$email_message .= "¿QUE ES LO QUE NECESITAS?_ " . $_POST['campo'] . "\n\n";

// Ahora se envía el e-mail usando la función mail() de PHP
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);

echo "¡El formulario se ha enviado con éxito!";
}
?>