<?php
if(isset($_POST['submit'])){
    $to = "vitalik.kalinichenko123@gmail.com"; // замените на свой email-адрес
    $full_name = $_POST['full_name'];
    $email = $_POST['email'];
    $phone_number = $_POST['phone_number'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $headers = "From: $email\r\n" .
               "Reply-To: $email\r\n" .
               "X-Mailer: PHP/" . phpversion();

    mail($to, $subject, $message, $headers);

    echo "message is done";
}
?>
