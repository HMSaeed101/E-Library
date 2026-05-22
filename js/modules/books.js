/* ============================================================
   BOOKS.JS — Shared Book Rendering Logic
============================================================ */

/**
 * Renders a grid of books into a container.
 * @param {HTMLElement} container 
 * @param {Array} books 
 * @param {string} pathPrefix - Prefix for book links and images
 */
export function renderBooksGrid(container, books, pathPrefix = "") {
    if (!container) return;
    
    if (books.length === 0) {
        container.innerHTML = `<p class="no-results">No books found.</p>`;
        return;
    }

    container.innerHTML = books.map(book => `
        <a href="${pathPrefix}books/book-details.html?id=${book.id}">
            <div class="book-card">
                <img src="${pathPrefix}${book.cover}" alt="${book.title}" />
                <div class="book-card-info">
                    <h3>${book.title}</h3>
                    <p>${book.author}</p>
                </div>
            </div>
        </a>
    `).join("");
}
