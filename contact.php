<?php

// Check if the form was submitted
if (isset($_POST['submit'])) {
  // Get form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Set the email recipient
  $to = "yazan@hawamda.com";

  // Set the email subject
  $subject = "Contact Form Submission";

  // Build the email body
  $body = "Name: $name\n\nEmail: $email\n\nMessage:\n$message";

  // Send the email
  mail($to, $subject, $body);
}

?>
Note: This is just a basic example and you may want to add additional validation and error handling to your form. Also, make sure to replace "your@email.com" with the actual email address you want to receive the form submissions.




