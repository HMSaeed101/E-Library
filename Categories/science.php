<?php
include $_SERVER['DOCUMENT_ROOT'] . '/ELECTRONIC LIBRARY/PHP Actions/connections.php';
?>

<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/jpeg" href="../Pics/logo.jpg">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Science Books</title>
    
    <link rel="stylesheet" href="../CSS/index.css">
    <link rel="stylesheet" href="../CSS/dark-theme.css">
    <script src="../JavaScript/main.js" defer></script>
</head>
<body>

<?php include $_SERVER['DOCUMENT_ROOT'] . '/ELECTRONIC LIBRARY/navigation-bar.php'; ?>

<button onclick="goBack()" class="nav-button" id="back-btn" >←</button>

<button onclick="goForward()" class="nav-button" id="forward-btn" >→</button>

<section class="hero-pages">

    <h2>Science Category</h2>
    <p>Explore our collection of Science books.</p>
</section>


<section class="books-page-grid">

    <a href="../Books/sleep.php">
    <div class="book-card">
        <img src="../Pics/books/sleep.jpg" alt="Why We Sleep">
        <h3>Why We Sleep</h3>
        <p>Matthew Walker</p>
    </div>
    </a>

    <a href="../Books/sixthext.php">
    <div class="book-card">
        <img src="../Pics/books/sixthext.jpg" alt="The Sixth Extinction">
        <h3>The Sixth Extinction</h3>
        <p>Elizabeth Kolbert</p>
    </div>
    </a>

    <a href="../Books/sevenlessons.php">
    <div class="book-card">
        <img src="../Pics/books/sevenlessons.jpg" alt="Seven Brief Lessons on Physics">
        <h3>Lessons on Physics</h3>
        <p>Carlo Rovelli</p>
    </div>
    </a>

    <a href="../Books/hotzone.php">
    <div class="book-card">
        <img src="../Pics/books/hotzone.jpg" alt="The Hot Zone">
        <h3>The Hot Zone</h3>
        <p>Richard Preston</p>
    </div>
    </a>

    <a href="../Books/elegentuniverse.php">
    <div class="book-card">
        <img src="../Pics/books/elegentuniverse.jpg" alt="The Elegant Universe">
        <h3>Elegant Universe</h3>
        <p>Brian Greene</p>
    </div>
    </a>

    <a href="../Books/doublehelix.php">
    <div class="book-card">
        <img src="../Pics/books/doublehelix.jpg" alt="Double Helix">
        <h3>Double Helix</h3>
        <p>James Watson</p>
    </div>
    </a>

    <a href="../Books/chaos.php">
    <div class="book-card">
        <img src="../Pics/books/chaos.jpg" alt="Chaos">
        <h3>Chaos</h3>
        <p>James Gleick</p>
    </div>
    </a>

    <a href="../Books/origin.php">
    <div class="book-card">
        <img src="../Pics/books/origin.jpg" alt="Origin of Species">
        <h3>Origin of Species</h3>
        <p>Charles Darwin</p>
    </div>
    </a>

    <a href="../Books/nutshell.php">
    <div class="book-card">
        <img src="../Pics/books/nutshell.jpg" alt="Universe in a Nutshell">
        <h3>Universe in a Nutshell</h3>
        <p>Stephen Hawking</p>
    </div>
    </a>

    <a href="../Books/demon.php">
    <div class="book-card">
        <img src="../Pics/books/demon.jpg" alt="Demon-Haunted World">
        <h3>Demon-Haunted World</h3>
        <p>Carl Sagan</p>
    </div>
    </a>

    <a href="../Books/gene.php">
    <div class="book-card">
        <img src="../Pics/books/gene.jpg" alt="The Gene">
        <h3>The Gene</h3>
        <p>Siddhartha Mukherjee</p>
    </div>
    </a>

    <a href="../Books/selfishgene.php">
    <div class="book-card">
        <img src="../Pics/books/selfishgene.jpg" alt="The Selfish Gene">
        <h3>Selfish Gene</h3>
        <p>Richard Dawkins</p>
    </div>
    </a>

    <a href="../Books/sevenlessons.php">
    <div class="book-card">
        <img src="../Pics/books/sevenlessons.jpg" alt="Seven Brief Lessons on Physics">
        <h3>Lessons on Physics</h3>
        <p>Carlo Rovelli</p>
    </div>
    </a>

    <a href="../Books/origin.php">
    <div class="book-card">
        <img src="../Pics/books/origin.jpg" alt="Origin of Species">
        <h3>Origin of Species</h3>
        <p>Charles Darwin</p>
    </div>
    </a>

    <a href="../Books/chaos.php">
    <div class="book-card">
        <img src="../Pics/books/chaos.jpg" alt="Chaos">
        <h3>Chaos</h3>
        <p>James Gleick</p>
    </div>
    </a>

</section>


<?php include '../footer.php'; ?>


</body>