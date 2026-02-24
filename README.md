# Electronic Library

A simple PHP-based electronic library website (XAMPP-compatible) for browsing and reading books (PDF/EPUB). Includes a Books collection, categories, search UI, dark mode, and basic navigation, and User Profile.

## Features
- Book pages with metadata and description
- "Read Now" buttons that open PDFs from the [PDFs/](PDFs/)
- Dark mode toggle implemented in [`toggleDarkMode`](JavaScript/main.js)
- Browser navigation helpers: [`goBack`](JavaScript/main.js), [`goForward`](JavaScript/main.js)
- Basic auth pages: [login.php](login.php), [signup.php](signup.php), [profile.php](profile.php)
- Main entry: [index.php](index.php)

## Quick start (XAMPP)
1. Place the project folder in XAMPP's `htdocs` (e.g. `d:\xampp\htdocs\Electronic Library`).
2. Start Apache (and MySQL if needed) via XAMPP Control Panel.
3. Open in browser: `http://localhost/Electronic%20Library/` or [index.php](index.php).

## Project structure (key files & folders)
- [index.php](index.php) — homepage  
- [about.php](about.php), [contact.php](contact.php), [footer.php](footer.php), [navigation-bar.php](navigation-bar.php)  
- [books.php](books.php), [categories.php](categories.php)  
- [login.php](login.php), [signup.php](signup.php), [profile.php](profile.php)  
- [JavaScript/main.js](JavaScript/main.js) — UI scripts (dark mode, search dropdown, active link highlighting)  
- [CSS/](CSS/) — styles  
- [PDFs/](PDFs/) — pdf files opened by "Read Now" buttons  
- [Pics/](Pics/) — cover images  
- [Books/](Books/) — individual book pages (examples below)
  - [Books/animalfarm.php](Books/animalfarm.php)  
  - [Books/MasterMargrita.php](Books/MasterMargrita.php)  
  - [Books/language.php](Books/language.php)
  - and many more ...

## Adding a new book
1. Upload PDF to [PDFs/](PDFs/) and cover image to [Pics/books/](Pics/books/).  
2. Create a book page under [Books/](Books/) (copy existing pattern from [`Books/animalfarm.php`](Books/animalfarm.php)).  
3. Update any listing pages (e.g. [books.php](books.php)) if you maintain a manual index.

## Development notes
- Active nav highlighting is driven by the logic in [`JavaScript/main.js`](JavaScript/main.js) that uses the current filename to set `.active` on `.navigation-bar a`.
- Search dropdown and "coming soon" alert are implemented in [`JavaScript/main.js`](JavaScript/main.js).

## Contributing
- Fork, make changes, and open a PR. Keep server-side changes compatible with PHP 7.4+ (or your target runtime).

## License
Add a LICENSE file if you plan to open-source this repo.