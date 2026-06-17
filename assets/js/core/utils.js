/* ============================================================
   UTILS.JS — Shared Utility Functions
============================================================ */

/**
 * Calculates the depth of the current page relative to the project root.
 * Returns a string like "../" or "../../" or ""
 */
export function getRootPrefix() {
    const path = window.location.pathname;
    
    // Check if we are on a "sub-page"
    // Case 1: Root directory (index.html or /)
    if (path.endsWith("/") || path.endsWith("/index.html")) return "";
    
    // Case 2: In /pages/auth/
    if (path.includes("/pages/auth/")) return "../../";
    
    // Case 3: In /pages/
    if (path.includes("/pages/")) return "../";
    
    // Default fallback (assume root)
    return "";
}

/**
 * Standardized Fetch wrapper with error handling
 * @param {string} url 
 */
export async function safeFetch(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (e) {
        console.error(`Fetch failed for: ${url}`, e);
        return null;
    }
}

/**
 * Debounce utility
 * @param {Function} func 
 * @param {number} wait 
 */
export function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
