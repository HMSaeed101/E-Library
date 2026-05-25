/* ============================================================
   BOOK.JS — Book Detail Page Logic
============================================================ */

/**
 * Initialize Book Detail page logic
 */
export async function initBookDetails() {
    const params = new URLSearchParams(window.location.search);
    const bookId = params.get("id");
    if (!bookId) return;

    const bookContainer = document.querySelector(".book-container");
    if (!bookContainer) return;

    try {
        const res = await fetch("/assets/data/books.json");
        const books = await res.json();
        const book = books.find((b) => b.id === bookId);

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
                coverEl.src = book.cover;
                coverEl.alt = book.title;
            }

            // Update breadcrumbs
            const breadcrumbTitle = document.getElementById("breadcrumb-title");
            if (breadcrumbTitle) breadcrumbTitle.textContent = book.title;

            const breadcrumbCategory = document.getElementById("breadcrumb-category");
            if (breadcrumbCategory && book.category) {
                breadcrumbCategory.innerHTML = `<a href="/pages/category.html?type=${book.category}">${book.category.replace(/-/g, ' ').toUpperCase()}</a>`;
            }

            // Update meta-row details
            const metaRow = document.querySelector(".meta-row");
            if (metaRow) {
                metaRow.innerHTML = `
                    ${book.published_year ? `<span class="meta-item">${book.published_year}</span>` : ''}
                    ${book.published_info ? `<span class="meta-item">${book.published_info}</span>` : ''}
                    ${book.pages ? `<span class="meta-item">${book.pages}</span>` : ''}
                    ${book.language ? `<span class="meta-item">${book.language}</span>` : ''}
                    ${book.rating ? `<span class="meta-item rating">${book.rating}</span>` : ''}
                `;
            }

            // Update genres
            const genresContainer = document.querySelector(".genres");
            if (genresContainer && book.genres && book.genres.length > 0) {
                genresContainer.innerHTML = book.genres.map(genre => `<span class="genre-tag">${genre}</span>`).join('');
            }

            // Update action buttons
            const readNowBtn = document.querySelector(".btn.primary");
            if (readNowBtn && book.pdf) {
                readNowBtn.onclick = () => window.open(book.pdf, "_blank");
            }

            const downloadBtn = document.querySelector(".btn.tertiary");
            if (downloadBtn && book.pdf) {
                downloadBtn.onclick = () => {
                    const link = document.createElement('a');
                    link.href = book.pdf;
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
