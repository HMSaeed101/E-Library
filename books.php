<?php
include $_SERVER['DOCUMENT_ROOT'] . '/ELECTRONIC LIBRARY/PHP Actions/connections.php';
?>

<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>E-Library | Books</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/jpeg" href="pics/logo.jpg">
    <link rel="stylesheet" href="CSS/index.css">
    <link rel="stylesheet" href="CSS/dark-theme.css">
</head>
<body>

<?php include $_SERVER['DOCUMENT_ROOT'] . '/ELECTRONIC LIBRARY/navigation-bar.php'; ?>


<section class="hero-pages">
    <h2>Multiverse of Books</h2>
    <p>Explore our collection of books across all categories.</p>
</section>


<section class="search-books-page">
    <div class="search-box">
    <input 
        type="text" 
        id="searchInput"
        placeholder="Search books, authors, topics"
        autocomplete="off"
    >
    <button class="button">Search</button>

        <div class="search-dropdown" id="searchDropdown">
            <div class="item">Programming Fundamentals</div>
            <div class="item">Web Development</div>
            <div class="item">Data Structures</div>
            <div class="item">Artificial Intelligence</div>
            <div class="item">Programming Fundamentals</div>
            <div class="item">Web Development</div>
        </div>
    </div>
</section>



<section class="books-page-grid">

    <a href="Books/Alchemist.php" class="book-card-link">
    <div class="book-card">
        <img src="Pics/books/Alchemist.jpg" alt="The Alchemist">
        <h3>The Alchemist</h3>
        <p>Paulo Coelho</p>
    </div>
    </a>

    <a href="Books/HolyQuran.php" class="book-card-link">
    <div class="book-card">
        <img src="Pics/books/quran.jpg" alt="Quran">
        <h3>Quran</h3>
        <p>Holy Quran</p>
    </div>
    </a>

    <a href="Books/Sealed-Nectar.php" class="book-card-link">
    <div class="book-card">
        <img src="Pics/books/Sealed_Nectar.jpg" alt="Sealed Nectar">
        <h3>Sealed Nectar</h3>
        <p>Safi-ur-Rahman</p>
    </div>
    </a>

    <a href="Books/ArtofWar.php" class="book-card-link">
    <div class="book-card">
        <img src="Pics/books/Artofwar.jpg" alt="Art of War">
        <h3>Art of War</h3>
        <p>Sun Tzu</p>
    </div>
    </a>

    <a href="Books/swallows.php">
    <div class="book-card">
        <img src="pics/books/swallows.jpg" alt="Swallows of Kabul">
        <h3>Swallows of Kabul</h3>
        <p>Yasmina Khadra</p>
    </div>
    </a>

    <a href="Books/fundamentalist.php">
<div class="book-card">
    <img src="pics/books/fundamentalist.jpg" alt="The Reluctant Fundamentalist">
    <h3>Reluctant Fundamentalist</h3>
    <p>Mohsin Hamid</p>
</div>
</a>

<a href="Books/paradise.php">
        <div class="book-card">
            <img src="pics/books/paradise.jpg" alt="Paradise">
            <h3>Paradise</h3>
            <p>Abdulrazak Gurnah</p>
        </div>
    </a>

    <a href="Books/shadows.php">
    <div class="book-card">
        <img src="pics/books/shadows.jpg" alt="Burnt Shadows">
        <h3>Burnt Shadows</h3>
        <p>Kamila Shamsie</p>
    </div>
    </a>

    <a href="Books/elegentuniverse.php">
    <div class="book-card">
        <img src="Pics/books/elegentuniverse.jpg" alt="The Elegant Universe">
        <h3>Elegant Universe</h3>
        <p>Brian Greene</p>
    </div>
    </a>

    <a href="Books/language.php">
    <div class="book-card">
        <img src="pics/books/language.jpg" alt="Study of Language">
        <h3>Study of Language</h3>
        <p>George Yule</p>
    </div>
    </a>

    <a href="Books/gulag.php">
    <div class="book-card">
        <img src="pics/books/gulag.jpg" alt="Gulag: A History">
        <h3>Gulag - A History</h3>
        <p>Anne Applebaum</p>
    </div>
    </a>

    <a href="Books/origin.php">
    <div class="book-card">
        <img src="Pics/books/origin.jpg" alt="Origin of Species">
        <h3>Origin of Species</h3>
        <p>Charles Darwin</p>
    </div>
    </a>

</section>


<?php include 'footer.php'; ?>

<script src="JavaScript/main.js" defer></script>

</body>
</php>
