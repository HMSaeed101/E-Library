/* ============================================================
   BOOKS.JS — Shared Book Rendering Logic
============================================================ */

/**
 * Calculates root prefix based on current path
 */
function getRootPrefix() {
    const path = window.location.pathname;
    if (path.includes("/pages/auth/")) return "../../";
    if (path.includes("/pages/")) return "../";
    return "";
}

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

    const rootPrefix = getRootPrefix();

    container.innerHTML = books.map(book => {
        // Fix cover path if it's relative to root
        const coverSrc = book.cover.startsWith("/") ? book.cover.substring(1) : book.cover;
        const bookDetailsHref = `${rootPrefix}pages/book-details.html?id=${book.id}`;

        return `
            <a href="${bookDetailsHref}">
                <div class="book-card">
                    <img src="${rootPrefix}${coverSrc}" alt="${book.title}" />
                    <div class="book-card-info">
                        <h3>${book.title}</h3>
                        <p>${book.author}</p>
                    </div>
                </div>
            </a>
        `;
    }).join("");
}
