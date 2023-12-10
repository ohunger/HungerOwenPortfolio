<?php
//have not got this to work yet... Difficult
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Set recipient email address (replace with your email)
    $to = "your.email@example.com";

    // Set subject
    $subject = "New Contact Form Submission from $name";

    // Build email message
    $body = "Name: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message";

    // Set additional headers
    $headers = "From: $email";

    // Attempt to send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
} else {
    // If the form is not submitted, return an error
    echo "error";
}
?>
