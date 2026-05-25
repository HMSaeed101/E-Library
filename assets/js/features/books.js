/* ============================================================
   BOOKS.JS — Shared Book Rendering Logic
============================================================ */

/**
 * Renders a grid of books into a container.
 * @param {HTMLElement} container 
 * @param {Array} books 
 */
export function renderBooksGrid(container, books) {
    if (!container) return;
    
    if (books.length === 0) {
        container.innerHTML = `<p class="no-results">No books found.</p>`;
        return;
    }

    // Use root-relative paths for absolute reliability
    const assetPrefix = "/assets/";
    const pagePrefix = "/pages/";

    container.innerHTML = books.map(book => {
        // Handle cover path - assume filename only in JSON or old path
        let coverSrc = book.cover;
        if (!coverSrc.startsWith("/")) {
            // Clean up old path if present and make it root-relative
            const filename = coverSrc.split("/").pop();
            coverSrc = `${assetPrefix}img/covers/${filename}`;
        }

        return `
            <a href="${pagePrefix}book-details.html?id=${book.id}">
                <div class="book-card">
                    <img src="${coverSrc}" alt="${book.title}" />
                    <div class="book-card-info">
                        <h3>${book.title}</h3>
                        <p>${book.author}</p>
                    </div>
                </div>
            </a>
        `;
    }).join("");
}
