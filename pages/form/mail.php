<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// переменные из нашей формы
$name = $_POST['userName'];
$phone = $_POST['userPhone'];
$email = $_POST['user_email'];
$message = $_POST['userMessage'];

// настройка почтового ящика
$mail->isSMTP();                                // Настраиваем почту для SMTP
$mail->Host = 'smtp.ukr.net';  															// Основкой SMTP сервер
$mail->SMTPAuth = true;                         // Включить аутентификацию SMTP
$mail->Username = 'nasta.lubyana.97@ukr.net';    // логин от почты с которой будут отправляться письма
$mail->Password = 'pUBw3esFEUgDEpZe';            // пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                      // Включить шифрование ssl
$mail->Port = 465;                                 // TCP порт для подключения / этот порт может отличаться у других провайдеров

$mail->setFrom('nasta.lubyana.97@ukr.net');      // от кого будет уходить письмо для пользователя
$mail->addAddress('nasta.lubyana.97@gmail.com');                          // Кому будет приходить заявка
//$mail->addAddress('ellen@example.com');               // Имя не обязательно
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
$mail->isHTML(true);                                  // Установить формат электронной почты в HTML

$mail->Subject = 'Новая заявка с сайта притулку';
$mail->Body    = '' . $name . ' оставил заявку:<br>' . $message . '<br>Телефон ' . $phone . '<br>Почта: ' . $email;
$mail->AltBody = '';

if(!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    header('location: thank_you.html');
}
?>
