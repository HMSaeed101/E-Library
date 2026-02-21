<?php
include $_SERVER['DOCUMENT_ROOT'] . '/ELECTRONIC LIBRARY/PHP Actions/connections.php';
?>

<!-- Signup Page -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>E-Library | Sign Up</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="CSS/index.css">
    <link rel="stylesheet" href="CSS/dark-theme.css">
    <link rel="icon" type="image/jpeg" href="pics/logo.jpg">
</head>

<?php include $_SERVER['DOCUMENT_ROOT'] . '/ELECTRONIC LIBRARY/navigation-bar.php'; ?>


<body>
    
    <section class="login-page">

        <div class="login-container">

            <h2>Create Account</h2>

            <form method="post" action="PHP Actions/signup-action.php">

                <input type="text" name="fullname"  placeholder="Full Name" required>
                <input type="email" name="email" placeholder="Email" required>
                <input type="text" name="username" placeholder="User Name" required>
                <input type="password" name="password" placeholder="Password" required>
                <button type="submit">Sign Up</button>
                
            </form>

            <p class="signup-link">
                Already have an account? <a href="login.php">Login</a>
            </p>

        </div>
    </section>

<script src="JavaScript/main.js" defer></script>
</body>
</html>
