/* ============================================================
   BOOK.JS — Book Detail Page Logic (Enhanced)
============================================================ */

import { getIcon } from "../core/icons.js";
import { getRootPrefix } from "../core/utils.js";
import { getBookById, getBooks } from "../core/data.js";
import { renderBooksGrid } from "./books.js";

/**
 * Initialize Book Detail page logic
 */
export async function initBookDetails() {
    const params = new URLSearchParams(window.location.search);
    const bookId = params.get("id");
    if (!bookId) return;

    const bookPage = document.querySelector(".book-details-page");
    if (!bookPage) return;

    try {
        const rootPrefix = getRootPrefix();
        const book = await getBookById(bookId);

        if (book) {
            // 1. Core Metadata
            document.title = `${book.title} | E-Library`;

            const breadcrumbTitle = document.getElementById("breadcrumb-title");
            if (breadcrumbTitle) breadcrumbTitle.textContent = book.title;

            const titleEl = document.querySelector(".book-title");
            if (titleEl) titleEl.textContent = book.title;

            const authorEl = document.querySelector(".book-author");
            if (authorEl) authorEl.textContent = book.author;

            const descEl = document.querySelector(".book-description p");
            if (descEl) descEl.textContent = book.description || "No description available for this volume.";

            // 2. Visuals (Cover & Background)
            const coverEl = document.querySelector(".book-cover");
            const heroBg = document.querySelector(".hero-bg-blur");
            if (coverEl) {
                const coverPath = book.cover.startsWith("/") ? book.cover.substring(1) : book.cover;
                const fullCoverPath = rootPrefix + coverPath;
                coverEl.src = fullCoverPath;
                coverEl.alt = book.title;
                coverEl.classList.remove("skeleton");

                if (heroBg) {
                    heroBg.style.backgroundImage = `url('${fullCoverPath}')`;
                }
            }

            // 3. Meta Row (Reading Time, Pages, etc.)
            const metaRow = document.querySelector(".meta-row");
            if (metaRow) {
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
                    ${readingTimeStr ? `<span class="meta-item time">${getIcon("clock")} ${readingTimeStr}</span>` : ''}
                    ${book.language ? `<span class="meta-item">${book.language}</span>` : ''}
                    ${book.rating ? `<span class="meta-item rating">${getIcon("star")} ${book.rating}</span>` : ''}
                `;
            }

            // 4. Genres / Classifications
            const genresContainer = document.querySelector(".genres");
            if (genresContainer && book.genres && book.genres.length > 0) {
                genresContainer.innerHTML = book.genres.map(genre => `<span class="genre-tag">${genre}</span>`).join('');
            }

            // 5. Technical Specs (Sidebar)
            const detailsGrid = document.querySelector(".details-grid");
            if (detailsGrid) {
                const specs = [
                    { label: "Publisher", value: book.publisher },
                    { label: "ISBN", value: book.isbn },
                    { label: "Publication Date", value: book.publication_date },
                    { label: "File Size", value: book.file_size },
                    { label: "Format", value: book.format },
                    { label: "Category", value: book.category }
                ];

                detailsGrid.innerHTML = specs
                    .filter(s => s.value)
                    .map(s => `
                        <div class="detail-item">
                            <span class="label">${s.label}</span>
                            <span class="value">${s.value}</span>
                        </div>
                    `).join('');
            }

            // 6. Action Buttons
            const readNowBtn = document.querySelector(".btn.primary");
            const downloadBtn = document.querySelector(".btn.tertiary");
            const favBtn = document.querySelector(".btn.secondary");

            if (favBtn) favBtn.innerHTML = `${getIcon("favorite")} Add to Favorites`;

            if (book.pdf) {
                const pdfPath = book.pdf.startsWith("/") ? book.pdf.substring(1) : book.pdf;
                const fullPdfPath = rootPrefix + pdfPath;

                if (readNowBtn) {
                    readNowBtn.innerHTML = `${getIcon("read")} Read Now`;
                    readNowBtn.onclick = () => window.open(fullPdfPath, "_blank");
                }
                if (downloadBtn) {
                    downloadBtn.innerHTML = `${getIcon("download")} Download`;
                    downloadBtn.onclick = () => {
                        const link = document.createElement('a');
                        link.href = fullPdfPath;
                        link.download = `${book.title}.pdf`;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    };
                }
            } else {
                if (readNowBtn) readNowBtn.disabled = true;
                if (downloadBtn) downloadBtn.disabled = true;
            }

            // 7. Related Books
            loadRelatedBooks(book);

        } else {
            bookPage.innerHTML = `<div class="container" style="padding: 100px 0; text-align: center;"><h1>Volume not found in our archives.</h1><a href="books.html" class="button">Return to Library</a></div>`;
        }
    } catch (e) {
        console.error("Failed to load book details:", e);
    }
}


/**
 * Load and render related books based on category
 */
async function loadRelatedBooks(currentBook) {
    const relatedGrid = document.getElementById("relatedBooksGrid");
    if (!relatedGrid) return;

    const allBooks = await getBooks();

    // Filter by same category, excluding current book
    const related = allBooks
        .filter(b => b.category === currentBook.category && b.id !== currentBook.id)
        .slice(0, 4);

    if (related.length > 0) {
        renderBooksGrid(relatedGrid, related);
    } else {
        // Fallback: Just show any 4 other books
        const fallback = allBooks
            .filter(b => b.id !== currentBook.id)
            .sort(() => 0.5 - Math.random())
            .slice(0, 4);
        renderBooksGrid(relatedGrid, fallback);
    }
}
