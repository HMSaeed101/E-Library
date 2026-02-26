# Electronic Library

A simple PHP-based electronic library website (XAMPP-compatible) for browsing and reading books (PDF/EPUB). Includes a Books collection, categories, search UI, dark mode, and basic navigation, and User Profile.

## Features
- Book pages with metadata and description
- "Read Now" buttons that open PDFs from the [PDFs/](PDFs/)
- Dark mode toggle implemented in [`toggleDarkMode`](JavaScript/main.js)
- Browser navigation helpers: [`goBack`](JavaScript/main.js), [`goForward`](JavaScript/main.js)
- Basic auth pages: [login.html](login.html), [signup.html](signup.html), [profile.html](profile.html)
- Main entry: [index.html](index.html)

## Quick start (XAMPP)
1. Place the project folder in XAMPP's `htdocs` (e.g. `d:\xampp\htdocs\Electronic Library`).
2. Start Apache (and MySQL if needed) via XAMPP Control Panel.
3. Open in browser: `http://localhost/Electronic%20Library/` or [index.html](index.html).

## Project structure (key files & folders)
- [index.html](index.html) — homepage  
- [about.html](about.html), [contact.html](contact.html), [footer.html](footer.html), [navigation-bar.html](navigation-bar.html)  
- [books.html](books.html), [categories.html](categories.html)  
- [login.html](login.html), [signup.html](signup.html), [profile.html](profile.html)  
- [JavaScript/main.js](JavaScript/main.js) — UI scripts (dark mode, search dropdown, active link highlighting)  
- [CSS/](CSS/) — styles  
- [PDFs/](PDFs/) — pdf files opened by "Read Now" buttons  
- [Pics/](Pics/) — cover images  
- [Books/](Books/) — individual book pages (examples below)
  - [Books/animalfarm.html](Books/animalfarm.html)  
  - [Books/MasterMargrita.html](Books/MasterMargrita.html)  
  - [Books/language.html](Books/language.html)
  - and many more ...

## Adding a new book
1. Upload PDF to [PDFs/](PDFs/) and cover image to [Pics/books/](Pics/books/).  
2. Create a book page under [Books/](Books/) (copy existing pattern from [`Books/animalfarm.html`](Books/animalfarm.html)).  
3. Update any listing pages (e.g. [books.html](books.html)) if you maintain a manual index.

## Development notes
- Active nav highlighting is driven by the logic in [`JavaScript/main.js`](JavaScript/main.js) that uses the current filename to set `.active` on `.navigation-bar a`.
- Search dropdown and "coming soon" alert are implemented in [`JavaScript/main.js`](JavaScript/main.js).

## Contributing
- Fork, make changes, and open a PR. Keep server-side changes compatible with PHP 7.4+ (or your target runtime).

## License
Add a LICENSE file if you plan to open-source this repo.