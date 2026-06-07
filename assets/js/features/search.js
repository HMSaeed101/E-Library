/* ============================================================
    SEARCH.JS — Search Dropdown and Filtering Logic
    Manages book search data, filtering, and UI updates.
============================================================ */

import { getRootPrefix } from "../core/utils.js";
import { getBooks, filterBooks } from "../core/data.js";

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

    const rootPrefix = getRootPrefix();

    results.forEach((book) => {
        const item = document.createElement("div");
        item.classList.add("item");
        item.textContent = `${book.title} by ${book.author}`;
        item.addEventListener("click", () => {
            // Correct relative path for book details
            window.location.href = `${rootPrefix}pages/book-details.html?id=${book.id}`;
        });
        dropdown.appendChild(item);
    });
    dropdown.style.display = "block";
}

export function initSearch() {
    const searchInput = document.getElementById("searchInput");
    const searchDropdown = document.getElementById("searchDropdown");

    if (!searchInput || !searchDropdown) return;

    // Redirect handler helper
    const executeSearch = (query) => {
        const trimmed = query.trim();
        if (!trimmed) return;
        const rootPrefix = getRootPrefix();
        window.location.href = `${rootPrefix}pages/books.html?search=${encodeURIComponent(trimmed)}`;
    };

    searchInput.addEventListener("input", async (e) => {
        const term = e.target.value;
        if (!term) {
            searchDropdown.style.display = "none";
            return;
        }
        const results = await filterBooks({ search: term });
        displaySearchResults(searchDropdown, results);
    });

    // Trigger search when pressing Enter key
    searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            executeSearch(searchInput.value);
        }
    });

    // Trigger search when clicking the sibling Search button
    const searchButton = searchInput.parentElement?.querySelector("button");
    if (searchButton) {
        searchButton.addEventListener("click", (e) => {
            e.preventDefault();
            executeSearch(searchInput.value);
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
        if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
            searchDropdown.style.display = "none";
        }
    });
}
