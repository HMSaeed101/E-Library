/* ============================================================
   BOOK.JS — Book Detail Page Entry Point
   Imports main.js (runs all shared logic) then adds
   interactions specific to the book detail page only.
============================================================ */

/* ── 1. Import Shared Logic ─────────────────────────────── */
import "./main.js";

document.addEventListener("DOMContentLoaded", async () => {
	// 1. Get Book ID from URL (?id=alchemist)
	const params = new URLSearchParams(window.location.search);
	const bookId = params.get("id");
	if (!bookId) return;

	// 2. Fetch Data and Find Book
	const res = await fetch("../books/books.json");
	const books = await res.json();
	const book = books.find((b) => b.id === bookId);

	if (book) {
		// 3. Inject Data into UI
		document.title = `${book.title} | Book`;
		document.querySelector(".book-title").textContent = book.title;
		document.querySelector(".book-author").textContent = book.author;
		document.querySelector(".book-description p").textContent = book.description;
		document.querySelector(".book-cover").src = `../${book.cover}`;
		document.querySelector(".book-cover").alt = book.title;

		// Update breadcrumbs
		const breadcrumbTitle = document.getElementById("breadcrumb-title");
		if (breadcrumbTitle) breadcrumbTitle.textContent = book.title;

		const breadcrumbCategory = document.getElementById("breadcrumb-category");
		if (breadcrumbCategory && book.category) {
			breadcrumbCategory.innerHTML = `<a href="../categories/category.html?type=${book.category}">${book.category.replace(/-/g, ' ').toUpperCase()}</a>`;
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
		} else if (genresContainer) {
			genresContainer.style.display = 'none';
		}

		// Update action buttons
		const readNowBtn = document.querySelector(".btn.primary");
		if (readNowBtn && book.pdf) {
			readNowBtn.onclick = () => window.open(`../${book.pdf}`, "_blank");
		} else if (readNowBtn) {
			readNowBtn.style.display = 'none';
		}

		const favoriteBtn = document.querySelector(".btn.secondary");
		if (favoriteBtn) {
			let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
			const isFavorite = favorites.includes(book.id);
			favoriteBtn.textContent = isFavorite ? "Remove from Favorites" : "Add to Favorites";
			if (isFavorite) favoriteBtn.classList.add("active");

			favoriteBtn.onclick = () => {
				favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
				if (favorites.includes(book.id)) {
					favorites = favorites.filter(id => id !== book.id);
					favoriteBtn.textContent = "Add to Favorites";
					favoriteBtn.classList.remove("active");
				} else {
					favorites.push(book.id);
					favoriteBtn.textContent = "Remove from Favorites";
					favoriteBtn.classList.add("active");
				}
				localStorage.setItem("favorites", JSON.stringify(favorites));
			};
		}

		const downloadBtn = document.querySelector(".btn.tertiary");
		if (downloadBtn && book.pdf) {
			downloadBtn.onclick = () => {
				const link = document.createElement('a');
				link.href = `../${book.pdf}`;
				link.download = `${book.title}.pdf`;
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			};
			downloadBtn.textContent = "Download PDF";
		} else if (downloadBtn) {
			downloadBtn.style.display = 'none';
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
		document.title = "Book Not Found | E-Library";
		document.querySelector(".book-container").innerHTML = "<h1 style='text-align:center; padding: 50px;'>Book not found!</h1>";
		const breadcrumbTitle = document.getElementById("breadcrumb-title");
		if (breadcrumbTitle) breadcrumbTitle.textContent = "Not Found";
	}
});
