/* ============================================================
   SEARCH.JS — Search Dropdown and Filtering Logic
   Manages book search data, filtering, and UI updates.
============================================================ */

let booksData = [];

/**
 * Load books data from central JSON
 */
export async function loadSearchData() {
    try {
        const res = await fetch("/books/books.json");
        if (!res.ok) throw new Error("Failed to load books");
        booksData = await res.json();
        return booksData;
    } catch (e) {
        console.error("Search Data Load Error:", e);
        return [];
    }
}

/**
 * Filter books based on search term
 * @param {string} term 
 */
export function performSearch(term) {
    const searchTerm = term.toLowerCase().trim();
    if (!searchTerm) return [];
    return booksData.filter(
        (book) =>
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm)
    );
}

/**
 * Display search results in the dropdown
 * @param {HTMLElement} dropdown 
 * @param {Array} results 
 */
export function displaySearchResults(dropdown, results) {
    if (!dropdown) return;
    
    dropdown.innerHTML = ""; // Clear previous results
    
    if (results.length === 0) {
        const noResultsItem = document.createElement("div");
        noResultsItem.classList.add("item", "no-results");
        noResultsItem.textContent = "No results found.";
        dropdown.appendChild(noResultsItem);
        dropdown.style.display = "block";
        return;
    }

    results.forEach((book) => {
        const item = document.createElement("div");
        item.classList.add("item");
        item.textContent = `${book.title} by ${book.author}`;
        item.addEventListener("click", () => {
            const isSubfolder = window.location.pathname.includes("/books/") || 
                                window.location.pathname.includes("/categories/");
            const path = isSubfolder ? "book-details.html" : "books/book-details.html";
            window.location.href = `${path}?id=${book.id}`;
        });
        dropdown.appendChild(item);
    });
    dropdown.style.display = "block";
}
