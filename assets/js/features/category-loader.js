/* ============================================================
   CATEGORY-LOADER.JS — Dynamic Category Page Logic
============================================================ */

import { renderBooksGrid } from "./books.js";

/**
 * Initialize Category page logic
 */
export async function initCategoryLoader() {
    const params = new URLSearchParams(window.location.search);
    const categoryId = params.get("type");
    
    const grid = document.getElementById("category-books-grid");
    if (!grid) return;

    if (!categoryId) {
        window.location.href = "/pages/categories.html";
        return;
    }

    const titleEl = document.getElementById("category-title");
    const breadcrumbEl = document.getElementById("breadcrumb-category");
    const descriptionEl = document.getElementById("category-description");

    const categoryName = categoryId.replace(/-/g, ' ').toUpperCase();
    if (titleEl) titleEl.textContent = `${categoryName} BOOKS`;
    if (breadcrumbEl) breadcrumbEl.textContent = categoryName;
    document.title = `${categoryName} | E-Library`;
    if (descriptionEl) descriptionEl.textContent = `Explore our collection of ${categoryName.toLowerCase()} books.`;

    try {
        const res = await fetch("/assets/data/books.json");
        const books = await res.json();
        
        const filteredBooks = books.filter(book => book.category === categoryId);

        if (filteredBooks.length === 0) {
            grid.innerHTML = `<p class="no-results">No books found in this category yet.</p>`;
            return;
        }

        renderBooksGrid(grid, filteredBooks);

    } catch (e) {
        console.error("Failed to load category books", e);
        grid.innerHTML = `<p class="error">Error loading books. Please try again later.</p>`;
    }
}
