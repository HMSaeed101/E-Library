/* ============================================================
   DATA.JS — Centralized Data Management
   Handles fetching and caching of books data to avoid 
   redundant network requests.
============================================================ */

import { getRootPrefix, safeFetch } from "./utils.js";

let cachedBooks = null;
let booksMap = null; // New ID-based lookup map

/**
 * Loads books data from books.json (with caching)
 */
export async function getBooks() {
    if (cachedBooks) return cachedBooks;

    const rootPrefix = getRootPrefix();
    const dataPath = `${rootPrefix}assets/data/books.json`;
    
    cachedBooks = await safeFetch(dataPath);
    
    if (cachedBooks) {
        // Build the lookup map once for O(1) retrieval
        booksMap = new Map();
        cachedBooks.forEach(book => booksMap.set(book.id, book));
    }

    return cachedBooks || [];
}

/**
 * Finds a specific book by ID
 * @param {string} id 
 */
export async function getBookById(id) {
    if (!booksMap) {
        await getBooks();
    }
    return booksMap ? booksMap.get(id) : null;
}

/**
 * Filter books by criteria
 * @param {Object} criteria 
 */
export async function filterBooks(criteria = {}) {
    const books = await getBooks();
    let filtered = [...books];

    if (criteria.category && criteria.category !== "all") {
        filtered = filtered.filter(b => b.category === criteria.category);
    }

    if (criteria.search) {
        const query = criteria.search.toLowerCase().trim();
        filtered = filtered.filter(b => 
            b.title.toLowerCase().includes(query) || 
            b.author.toLowerCase().includes(query) ||
            (b.genres && b.genres.some(g => g.toLowerCase().includes(query)))
        );
    }

    return filtered;
}
