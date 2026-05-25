/* ============================================================
   INCLUDE.JS — Declarative HTML Injection Utility
   Automatically finds elements with [data-include] and injects 
   the specified HTML file using root-relative paths.
============================================================ */

/**
 * Fetches and injects HTML into a single element.
 * @param {HTMLElement} element - The target element
 */
async function injectElement(element) {
    const file = element.getAttribute("data-include");
    if (!file) return;

    // Use root-relative path for the component itself
    // We ensure the path starts with / for absolute reference
    const adjustedFile = file.startsWith("/") ? file : `/${file}`;

    try {
        const response = await fetch(adjustedFile);
        if (!response.ok) throw new Error(`Could not fetch ${adjustedFile}`);
        const html = await response.text();
        
        element.innerHTML = html;
        element.removeAttribute("data-include"); 
        
        // No path fixing needed as we now use root-relative paths in components!

        element.dispatchEvent(new CustomEvent("contentLoaded", { 
            detail: { file: adjustedFile },
            bubbles: true 
        }));

        // Recursively check for nested includes
        await initIncludes(element);
    } catch (error) {
        console.error("HTML Injection Error:", error);
        element.innerHTML = `<p style="color:red">Error loading component: ${file}</p>`;
    }
}

/**
 * Scans the container for [data-include] elements and initializes them.
 * @param {HTMLElement|Document} container - Where to search
 */
export async function initIncludes(container = document) {
    const elements = container.querySelectorAll("[data-include]");
    const tasks = Array.from(elements).map(el => injectElement(el));
    await Promise.all(tasks);
}
