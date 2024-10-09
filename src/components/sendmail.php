<?php
// Allow CORS if React and PHP are on different origins
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the JSON data from the request body
    $data = json_decode(file_get_contents("php://input"), true);

    // Sanitize the input data
    $name = htmlspecialchars(strip_tags($data['name']));
    $email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars(strip_tags($data['phone']));
    $service = htmlspecialchars(strip_tags($data['service']));
    $project = htmlspecialchars(strip_tags($data['project']));

    // Validate the email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["message" => "Invalid email format."]);
        exit;
    }

    // Set up email details
    $to = "traheel05@gmail.com"; // Replace with your email
    $subject = "New Contact Form Submission";
    $headers = "From: " . $email;

    // Create the email body
    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Phone: $phone\n";
    $message .= "Service: $service\n";
    $message .= "Project Details: $project\n";

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        // Return success response
        http_response_code(200);
        echo json_encode(["message" => "Email sent successfully!"]);
    } else {
        // Return error response
        http_response_code(500);
        error_log("Mail failed to send: " . error_get_last()['message']); // Log server error
        echo json_encode(["message" => "Failed to send email due to server error."]);
    }
} else {
    // Return error if not a POST request
    http_response_code(405);
    echo json_encode(["message" => "Invalid request method."]);
}
