/* ============================================================
   APP.JS — Master Entry Point
   Orchestrates shared logic and initializes specialized modules.
============================================================ */

import { initDarkMode, toggleDarkMode } from "./core/theme.js";
import { initIncludes } from "./core/include.js";
import { getRootPrefix } from "./core/utils.js";
import { getBooks } from "./core/data.js";
import { initSearch } from "./features/search.js";
import { updateStats, toggleMenu, initTabs, highlightActiveNavLink, initNavInteractions, initScrollProgress, initGlobalSearch } from "./features/ui-effects.js";
import { renderBooksGrid, renderSkeletons } from "./features/books.js";
import { initAuth } from "./core/auth.js";
import { initBookDetails } from "./features/book.js";

// 1. Immediate initialization
initDarkMode();

// 2. Expose helpers to window
window.toggleDarkMode = toggleDarkMode;
window.toggleMenu = toggleMenu;

/**
 * Handles logic for the category detail page
 * @param {Array} books 
 */
function handleCategoryPage(books) {
    const categoryTitle = document.getElementById("category-title");
    const categoryDesc = document.getElementById("category-description");
    const categoryGrid = document.getElementById("category-books-grid");
    
    if (!categoryGrid) return;

    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");
    
    if (!type) {
        categoryGrid.innerHTML = `<p class="no-results" style="grid-column: 1/-1; text-align: center; padding: 40px;">No category selected.</p>`;
        return;
    }

    // Filter books by category
    const filteredBooks = books.filter(book => book.category === type.toLowerCase());
    
    // Update titles and description
    if (categoryTitle) {
        // Simple capitalization
        let displayTitle = type.charAt(0).toUpperCase() + type.slice(1);
        // Handle special case for non-fiction
        if (type.toLowerCase() === "non-fiction") displayTitle = "Non-Fiction";
        if (type.toLowerCase() === "lifeandvalues") displayTitle = "Life & Values";
        
        categoryTitle.textContent = displayTitle;
        document.title = `${displayTitle} | E-Library`;

        // Dynamically set hero background
        const heroSection = document.getElementById("category-hero-page");
        if (heroSection) {
            let imgName = type.toLowerCase();
            if (imgName === "lifeandvalues") imgName = "values";
            const rootPrefix = getRootPrefix();
            heroSection.style.backgroundImage = `url("${rootPrefix}assets/img/ui/categories/${imgName}.jpg")`;
        }
    }
    
    if (categoryDesc) {
        categoryDesc.textContent = `Explore our curated selection of ${type.toLowerCase()} literature.`;
    }

    renderBooksGrid(categoryGrid, filteredBooks);
}

document.addEventListener("DOMContentLoaded", async () => {
    // 3. Trigger initial skeletons as early as possible (before async calls)
    const featuredGrid = document.querySelector(".featured-books .book-grid");
    const booksGrid = document.getElementById("booksGrid");
    const categoryGrid = document.getElementById("category-books-grid");

    if (featuredGrid) renderSkeletons(featuredGrid, 6);
    if (booksGrid) renderSkeletons(booksGrid, 12);
    if (categoryGrid) renderSkeletons(categoryGrid, 8);

    // 4. Initialize UI State
    document.body.classList.add("fade-in");

    try {
        // Initialize Declarative Includes (Navbar, Footer, etc.)
        await initIncludes();

        // Initialize Global Search
        initGlobalSearch();

        // Highlight current page in nav
        highlightActiveNavLink();
        initNavInteractions();
        initScrollProgress();

        // 5. Initialize UI Effects
        initTabs();

        // 6. Initialize Auth (if on auth page)
        initAuth();

        // 7. Load Data and Initialize Features
        const books = await getBooks();

        // Initialize Search UI
        initSearch();

        // Initialize Book Details (if on detail page)
        await initBookDetails();

        // Handle Category Page
        handleCategoryPage(books);

        // Surprise Me Logic
        const surpriseMeBtn = document.getElementById("surpriseMeBtn");
        if (surpriseMeBtn && books.length > 0) {
            surpriseMeBtn.addEventListener("click", () => {
                const randomIndex = Math.floor(Math.random() * books.length);
                const randomBook = books[randomIndex];
                const rootPrefix = getRootPrefix();
                window.location.href = `${rootPrefix}pages/book-details.html?id=${randomBook.id}`;
            });
        }

        // Dynamically render featured books if on home page
        if (featuredGrid) {
            renderBooksGrid(featuredGrid, books.slice(0, 12), true); // Enabled infinite loop
            updateStats(books);
        }

        // Dynamically render and filter full books grid if on books page
        if (booksGrid) {
            const params = new URLSearchParams(window.location.search);
            const searchParam = params.get("search");
            const categoryParam = params.get("category");

            const searchInput = document.getElementById("searchInput");
            const filterContainer = document.querySelector(".filter-container");
            const filterPills = filterContainer ? filterContainer.querySelectorAll(".filter-pill") : [];

            let activeCategory = categoryParam ? categoryParam.toLowerCase().trim() : "all";

            // Pre-fill search input if present in URL
            if (searchInput && searchParam) {
                searchInput.value = searchParam;
            }

            // Highlight category pill if present in URL
            if (filterPills.length > 0) {
                filterPills.forEach(pill => {
                    const cat = pill.getAttribute("data-category");
                    if (cat === activeCategory) {
                        pill.classList.add("active");
                    } else {
                        pill.classList.remove("active");
                    }
                });
            }

            const applyFilters = () => {
                let booksToRender = books;

                // 1. Filter by Search input
                const searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : "";
                if (searchQuery) {
                    booksToRender = booksToRender.filter(book => 
                        book.title.toLowerCase().includes(searchQuery) || 
                        book.author.toLowerCase().includes(searchQuery) ||
                        (book.genres && book.genres.some(genre => genre.toLowerCase().includes(searchQuery)))
                    );
                }

                // 2. Filter by Category Pill
                if (activeCategory !== "all") {
                    booksToRender = booksToRender.filter(book => book.category === activeCategory);
                }

                // Update page titles if we are searching or filtering
                const booksHeroPage = document.getElementById("books-hero-page");
                if (booksHeroPage) {
                    const heroHeading = booksHeroPage.querySelector("h2");
                    const heroText = booksHeroPage.querySelector("p");
                    
                    if (searchQuery) {
                        if (heroHeading) heroHeading.textContent = `Search Results for "${searchQuery}"`;
                        if (heroText) heroText.textContent = `Found ${booksToRender.length} match${booksToRender.length === 1 ? '' : 'es'}`;
                    } else if (activeCategory !== "all") {
                        let displayCat = activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1);
                        if (activeCategory === "non-fiction") displayCat = "Non-Fiction";
                        if (activeCategory === "lifeandvalues") displayCat = "Life & Values";
                        if (heroHeading) heroHeading.textContent = `${displayCat} Collection`;
                        if (heroText) heroText.textContent = `Explore our selection of ${displayCat.toLowerCase()} literature (${booksToRender.length} book${booksToRender.length === 1 ? '' : 's'})`;
                    } else {
                        if (heroHeading) heroHeading.textContent = "Multiverse of Books";
                        if (heroText) heroText.textContent = "Explore our collection of books across all categories.";
                    }
                }

                // Apply opacity transition
                booksGrid.style.opacity = 0;
                setTimeout(() => {
                    renderBooksGrid(booksGrid, booksToRender);
                    booksGrid.style.opacity = 1;
                }, 100);
            };

            // Bind pill click events
            filterPills.forEach(pill => {
                pill.addEventListener("click", () => {
                    filterPills.forEach(p => p.classList.remove("active"));
                    pill.classList.add("active");
                    activeCategory = pill.getAttribute("data-category");
                    applyFilters();
                });
            });

            // Bind search input typing live filter
            if (searchInput) {
                searchInput.addEventListener("input", () => {
                    applyFilters();
                });
            }

            // Run initial filter check
            applyFilters();
        }

    } catch (error) {
        console.error("Initialization Error:", error);
    } finally {
        // ALWAYS trigger page fade-in, even on error
        document.body.classList.add("loaded");
    }
});
