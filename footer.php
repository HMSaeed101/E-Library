<?php
include $_SERVER['DOCUMENT_ROOT'] . '/ELECTRONIC LIBRARY/PHP Actions/connections.php';
?>

<footer class="footer">
    
    <div class="footer-content">

        <div class="outro">
            <h3>E-Library</h3>
            <p>House of Wisdom, preserving the past, empowering the present, and illuminating the future through knowledge.</p>
        </div>

        <div class="footer-links">
            <h4>Links</h4>
            <a href="index.php">Home</a>
            <a href="books.php">Books</a>
            <a href="about.php">About</a>
            <a href="contact.php">Contact</a>
        </div>

        <div class="categories-links">
            <h4>Categories</h4>
            <a href="/ELECTRONIC LIBRARY/Categories/fiction.php">Fiction</a>
            <a href="/ELECTRONIC LIBRARY/Categories/non-fiction.php">Non-fiction</a>
            <a href="/ELECTRONIC LIBRARY/Categories/science.php">Science</a>
            <a href="/ELECTRONIC LIBRARY/Categories/history.php">History</a>
        </div>

        <div class="newsletter">
            <form>
            Newsletter
                <input class="input" type="email" name="email" placeholder="Email address" required>
                <button type="submit" class="button" id="emailbutton">Subscribe</button>
            </form>
        </div>
    </div>
    <p class="copyright">© 2026 E-Library</p>
</footer>