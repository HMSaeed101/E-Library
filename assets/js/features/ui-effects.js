/* ============================================================
   UI-EFFECTS.JS — Shared UI Interactions
   Handles scroll effects, dynamic navigation, etc.
============================================================ */

/**
 * Header Scroll Effect: Adds 'scrolled' class on scroll
 * @param {string} selector 
 */
export function initHeaderScroll(selector = ".header") {
    const header = document.querySelector(selector);
    if (!header) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 20 && !header.classList.contains("scrolled")) {
            header.classList.add("scrolled");
        } else if (window.scrollY <= 20 && header.classList.contains("scrolled")) {
            header.classList.remove("scrolled");
        }
    });
}

/**
 * Statistics Counter (Scalability Scope)
 * Automatically updates stats from book data
 * @param {Array} books 
 */
export function updateStats(books) {
    const totalBooksEl = document.querySelector(".stat-card:nth-child(2) p");
    if (totalBooksEl && books) {
        totalBooksEl.textContent = books.length;
    }
}
