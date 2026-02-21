<?php
include $_SERVER['DOCUMENT_ROOT'] . '/ELECTRONIC LIBRARY/PHP Actions/connections.php';
?>

<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>Nature Books</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../CSS/index.css">
    <link rel="stylesheet" href="../CSS/dark-theme.css">
    <script src="../JavaScript/main.js" defer></script>
    <link rel="icon" type="image/jpeg" href="../Pics/logo.jpg">
</head>
<body>

<?php include $_SERVER['DOCUMENT_ROOT'] . '/ELECTRONIC LIBRARY/navigation-bar.php'; ?>

<button onclick="goBack()" class="nav-button" id="back-btn" >←</button>

<button onclick="goForward()" class="nav-button" id="forward-btn" >→</button>

<section class="hero-pages">

    <h2>Nature Category</h2>
    <p>Explore our collection of Nature books.</p>
</section>


<section class="books-page-grid">

    <a href="../Books/Alchemist.php">
    <div class="book-card">
        <img src="../pics/books/Alchemist.jpg" alt="The Alchemist">
        <h3>The Alchemist</h3>
        <p>Paulo Coelho</p>
    </div>
    </a>
    
    <a href="../Books/hourofstar.php">
    <div class="book-card">
        <img src="../pics/books/hourofstar.jpg" alt="Hour of the Star">
        <h3>Hour of the Star</h3>
        <p>Clarice Lispector</p>
    </div>
    </a>

    
    <a href="../Books/KiteRunner.php">
        <div class="book-card">
            <img src="../pics/books/KiteRunner.jpg" alt="The Kite Runner">
            <h3>The Kite Runner</h3>
            <p>Khalid Hosssenni</p>
        </div>
    </a>
    
    <a href="../Books/paradise.php">
        <div class="book-card">
            <img src="../pics/books/paradise.jpg" alt="Paradise">
            <h3>Paradise</h3>
            <p>Abdulrazak Gurnah</p>
        </div>
    </a>

    <a href="../Books/yearsofsolitude.php">
    <div class="book-card">
        <img src="../pics/books/yearsofsolitude.jpg" alt="One Hundred Years of Solitude">
        <h3>One Hundred Years of Solitude</h3>
        <p>Gabriel Márquez</p>
    </div>
    </a>
    
    <a href="../Books/MasterMargrita.php">
    <div class="book-card">
        <img src="../pics/books/MasterMargrita.jpg" alt="The Master and Margarita">
        <h3>Master & Margarita</h3>
        <p>Mikhail Bulgakov</p>
    </div>
    </a>
    
    <a href="../Books/shadows.php">
    <div class="book-card">
        <img src="../pics/books/shadows.jpg" alt="Burnt Shadows">
        <h3>Burnt Shadows</h3>
        <p>Kamila Shamsie</p>
    </div>
    </a>

    <a href="../Books/swallows.php">
    <div class="book-card">
        <img src="../pics/books/swallows.jpg" alt="Swallows of Kabul">
        <h3>Swallows of Kabul</h3>
        <p>Yasmina Khadra</p>
    </div>
</a>

    <a href="../Books/kerandesai.php">
    <div class="book-card">
        <img src="../pics/books/kerandesai.jpg" alt="Inheritance of Loss">
        <h3>Inheritance of Loss</h3>
        <p>Kiran Desai</p>
    </div>
</a>

<a href="../Books/fundamentalist.php">
<div class="book-card">
    <img src="../pics/books/fundamentalist.jpg" alt="The Reluctant Fundamentalist">
    <h3>Reluctant Fundamentalist</h3>
    <p>Mohsin Hamid</p>
</div>
</a>

<a href="../Books/Mayombe.php">
    <div class="book-card">
        <img src="../pics/books/Mayombe.jpg" alt="Mayombe">
        <h3>Mayombe</h3>
        <p>Pepetela</p>
    </div>
    </a>

    <a href="../Books/brass.php">
    <div class="book-card">
        <img src="../pics/books/brass.jpg" alt="City of Brass">
        <h3>City of Brass</h3>
        <p>S. A. Chakraborty</p>
    </div>
    </a>

    <a href="../Books/Alchemist.php">
    <div class="book-card">
        <img src="../pics/books/Alchemist.jpg" alt="The Alchemist">
        <h3>The Alchemist</h3>
        <p>Paulo Coelho</p>
    </div>
    </a>
    
    <a href="../Books/hourofstar.php">
    <div class="book-card">
        <img src="../pics/books/hourofstar.jpg" alt="Hour of the Star">
        <h3>Hour of the Star</h3>
        <p>Clarice Lispector</p>
    </div>
    </a>

    
    <a href="../Books/KiteRunner.php">
        <div class="book-card">
            <img src="../pics/books/KiteRunner.jpg" alt="The Kite Runner">
            <h3>The Kite Runner</h3>
            <p>Khalid Hosssenni</p>
        </div>
    </a>
    
    <a href="../Books/paradise.php">
        <div class="book-card">
            <img src="../pics/books/paradise.jpg" alt="Paradise">
            <h3>Paradise</h3>
            <p>Abdulrazak Gurnah</p>
        </div>
    </a>
    
    <a href="../Books/MasterMargrita.php">
    <div class="book-card">
        <img src="../pics/books/MasterMargrita.jpg" alt="The Master and Margarita">
        <h3>Master & Margarita</h3>
        <p>Mikhail Bulgakov</p>
    </div>
    </a>
        
</section>


<?php include '../footer.php'; ?>


</body>
</php>
