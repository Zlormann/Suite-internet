<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Ici vous pouvez ajouter du code pour envoyer un email ou enregistrer les données dans une base de données
    echo "Merci, $name ! Votre message a été reçu.";
}
?>
