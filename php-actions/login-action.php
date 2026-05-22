<?php
session_start();

include $_SERVER['DOCUMENT_ROOT'] . '/ELECTRONIC LIBRARY/PHP Actions/connections.html';

$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

$sql = "SELECT * FROM users WHERE username = '$username'";
$result = mysqli_query($conn, $sql);
$user = mysqli_fetch_assoc($result);

if ($user && password_verify($password, $user['password'])) 
{
    $_SESSION['user_id'] = $user['id'];
    $_SESSION['username'] = $user['username'];

    header("Location: ../profile.html");
    exit;
} 
else 
{
    header("Location: login.html?error=Invalid credentials");
    exit;
}
?>