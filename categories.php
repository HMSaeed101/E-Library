<?php
include $_SERVER['DOCUMENT_ROOT'] . '/ELECTRONIC LIBRARY/PHP Actions/connections.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>E-Library | Categories</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="CSS/index.css">
    <link rel="stylesheet" href="CSS/dark-theme.css">
    <link rel="icon" type="image/jpeg" href="Pics/logo.jpg">
</head>
<body>

<?php include $_SERVER['DOCUMENT_ROOT'] . '/ELECTRONIC LIBRARY/navigation-bar.php'; ?>


<section class="hero-pages">
    <h2>Book Categories</h2>
    <p>Explore books organized by your favorite topics and genres.</p>
</section>


<div class="categories-grid">
    <a href="Categories/fiction.php" class="category-card">
      FICTION
    </a>    
    <a href="Categories/non-fiction.php" class="category-card">
      NON-FICTION
    </a>    
    <a href="Categories/science.php" class="category-card">
      SCIENCE
    </a>    
    <a href="Categories/technology.php" class="category-card">
      TECHNOLOGY
    </a>    
    <a href="Categories/nature.php" class="category-card">
      NATURE
    </a>    
    <a href="Categories/lifeandvalues.php" class="category-card">
      LIFE & VALUES
    </a>
    <a href="Categories/history.php" class="category-card">
      HISTORY
    </a>
</div>

<?php include 'footer.php'; ?>
<script src="JavaScript/main.js" defer></script>

</body>
</html>
