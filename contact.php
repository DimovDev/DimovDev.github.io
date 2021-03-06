<?php
// Only process POST reqeusts.
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    //Get the form fields and remove whitespace.
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(["\r", "\n"], [" ", " "], $name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    //$theme = trim($_POST["subject"]);
    //$phone = trim($_POST["number"]);
    $message = trim($_POST["message"]);

    // Check that data was sent to the mailer.
    //if ( empty($name) || empty($theme)|| empty($phone)|| empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    //		// Set a 400 (bad request) response code and exit.
    //		http_response_code(400);
    //		echo "Oops! There was a problem with your submission. Please check your e-mail,complete the form and try again.";
    //		exit;
    //	}

    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Set a 400 (bad request) response code and exit.
        http_response_code(400);
        echo 'Възникна проблем с изпращането. Проверете вашите данни!';
        exit;
    }

    //Set the recipient email address.
    $recipient = 'webtech3d@gmail.com';


    //Set the email subject.
    $subject = "Ново съобщение от $name";
    $subject = '=?utf-8?B?' . base64_encode($subject) . '?=';


    //Build the email content.
    $email_content = "Name: $name\r\n";
    $email_content .= "Email: $email\r\n";
    //$email_content .= "Subject: $theme\r\n";
    //$email_content .= "Phone: $phone\r\n";
    $email_content .= "Message: $message\r\n";
    //Build the email headers.

    //$email_headers = "From: $name <$email>";
    $email_headers = 'Content-type: text/html; charset=UTF-8' . "\r\n";
    $email_headers .= "From: $email\r\n";


    //Send the email.
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        // Set a 200 (okay) response code.
        http_response_code(200);
        echo 'Благодарим! Вашето съобщение е изпратено!';
    } else {
        // Set a 500 (internal server error) response code.
        http_response_code(500);
        echo 'Ами сега! Нещо се обърка и не можахме да изпратим съобщението ви.';
    }

} else {
    //Not a POST request, set a 403 (forbidden) response code.
    http_response_code(403);
    echo 'Възникна проблем с изпращането. Моля, опитайте отново!';
}
