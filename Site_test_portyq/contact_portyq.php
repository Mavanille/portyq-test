<?php
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: portyq.html#contact");
    exit;
}

$firstname = htmlspecialchars($_POST['firstname'] ?? '');
$lastname  = htmlspecialchars($_POST['lastname'] ?? '');
$email     = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
$phone     = htmlspecialchars($_POST['phone'] ?? '');
$society   = htmlspecialchars($_POST['society'] ?? '');
$message   = htmlspecialchars($_POST['message'] ?? '');

if (!$firstname || !$lastname || !$email || !$message) {
    die("Formulaire incomplet.");
}

// Exemple : envoi par mail
$to = "mathis.tranvantong@gmail.com";
$subject = "Nouveau message de $firstname $lastname";
$body = "
Nom : $lastname
Prénom : $firstname
Email : $email
Téléphone : $phone
Société : $society

Message :
$message
";

$headers = "From: $email";

mail($to, $subject, $body, $headers);

// Redirection après succès
header("Location: portyq.html?success=1#contact");
exit;


