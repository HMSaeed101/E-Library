<?php

include $_SERVER['DOCUMENT_ROOT'] . '/ELECTRONIC LIBRARY/PHP Actions/connections.php';


$fullname     = $_POST['fullname'];
$email    = $_POST['email'];
$username = $_POST['username'];
$password = $_POST['password'];

$hashed_password = password_hash($password, PASSWORD_DEFAULT);

$sql = "INSERT INTO users (full_name, email, username, password)
        VALUES ('$fullname', '$email', '$username', '$hashed_password')";

if (mysqli_query($conn, $sql)) 
{
    header("Location: login.php?msg=Account created");
} 
else 
{
    echo "Signup failed";
}
?>