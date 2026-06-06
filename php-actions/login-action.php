<?php
session_start();

include __DIR__ . '/connections.php';

$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

$sql = "SELECT * FROM users WHERE username = '$username'";
$result = mysqli_query($conn, $sql);
$user = mysqli_fetch_assoc($result);

if ($user && password_verify($password, $user['password'])) 
{
    $_SESSION['user_id'] = $user['id'];
    $_SESSION['username'] = $user['username'];

    header("Location: ../pages/profile.html");
    exit;
} 
else 
{
    header("Location: ../pages/auth/login.html?error=Invalid%20credentials");
    exit;
}
?>