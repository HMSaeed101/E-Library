<?php

include __DIR__ . '/connections.php';


$fullname     = $_POST['fullname'];
$email    = $_POST['email'];
$username = $_POST['username'];
$password = $_POST['password'];

$hashed_password = password_hash($password, PASSWORD_DEFAULT);

$sql = "INSERT INTO users (full_name, email, username, password)
        VALUES ('$fullname', '$email', '$username', '$hashed_password')";

if (mysqli_query($conn, $sql)) 
{
    header("Location: ../pages/auth/login.html?msg=Account%20created");
} 
else 
{
    echo "Signup failed";
}
?>