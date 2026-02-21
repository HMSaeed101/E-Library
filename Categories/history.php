<?php
include $_SERVER['DOCUMENT_ROOT'] . '/ELECTRONIC LIBRARY/PHP Actions/connections.php';
?>

<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>History Books</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../CSS/index.css">
    <link rel="stylesheet" href="../CSS/dark-theme.css">
    <script src="../JavaScript/main.js" defer></script>
    <link rel="icon" type="image/jpeg" href="../pics/logo.jpg">
</head>
<body>

<?php include $_SERVER['DOCUMENT_ROOT'] . '/ELECTRONIC LIBRARY/navigation-bar.php'; ?>

<button onclick="goBack()" class="nav-button" id="back-btn" >←</button>

<button onclick="goForward()" class="nav-button" id="forward-btn" >→</button>

<section class="hero-pages">

<h2>History Category</h2>
<p>Explore our collection of History books.</p>

</section>


<section class="books-page-grid">

    <a href="../Books/silkroad.php">
    <div class="book-card">
        <img src="../pics/books/silkroad.jpg" alt="The Alchemist">
        <h3>The Silk Roads</h3>
        <p>Peter Frankopan</p>
    </div>
    </a>
    
    <a href="../Books/gum.php">
    <div class="book-card">
        <img src="../pics/books/gum.jpg" alt="Guns, Germs, and Steel">
        <h3>Guns, Germs & Steel</h3>
        <p>Jared Diamond</p>
    </div>
    </a>

    
    <a href="../Books/jerusalem.php">
        <div class="book-card">
            <img src="../pics/books/jerusalem.jpg" alt="Jerusalem: The Biography">
            <h3>Jerusalem</h3>
            <p>Simon Sebag</p>
        </div>
    </a>
    
    <a href="../Books/spqr.php">
        <div class="book-card">
            <img src="../pics/books/spqr.jpg" alt="SPQR: Ancient Rome">
            <h3>Ancient Rome</h3>
            <p>Mary Beard</p>
        </div>
    </a>

    <a href="../Books/muqaddimah.php">
    <div class="book-card">
        <img src="../pics/books/muqaddimah.jpg" alt="The Muqaddimah">
        <h3>Muqaddimah</h3>
        <p>Ibn Khaldun</p>
    </div>
    </a>
    
    <a href="../Books/ottoman.php">
    <div class="book-card">
        <img src="../pics/books/ottoman.jpg" alt="Ottoman Empire">
        <h3>Ottoman Empire</h3>
        <p>Halil İnalcık</p>
    </div>
    </a>
    
    <a href="../Books/persia.php">
    <div class="book-card">
        <img src="../Pics/books/persia.jpg" alt="History of Persia">
        <h3>Persian Fire</h3>
        <p>Tom Holland</p>
    </div>
    </a>

    <a href="../Books/swallows.php">
    <div class="book-card">
        <img src="../pics/books/swallows.jpg" alt="Swallows of Kabul">
        <h3>Swallows of Kabul</h3>
        <p>Yasmina Khadra</p>
    </div>
    </a>

    <a href="../Books/gulag.php">
    <div class="book-card">
        <img src="../pics/books/gulag.jpg" alt="Gulag: A History">
        <h3>Gulag - A History</h3>
        <p>Anne Applebaum</p>
    </div>
    </a>

    <a href="../Books/Khalifate.php">
    <div class="book-card">
        <img src="../Pics/books/Khalifate.jpg" alt="Khilafate">
        <h3>Caliphate</h3>
        <p>Huge Kennedy</p>
    </div>
    </a>

    <a href="../Books/ottoman.php">
    <div class="book-card">
        <img src="../pics/books/ottoman.jpg" alt="Ottoman Empire">
        <h3>Ottoman Empire</h3>
        <p>Halil İnalcık</p>
    </div>
    </a>
    
    <a href="../Books/persia.php">
    <div class="book-card">
        <img src="../Pics/books/persia.jpg" alt="History of Persia">
        <h3>Persian Fire</h3>
        <p>Tom Holland</p>
    </div>
    </a>

    
    <a href="../Books/silkroad.php">
    <div class="book-card">
        <img src="../pics/books/silkroad.jpg" alt="The Alchemist">
        <h3>The Silk Roads</h3>
        <p>Peter Frankopan</p>
    </div>
    </a>
    
    <a href="../Books/gum.php">
    <div class="book-card">
        <img src="../pics/books/gum.jpg" alt="Guns, Germs, and Steel">
        <h3>Guns, Germs & Steel</h3>
        <p>Jared Diamond</p>
    </div>
    </a>


</section>


<?php include '../footer.php'; ?>

<script src="JavaScript/main.js" defer></script>

</body>
</php>
