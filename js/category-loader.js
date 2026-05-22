/* ============================================================
   CATEGORY-LOADER.JS — Dynamic Category Page Logic
   Fetches books by category from books.json.
============================================================ */

import { renderBooksGrid } from "./modules/books.js";

document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);
    const categoryId = params.get("type");
    
    if (!categoryId) {
        window.location.href = "../categories.html";
        return;
    }

    const grid = document.getElementById("category-books-grid");
    const titleEl = document.getElementById("category-title");
    const breadcrumbEl = document.getElementById("breadcrumb-category");
    const descriptionEl = document.getElementById("category-description");

    const categoryName = categoryId.replace(/-/g, ' ').toUpperCase();
    titleEl.textContent = `${categoryName} BOOKS`;
    breadcrumbEl.textContent = categoryName;
    document.title = `${categoryName} | E-Library`;
    descriptionEl.textContent = `Explore our collection of ${categoryName.toLowerCase()} books.`;

    try {
        const res = await fetch("../books/books.json");
        const books = await res.json();
        
        const filteredBooks = books.filter(book => book.category === categoryId);

        if (filteredBooks.length === 0) {
            grid.innerHTML = `<p class="no-results">No books found in this category yet.</p>`;
            return;
        }

        renderBooksGrid(grid, filteredBooks, "../");

    } catch (e) {
        console.error("Failed to load category books", e);
        grid.innerHTML = `<p class="error">Error loading books. Please try again later.</p>`;
    }
});
