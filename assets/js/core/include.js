/* ============================================================
   INCLUDE.JS — Declarative HTML Injection Utility
   Automatically finds elements with [data-include] and injects 
   the specified HTML file.
============================================================ */

import { getRootPrefix } from "./utils.js";

/**
 * Adjusts relative paths in the injected HTML to be correct for the host page.
 * @param {string} html - The raw HTML content
 */
function adjustPaths(html) {
    const rootPrefix = getRootPrefix();
    
    // Regex to find src="..." and href="..."
    return html.replace(/(src|href)="([^"\/][^"]*)"/g, (match, attr, path) => {
        if (path.startsWith("http") || 
            path.startsWith("#") || 
            path.startsWith("mailto:") || 
            path.startsWith("tel:") ||
            path.startsWith(".")
        ) {
            return match;
        }
        return `${attr}="${rootPrefix}${path}"`;
    });
}

/**
 * Fetches and injects HTML into a single element.
 * @param {HTMLElement} element - The target element
 */
async function injectElement(element) {
    const file = element.getAttribute("data-include");
    if (!file || element.getAttribute("data-processing")) return;

    element.setAttribute("data-processing", "true");

    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error(`Could not fetch ${file}`);
        let html = await response.text();
        
        // Adjust paths based on host page depth
        html = adjustPaths(html);
        
        element.innerHTML = html;
        element.removeAttribute("data-include"); 
        element.removeAttribute("data-processing"); 

        element.dispatchEvent(new CustomEvent("contentLoaded", { 
            detail: { file: file },
            bubbles: true 
        }));

        // Recursively check for nested includes
        await initIncludes(element);
    } catch (error) {
        console.error("HTML Injection Error:", error);
        element.innerHTML = `<p style="color:red; padding: 20px; text-align: center;">Error loading component: ${file}. Please ensure you are running this project on a local server (e.g., Live Server).</p>`;
        element.removeAttribute("data-processing");
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
