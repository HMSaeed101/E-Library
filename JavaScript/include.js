/* ============================================================
   INCLUDE.JS — HTML Injection Utility
   Fetches an HTML file and injects it into a DOM element by ID.

   Exports:
     - includeHTML(id, file) → injects fetched HTML into element
============================================================ */
//!IncludeHTML Function not working right
function includeHTML(id, file) {
	fetch(file)
		.then((response) => response.text())
		.then((data) => {
			document.getElementById(id).innerHTML = data;
		});
}
//!Testing includeHTML function
// window.includeHTML    = includeHTML;
// includeHTML("nav-bar", "Extras/nav-bar.html");
// includeHTML("footer",  "Extras/footer.html");
