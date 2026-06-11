# Electronic Library (E-Lib)

A frontend-focused digital library platform for browsing, searching, and previewing book collections. This project utilizes a modular JavaScript architecture to dynamically manage content and provide a responsive user interface.

## Core Functionality

- **Dynamic Book Grids**: Automatically renders book collections into grids using data from `assets/data/books.json`.
- **Search & Filtering**: Real-time search that filters the book catalog by title or author.
- **HTML Component Inclusion**: Uses a custom `data-include` system to reuse HTML components (like the navigation bar and footer) across multiple pages.
- **Theme Management**: Integrated dark mode toggle with persistent state saved in `localStorage`.
- **Book Previews**: A "Quick Peek" modal system for viewing book summaries and metadata.
- **Loading States**: Visual skeleton screens that display while data is being loaded or rendered.
- **Responsive Design**: Modular CSS architecture providing layouts optimized for mobile and desktop.

## Technical Stack

- **Frontend**: HTML5, Vanilla CSS, and JavaScript (ES6 Modules).
- **Data Storage**: JSON files located in `assets/data/`.
- **Client-side Logic**: Modularized into `core/` (shared utilities) and `features/` (page-specific logic).

## Project Structure

- `index.html`: Main landing page.
- `pages/`: Individual application views (books, categories, profile, etc.).
- `components/`: Reusable HTML snippets for the `data-include` system.
- `assets/js/`:
    - `core/`: Fundamental logic for data fetching, theme management, and HTML inclusion.
    - `features/`: Specific logic for search, book grids, and profile interactions.
- `assets/css/`: Modular stylesheets organized by base rules, components, and pages.
- `assets/data/`: Central JSON data files (books.json).
- `assets/pdfs/`: Digital book files in PDF format.
- `php-actions/`: Non-functional PHP stubs for legacy backend logic.
