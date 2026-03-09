# Electronic Library

A comprehensive electronic library website built with HTML, CSS, and JavaScript. It allows users to browse, search, and read books in PDF format, with features like categories, dark mode, and user interface enhancements.

## Features

- **Book Collection**: Extensive collection of books with individual pages containing metadata, descriptions, and "Read Now" buttons to open PDFs.
- **Categories**: Organized book categories including Fiction, History, Science, etc.
- **Search Functionality**: Search UI for finding books.
- **Dark Mode**: Toggle between light and dark themes.
- **Responsive Design**: CSS-based styling for various devices.
- **Navigation**: Browser navigation helpers and active link highlighting.
- **Contact Form**: Contact page (frontend only).

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript

## Quick Start

1. Clone or download the project folder.
2. Open [index.html](index.html) in your web browser to start browsing the library.

## Project Structure

- `index.html` — Homepage
- `about.html`, `contact.html` — Static pages
- `books.html` — Books listing page
- `categories.html` — Categories page
- `login.html`, `signup.html`, `profile.html` — Authentication pages (frontend only)
- `Books/` — Individual book HTML pages
- `Categories/` — Category-specific pages
- `CSS/` — Stylesheets (including dark mode)
- `JavaScript/` — Client-side scripts
- `PDFs/` — PDF files for books
- `Pics/` — Images and covers
- `Extras/` — Reusable HTML components like nav-bar and footer
- `PHP Actions/` — Placeholder for future server-side scripts

## Adding a New Book

1. Upload the PDF file to the `PDFs/` folder.
2. Upload the book cover image to `Pics/books/` (organized by category if desired).
3. Create a new HTML file in `Books/` based on an existing template (e.g., copy `Books/animalfarm.html`).
4. Update the book's metadata, description, and "Read Now" link in the new HTML file.
5. Optionally, update listing pages like `books.html` or category pages to include the new book.

## Development Notes

- Active navigation highlighting is handled in `JavaScript/main.js` using the current page filename.
- Dark mode toggle is implemented in `JavaScript/main.js`.
- Search functionality and alerts are also in `JavaScript/main.js`.

## Contributing

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Test locally by opening in a browser.
5. Submit a pull request.

## License

This project is open-source. Please add an appropriate LICENSE file if distributing.