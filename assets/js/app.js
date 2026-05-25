/* ============================================================
   APP.JS — Master Entry Point
   Orchestrates shared logic and initializes specialized modules.
============================================================ */

import { initDarkMode, toggleDarkMode } from "./core/theme.js";
import { initIncludes } from "./core/include.js";
import { loadSearchData, initSearch } from "./features/search.js";
import { initHeaderScroll, updateStats } from "./features/ui-effects.js";
import { renderBooksGrid } from "./features/books.js";
import { initAuth } from "./core/auth.js";
import { initBookDetails } from "./features/book.js";
import { initCategoryLoader } from "./features/category-loader.js";

// 1. Immediate initialization
initDarkMode();

// 2. Expose helpers to window
window.toggleDarkMode = toggleDarkMode;
window.goBack = () => history.back();
window.goForward = () => history.forward();

document.addEventListener("DOMContentLoaded", async () => {
    // 3. Initialize Declarative Includes (Navbar, Footer, etc.)
    await initIncludes();

    // 4. Initialize UI Effects
    initHeaderScroll(".header");

    // 5. Initialize Auth (if on auth page)
    initAuth();

    // 6. Load Data and Initialize Features
    const dataPath = "/assets/data/books.json";
    
    try {
        const books = await loadSearchData(dataPath);
        
        // Initialize Search UI
        initSearch();

        // Initialize Book Details (if on detail page)
        await initBookDetails();

        // Initialize Category Loader (if on category page)
        await initCategoryLoader();

        // Dynamically render featured books if on home page
        const featuredGrid = document.querySelector(".featured-books .book-grid");
        if (featuredGrid) {
            renderBooksGrid(featuredGrid, books.slice(0, 12));
            updateStats(books);
        }

        // Dynamically render full books grid if on books page
        const fullGrid = document.getElementById("booksGrid");
        if (fullGrid) {
            renderBooksGrid(fullGrid, books);
        }
        
    } catch (error) {
        console.error("Initialization Error:", error);
    }
});
