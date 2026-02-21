<?php
include $_SERVER['DOCUMENT_ROOT'] . '/ELECTRONIC LIBRARY/PHP Actions/connections.php';
?>

<!DOCTYPE html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link rel="icon" type="image/jpeg" href="../pics/logo.jpg">

  <title>The Swallows of Kabul | Book</title>
  
  <link rel="stylesheet" href="../css/book.css" />
  <link rel="stylesheet" href="../css/dark-book.css" />
  <script src="../javascript/book.js" defer></script>
</head>

<body>

<?php include $_SERVER['DOCUMENT_ROOT'] . '/ELECTRONIC LIBRARY/Navigation-bar.php'; ?>

<nav class="breadcrumb">
  <ol class="breadcrumb-list">

    <li class="breadcrumb-item">
      <a href="/Electronic Library/categories.php">Categories</a>
    </li>
    <li class="breadcrumb-item">
      <a href="/Electronic Library/Categories/fiction.php">Fiction</a>
    </li>

    <!-- current page – no link -->
      <li class="breadcrumb-item active"  aria-current="page">
          Swallows of Kabul
      </li>
  </ol>  
</nav>


<main class="book-container">

  <div class="book-header">
  
    <div class="book-cover-wrapper">
      <img 
        src="../Pics/books/swallows.jpg"
        alt="The Swallows of Kabul" 
        class="book-cover"
      />
    </div>

    <div class="book-info">
      <h1 class="book-title">The Swallows of Kabul</h1>
      <p class="book-author">Yasmina Khadra</p>
        
    <div class="meta-row">
        <span class="meta-item">Standalone</span>
        <span class="meta-item">195 pages</span>
        <span class="meta-item">English</span>
        <span class="meta-item rating">
          3.69 (12,500 ratings)
        </span>
      </div>

        <div class="genres">
          <span class="genre-tag">Fiction</span>
          <span class="genre-tag">Historical Fiction</span>
          <span class="genre-tag">War</span>
          <span class="genre-tag">Cultural</span>
        </div>

        <div class="action-buttons">
          <button class="btn primary" onclick="window.open('../PDFs/swallows-of-kabul.pdf', '_blank')">Read Now</button>
          <button class="btn secondary">Add to Favorites</button>
          <button class="btn tertiary">Download PDF</button>
        </div>
        
      </div>
    </div>

    <section class="book-description">
    <h2>Description</h2>
    <p>
Since the ascendancy of the Taliban the lives of Mosheen and his beautiful wife, Zunaira, have been gradually destroyed. Mosheen's dream of becoming a diplomat has been shattered and Zunaira can no longer even appear on the streets of Kabul unveiled. Atiq is a jailer who guards those who have been condemned to death; the darkness of prison and the wretchedness of his job have seeped into his soul. Atiq's wife, Musarrat, is suffering from an illness no doctor can cure. Yet, the lives of these four people are about to become inexplicably intertwined, through death and imprisonment to passion and extraordinary self-sacrifice. The Swallows of Kabul is an astounding and elegiac novel of four people struggling to hold on to their humanity in a place where pleasure is a deadly sin and death has become routine.
</p>


  </section>

    <section class="book-details-section">
      <h2>Book Details</h2>
      <div class="details-grid">
        <div class="detail-item">
          <span class="label">Publisher</span>
          <span class="value">Vintage</span>
        </div>
        <div class="detail-item">
          <span class="label">ISBN</span>
          <span class="value">978-1400033768</span>
        </div>
        <div class="detail-item">
          <span class="label">Publication Date</span>
          <span class="value">April 12, 2005</span>
        </div>
        <div class="detail-item">
          <span class="label">File Size</span>
          <span class="value">1 MB (PDF)</span>
        </div>
        <div class="detail-item">
          <span class="label">Format</span>
          <span class="value">PDF, EPUB</span>
        </div>
      </div>
    </section>

</main>


</body>
</html>