<?php
session_start();
include $_SERVER['DOCUMENT_ROOT'] . '/ELECTRONIC LIBRARY/PHP Actions/connections.php';

if (!isset($_SESSION['user_id'])) 
{
    header("Location: login.php");
    exit;
}

$user_id = $_SESSION['user_id'];


$sql = "SELECT * FROM users WHERE id = $user_id";
$result = mysqli_query($conn, $sql);
$user = mysqli_fetch_assoc($result);
?>

<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>User Profile</title>
    <link rel="icon" href="logo.jpg">
    <link rel="stylesheet" href="CSS/index.css">
    <link rel="stylesheet" href="CSS/dark-theme.css">
    <link rel="stylesheet" href="CSS/profile.css">
    <link rel="stylesheet" href="CSS/dark-profile.css">
    <script src="JavaScript/main.js" defer></script>
</head>

<body>

<?php include 'navigation-bar.php';?>

<div class="profile-container">

<div class="profile-header">

    <div class="avatar-container">
        <img src="<?php echo $user['avatar']; ?>" class="profile-img">
    </div>

    <div class="profile-info">
        <h2><?php echo $user['full_name']; ?></h2>
        <p class="username">@<?php echo $user['username']; ?></p>
        <p class="join-date">Member since July 2022 • Rawalpindi</p>

        <div class="stats">
            <div class="stat-box">
                <h3>120</h3>
                <span>Books Read</span>
            </div>
            <div class="stat-box">
                <h3>8</h3>
                <span>Reading</span>
            </div>
            <div class="stat-box">
                <h3>35</h3>
                <span>Wishlist</span>
            </div>
        </div>

        <div class="actions">
            <button class="btn primary">Follow</button>
            <button class="btn outline">Message</button>
            <button class="btn ghost">Edit Profile</button>
        </div>

    </div>
</div>

    <!-- Reading Dashboard -->
    <div class="section">
        <h3>Currently Reading</h3>

        <div class="book-grid">

            <div class="book-card">
                <h4>Atomic Habits</h4>
                <div class="progress-bar">
                    <div class="progress" style="width:90%"></div>
                </div>
                <span>90% Completed</span>
            </div>

            <div class="book-card">
                <h4>Deep Work</h4>
                <div class="progress-bar">
                    <div class="progress" style="width:30%"></div>
                </div>
                <span>30% Completed</span>
            </div>

        </div>
    </div>

    <!-- Library Management Tabs -->
    <div class="section">
        <h3>My Library</h3>

        <div class="tabs">
            <button class="tab active">To Read</button>
            <button class="tab">Favorites</button>
            <button class="tab">History</button>
        </div>

        <div class="book-grid">

            <div class="book-card">
                <h4>The Al Chemist</h4>
                <button class="action-btn">Read</button>
            </div>

        </div>
    </div>

</div>

</body>
</html>