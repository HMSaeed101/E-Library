<?php
include __DIR__ . '/connections.php';

$name    = $_POST['name'];
$email   = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$sql = "INSERT INTO contact (name, email, subject, message)
        VALUES ('$name', '$email', '$subject', '$message')";

if (mysqli_query($conn, $sql)) 
{
    header("Location: ../pages/contact.html?msg=Message%20sent%20successfully");

    exit();
} 
else 
{
    echo "Error: " . mysqli_error($conn);
}
?>