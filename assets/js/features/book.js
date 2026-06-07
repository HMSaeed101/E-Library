/* ============================================================
   BOOK.JS — Book Detail Page Logic
============================================================ */

import { getRootPrefix } from "../core/utils.js";
import { getBookById } from "../core/data.js";

/**
 * Initialize Book Detail page logic
 * @param {Array} booksData - DEPRECATED: Uses core/data.js internally
 */
export async function initBookDetails(booksData = null) {
    const params = new URLSearchParams(window.location.search);
    const bookId = params.get("id");
    if (!bookId) return;

    const bookContainer = document.querySelector(".book-container");
    if (!bookContainer) return;

    try {
        const rootPrefix = getRootPrefix();
        const book = await getBookById(bookId);

        if (book) {
            // Inject Data into UI
            document.title = `${book.title} | E-Library`;

            const titleEl = document.querySelector(".book-title");
            if (titleEl) titleEl.textContent = book.title;

            const authorEl = document.querySelector(".book-author");
            if (authorEl) authorEl.textContent = book.author;

            const descEl = document.querySelector(".book-description p");
            if (descEl) descEl.textContent = book.description;

            const coverEl = document.querySelector(".book-cover");
            if (coverEl) {
                // Ensure cover path is relative to current page
                const coverPath = book.cover.startsWith("/") ? book.cover.substring(1) : book.cover;
                coverEl.src = rootPrefix + coverPath;
                coverEl.alt = book.title;
            }

            // Update meta-row details
            const metaRow = document.querySelector(".meta-row");
            if (metaRow) {
                // Calculate Reading Time (assuming 250 words per page, 200 words per minute)
                let readingTimeStr = "";
                if (book.pages) {
                    const pageCount = parseInt(book.pages);
                    if (!isNaN(pageCount)) {
                        const totalMinutes = Math.round((pageCount * 250) / 200);
                        const hours = Math.floor(totalMinutes / 60);
                        const mins = totalMinutes % 60;
                        readingTimeStr = hours > 0 ? `${hours}h ${mins}m read` : `${mins}m read`;
                    }
                }

                metaRow.innerHTML = `
                    ${book.published_year ? `<span class="meta-item">${book.published_year}</span>` : ''}
                    ${book.pages ? `<span class="meta-item">${book.pages}</span>` : ''}
                    ${readingTimeStr ? `<span class="meta-item time">${readingTimeStr}</span>` : ''}
                    ${book.language ? `<span class="meta-item">${book.language}</span>` : ''}
                    ${book.rating ? `<span class="meta-item rating">${book.rating}</span>` : ''}
                `;
            }

            // Sanctuary Mode Logic
            const sanctuaryToggle = document.getElementById("sanctuaryToggle");
            
            const updateSanctuaryUI = (active) => {
                if (active) {
                    document.body.classList.add("sanctuary-mode");
                    if (sanctuaryToggle) {
                        sanctuaryToggle.innerHTML = `<span class="icon">🏛️</span> Leave Sanctuary`;
                    }
                    window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                    document.body.classList.remove("sanctuary-mode");
                    if (sanctuaryToggle) {
                        sanctuaryToggle.innerHTML = `<span class="icon">🌿</span> Sanctuary Mode`;
                    }
                }
            };

            // Restore sanctuary state from localStorage
            const isSanctuaryActive = localStorage.getItem("sanctuary-mode") === "true";
            if (isSanctuaryActive) updateSanctuaryUI(true);

            if (sanctuaryToggle) {
                sanctuaryToggle.addEventListener("click", () => {
                    const isActive = document.body.classList.toggle("sanctuary-mode");
                    localStorage.setItem("sanctuary-mode", isActive);
                    updateSanctuaryUI(isActive);
                });
            }

            // Update genres
            const genresContainer = document.querySelector(".genres");
            if (genresContainer && book.genres && book.genres.length > 0) {
                genresContainer.innerHTML = book.genres.map(genre => `<span class="genre-tag">${genre}</span>`).join('');
            }

            // Update action buttons
            const readNowBtn = document.querySelector(".btn.primary");
            if (readNowBtn && book.pdf) {
                const pdfPath = book.pdf.startsWith("/") ? book.pdf.substring(1) : book.pdf;
                readNowBtn.onclick = () => window.open(rootPrefix + pdfPath, "_blank");
            }

            const downloadBtn = document.querySelector(".btn.tertiary");
            if (downloadBtn && book.pdf) {
                const pdfPath = book.pdf.startsWith("/") ? book.pdf.substring(1) : book.pdf;
                downloadBtn.onclick = () => {
                    const link = document.createElement('a');
                    link.href = rootPrefix + pdfPath;
                    link.download = `${book.title}.pdf`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                };
            }

            // Update book details section
            const detailsGrid = document.querySelector(".book-details-section .details-grid");
            if (detailsGrid) {
                detailsGrid.innerHTML = `
                    ${book.publisher ? `<div class="detail-item"><span class="label">Publisher</span><span class="value">${book.publisher}</span></div>` : ''}
                    ${book.isbn ? `<div class="detail-item"><span class="label">ISBN</span><span class="value">${book.isbn}</span></div>` : ''}
                    ${book.publication_date ? `<div class="detail-item"><span class="label">Publication Date</span><span class="value">${book.publication_date}</span></div>` : ''}
                    ${book.file_size ? `<div class="detail-item"><span class="label">File Size</span><span class="value">${book.file_size}</span></div>` : ''}
                    ${book.format ? `<div class="detail-item"><span class="label">Format</span><span class="value">${book.format}</span></div>` : ''}
                `;
            }
        } else {
            bookContainer.innerHTML = "<h1 style='text-align:center; padding: 50px;'>Book not found!</h1>";
        }
    } catch (e) {
        console.error("Failed to load book details", e);
    }
}
