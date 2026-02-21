<header class="header">

    <div class="logo-area">
        <div class="logo-img">
            <img src="logo.jpg" alt="Logo Image">
        </div>
        <div>
            <p>E-Library</p>
        </div>
    </div>
    
    <nav class="navigation-bar">

    <a href="/ELECTRONIC LIBRARY/index.php"    data-page="index.php">Home</a>
    <a href="/ELECTRONIC LIBRARY/books.php"     data-page="books.php">Books</a>
    <a href="/ELECTRONIC LIBRARY/categories.php" data-page="categories.php">Categories</a>
    <a href="/ELECTRONIC LIBRARY/contact.php"   data-page="contact.php">Contact Us</a>
    <a href="/ELECTRONIC LIBRARY/login.php"     data-page="login.php">Login</a>
    <a href="/ELECTRONIC LIBRARY/profile.php"     data-page="profile.php">Profile</a>

    <button onclick="toggleDarkMode()" id="darkmode-btn">
        <span class="moon">🌙</span>
        <span class="sun">☀️</span>
    </button>

</nav>

<!-- Scroll Navigation Bar Box Shadows -->
<script>
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => 
    {
        if (window.scrollY > 50) 
        {
            header.classList.add('scrolled');
        } 
        else 
        {
            header.classList.remove('scrolled');
        }
    }
    );
</script>


</header>