/* ============================================================
   BOOKS.JS — Shared Book Rendering Logic
============================================================ */

import { getRootPrefix } from "../core/utils.js";
import { getBookById } from "../core/data.js";

/**
 * Renders a grid of books into a container.
 * @param {HTMLElement} container 
 * @param {Array} books 
 */
export function renderBooksGrid(container, books, infinite = false) {
    if (!container) return;
    
    if (books.length === 0) {
        container.innerHTML = `<p class="no-results">No books found.</p>`;
        return;
    }

    const rootPrefix = getRootPrefix();

    const bookHTML = books.map(book => {
        const coverSrc = book.cover.startsWith("/") ? book.cover.substring(1) : book.cover;
        const bookDetailsHref = `${rootPrefix}pages/book-details.html?id=${book.id}`;

        // Calculate Reading Time
        let readingTimeStr = "";
        if (book.pages) {
            const pageCount = parseInt(book.pages);
            if (!isNaN(pageCount)) {
                const totalMinutes = Math.round((pageCount * 250) / 200);
                const hours = Math.floor(totalMinutes / 60);
                const mins = totalMinutes % 60;
                readingTimeStr = hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
            }
        }

        return `
            <div class="book-card" data-id="${book.id}" onclick="window.location.href='${bookDetailsHref}'">
                <div class="book-card-image">
                    <img src="${rootPrefix}${coverSrc}" alt="${book.title}" />
                    <button class="quick-peek-btn" onclick="event.stopPropagation(); window.openQuickPeek('${book.id}')">
                        Quick Peek
                    </button>
                    ${readingTimeStr ? `<span class="reading-time-badge">${readingTimeStr}</span>` : ''}
                </div>
                <div class="book-card-info">
                    <h3>${book.title}</h3>
                    <p>${book.author}</p>
                </div>
            </div>
        `;
    }).join("");

    // If infinite, duplicate the content for a seamless loop
    container.innerHTML = infinite ? bookHTML + bookHTML : bookHTML;
}

/**
 * Renders skeleton loading cards into a container.
 * @param {HTMLElement} container 
 * @param {number} count 
 */
export function renderSkeletons(container, count = 8) {
    if (!container) return;

    let skeletonHTML = "";
    for (let i = 0; i < count; i++) {
        skeletonHTML += `
            <div class="book-card skeleton-card">
                <div class="book-card-image skeleton"></div>
                <div class="book-card-info">
                    <div class="skeleton skeleton-text" style="height: 20px; width: 80%; margin-bottom: 10px;"></div>
                    <div class="skeleton skeleton-text" style="height: 14px; width: 60%;"></div>
                </div>
            </div>
        `;
    }
    container.innerHTML = skeletonHTML;
}

/**
 * Opens the Quick Peek modal for a specific book.
 * @param {string} bookId 
 */
export async function openQuickPeek(bookId) {
    let modal = document.getElementById("quick-peek-modal");
    let body = document.getElementById("quick-peek-body");

    // Dynamically create modal if missing (fixes pages like Books, Category, Profile)
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "quick-peek-modal";
        modal.className = "modal";
        modal.innerHTML = `
            <div class="modal-backdrop" onclick="window.closeQuickPeek()"></div>
            <div class="modal-content">
                <button class="modal-close" onclick="window.closeQuickPeek()">×</button>
                <div id="quick-peek-body"></div>
            </div>
        `;
        document.body.appendChild(modal);
        body = modal.querySelector("#quick-peek-body");
    }

    if (!modal || !body) return;

    try {
        const book = await getBookById(bookId);
        if (!book) return;

        const rootPrefix = getRootPrefix();
        const coverSrc = book.cover.startsWith("/") ? book.cover.substring(1) : book.cover;

        body.innerHTML = `
            <div class="quick-peek-layout">
                <div class="qp-header">
                    <img src="${rootPrefix}${coverSrc}" alt="${book.title}" />
                </div>
                <div class="qp-body">
                    <div class="qp-title-area">
                        <h2>${book.title}</h2>
                        <p>by ${book.author}</p>
                    </div>
                    <div class="qp-description">
                        <p>${book.description || "No description available for this volume."}</p>
                    </div>
                    <div class="qp-footer">
                        <a href="${rootPrefix}pages/book-details.html?id=${book.id}" class="button">View Full Details</a>
                        <button class="button outline qp-close-btn" onclick="window.closeQuickPeek()">Close</button>
                    </div>
                </div>
            </div>
        `;

        modal.classList.add("active");
        document.body.style.overflow = "hidden"; // Lock scroll
    } catch (error) {
        console.error("Quick Peek Error:", error);
    }
}

/**
 * Closes the Quick Peek modal.
 */
export function closeQuickPeek() {
    const modal = document.getElementById("quick-peek-modal");
    if (modal) {
        modal.classList.remove("active");
        document.body.style.overflow = ""; // Restore scroll
    }
}

// Expose to window for inline onclick handlers
window.openQuickPeek = openQuickPeek;
window.closeQuickPeek = closeQuickPeek;
