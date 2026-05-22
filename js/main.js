/* ============================================================
   MAIN.JS — Master Entry Point
   Orchestrates shared logic and initializes specialized modules.
============================================================ */

import { initDarkMode, toggleDarkMode } from "./modules/theme.js";
import { includeHTML } from "./modules/include.js";
import { validateAuthForm } from "./modules/auth.js";
import { loadSearchData, performSearch, displaySearchResults } from "./modules/search.js";
import { initHeaderScroll, updateStats } from "./modules/ui-effects.js";
import { renderBooksGrid } from "./modules/books.js";

// 1. Immediate initialization
initDarkMode();

// 2. Expose helpers to window (for legacy HTML onclick and navigation)
window.toggleDarkMode = toggleDarkMode;
window.goBack = () => history.back();
window.goForward = () => history.forward();

document.addEventListener("DOMContentLoaded", async () => {
    // 3. Component Injections (DRY: centralized instead of inline scripts)
    const isSubfolder = window.location.pathname.includes("/books/") || 
                        window.location.pathname.includes("/categories/") ||
                        window.location.pathname.includes("/php-actions/");
    const prefix = isSubfolder ? "../" : "";

    // Inject Common Components
    if (document.getElementById("nav-bar")) {
        includeHTML("nav-bar", `${prefix}extras/nav-bar.html`);
    }
    if (document.getElementById("inner-nav-bar")) {
        includeHTML("inner-nav-bar", `${prefix}extras/inner-nav-bar.html`);
    }
    if (document.getElementById("footer")) {
        includeHTML("footer", `${prefix}extras/footer.html`);
    }

    // 4. Initialize UI Effects
    initHeaderScroll(".header");

    // 5. Load Data and Initialize Features
    const books = await loadSearchData();
    
    // Dynamically render featured books if on home page
    const featuredGrid = document.querySelector(".featured-books .book-grid");
    if (featuredGrid) {
        // Just show the first 12 books as featured for now
        renderBooksGrid(featuredGrid, books.slice(0, 12), prefix);
    }

    // Dynamically render all books if on books page
    const booksGrid = document.querySelector("#booksGrid");
    if (booksGrid) {
        renderBooksGrid(booksGrid, books, prefix);
    }

    updateStats(books);

    // 6. Initialize Search Logic
    const searchInput = document.querySelector("#searchInput");
    const searchDropdown = document.querySelector("#searchDropdown");
    const searchButton = document.querySelector(".hero .button");

    if (searchInput && searchDropdown) {
        let searchTimeout;
        searchInput.addEventListener("input", () => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                displaySearchResults(searchDropdown, performSearch(searchInput.value));
            }, 150);
        });

        searchInput.addEventListener("focus", () => {
            displaySearchResults(searchDropdown, performSearch(searchInput.value));
        });

        searchInput.addEventListener("blur", () => {
            setTimeout(() => { searchDropdown.style.display = "none"; }, 200);
        });

        if (searchButton) {
            searchButton.addEventListener("click", (e) => {
                e.preventDefault();
                const results = performSearch(searchInput.value);
                if (results.length > 0) {
                    displaySearchResults(searchDropdown, results);
                } else {
                    alert("Please enter a search term.");
                }
            });
        }
    }

    // 7. Auth Form Validation
    const authForm = document.querySelector(".login-container form");
    if (authForm) {
        authForm.addEventListener("submit", (e) => {
            const errors = validateAuthForm(authForm);
            if (errors.length > 0) {
                e.preventDefault();
                alert(errors.join("\n"));
            }
        });
    }

    // 8. Contact Form Logic
    const contactForm = document.querySelector(".contact-page-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Your message was sent successfully!");
            this.submit();
        });
    }
});
