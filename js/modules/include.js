/* ============================================================
   INCLUDE.JS — HTML Injection Utility
   Fetches an HTML file and injects it into a DOM element by ID.

   Exports:
     - includeHTML(id, file) → injects fetched HTML into element
============================================================ */

export async function includeHTML(id, file) {
	try {
		const response = await fetch(file);
		if (!response.ok) throw new Error(`Could not fetch ${file}`);
		const data = await response.text();
		const element = document.getElementById(id);
		if (element) {
			element.innerHTML = data;
			// Trigger a custom event when content is loaded
			element.dispatchEvent(new CustomEvent("contentLoaded", { detail: { file } }));
		}
	} catch (error) {
		console.error("HTML Injection Error:", error);
	}
}

