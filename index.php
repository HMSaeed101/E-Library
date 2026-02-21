<?php
include $_SERVER['DOCUMENT_ROOT'] . '/ELECTRONIC LIBRARY/PHP Actions/connections.php';
?>

<!DOCTYPE html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/jpeg" href="pics/logo.jpg">
    <title>Electronic Library</title>
    <link rel="stylesheet" href="CSS/index.css">
    <link rel="stylesheet" href="CSS/dark-theme.css">
</head>

<body>

<?php include 'navigation-bar.php';?>


<section class="hero">

<h1 class="heading-container">
  <span class="word" dir="rtl">بَيْتُ الْحِكْمَةِ</span>
  <span class="word">House of Wisdom</span>
  <span class="word">智 慧 之 家</span>
  <!-- Zhì huì zhī jiā (jhuh-hway jir jyaa) -->
  <span class="word" dir="rtl">حکمت کا گھر</span>
  <span class="word">ज्ञान का घर</span>
  <span class="word">Domus Sapientiae</span>
  <span class="word">Дом Мудрости</span>
  <!-- Dom Mudrosti (dom moo-dro-stee) -->
</h1>


    <div class="search-box">
    <input 
        type="text" 
        id="searchInput"
        placeholder="Search books, authors, topics"
    >
    <button class="button">Search</button>

        <div class="search-dropdown" id="searchDropdown">
            <div class="item">Most Read This Week</div>
            <div class="item">Newly Added Books</div>
            <div class="item">Student Recommended Books</div>
            <div class="item">Urdu Literature</div>
            <div class="item">Short Books</div>
            <div class="item">English Learning Books</div>
        </div>

    </div>

</section>


<section class="featured-books">
    <h2>Featured Books</h2>

    <div class="book-grid">

        <a href="Books/Alchemist.php">
        <div class="book-card">
            <img src="Pics/books/Alchemist.jpg" alt="The Alchemist">
        </div>
        </a>
        
        <a href="Books/HolyQuran.php">
        <div class="book-card">
            <img src="Pics/books/quran.jpg" alt="Quran">
        </div>
        </a>

        <a href="Books/allama.php">
        <div class="book-card">
            <img src="Pics/books/allama.jpg" alt="Allama">
        </div>
        </a>

        <a href="Books/Sealed-Nectar.php">
        <div class="book-card">
            <img src="Pics/books/Sealed_Nectar.jpg" alt="Sealed Nectar">
        </div>
        </a>

        <a href="Books/ArtofWar.php">
        <div class="book-card">
            <img src="Pics/books/Artofwar.jpg" alt="Art of War">
        </div>
        </a>

        <a href="Books/KiteRunner.php">
        <div class="book-card">
            <img src="Pics/books/KiteRunner.jpg" alt="The Kite Runner">
        </div>
        </a>

        <a href="Books/Khalifate.php">
        <div class="book-card">
            <img src="Pics/books/Khalifate.jpg" alt="Khilafate">
        </div>
        </a>

        <a href="Books/God.php">
        <div class="book-card">
            <img src="Pics/books/God.jpg" alt="No god but God">
        </div>
        </a>

        <a href="Books/imran.php">
        <div class="book-card">
            <img src="Pics/books/imran.jpg" alt="Imran Khan">
        </div>
        </a>

        <a href="Books/greatexpectations.php">
        <div class="book-card">
            <img src="Pics/books/greatexpectations.jpg" alt="Great Expectations">
        </div>
        </a>

        <a href="Books/paradise.php">
        <div class="book-card">
            <img src="pics/books/paradise.jpg" alt="Paradise">
        </div>
        </a>

        <!-- <a href="Books/littleredbook.php">
        <div class="book-card">
            <img src="Pics/books/littleredbook.jpg" alt="Little Red Book">
        </div>
        </a> -->

        <a href="Books/masnavi.php">
        <div class="book-card">
            <img src="Pics/books/masnavi.jpg" alt="Masnavi">
        </div>
        </a>

        <a href="Books/nahjulbalagah.php">
        <div class="book-card">
            <img src="Pics/books/nahjulbalagah.jpg" alt="Nahaj-ul-balagah">
        </div>
        </a>

        <a href="Books/persia.php">
        <div class="book-card">
            <img src="Pics/books/persia.jpg" alt="History of Persia">
        </div>
        </a>
        

    </div>
</section>


<h2>Explore by Categories</h2>

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


<?php include 'footer.php';?>

<script src="JavaScript/main.js" defer></script>

</body>
</php>