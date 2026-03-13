/* ============================================================
   MAIN.JS — Entry Point for All Pages
   Imports all shared modules and initializes them.
   This is the ONLY file you link in your HTML on every page.

   Imports:
     - darkmode.js        → dark theme logic
     - include.js         → HTML injection utility
     - formvalidation.js  → login/signup validation

   Sections:
     1. Imports
     2. Dark Mode Init
     3. Header Scroll Effect
     4. Search Dropdown
     5. Search Button Alert
     6. Form Validation (Login / Signup)
     7. Contact Form Submission
     8. Browser Navigation Helpers (exposed to window for onclick)
============================================================ */

/* ── 1. Imports ─────────────────────────────────────────── */
import { initDarkMode, toggleDarkMode } from "./darkmode.js";
import { validateAuthForm } from "./form-val.js";

document.addEventListener("DOMContentLoaded", () => {
	/* ── 2. Dark Mode Init ──────────────────────────────── */
	initDarkMode();
	toggleDarkMode();

	/* ── 3. Header Scroll Effect ────────────────────────── */
	const header = document.querySelector(".header");
	if (header) {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 20) {
				header.classList.add("scrolled");
			} else {
				header.classList.remove("scrolled");
			}
		});
	}

	/* ── 4. Search Dropdown ─────────────────────────────── */
	const searchInput = document.querySelector("#searchInput");
	const searchDropdown = document.querySelector("#searchDropdown");
	if (searchInput && searchDropdown) {
		searchInput.addEventListener("focus", () => {
			searchDropdown.style.display = "block";
		});
		searchInput.addEventListener("blur", () => {
			setTimeout(() => {
				searchDropdown.style.display = "none";
			}, 200);
		});
	}

	/* ── 5. Search Button Alert ─────────────────────────── */
	const searchButton = document.querySelector(".button");
	if (searchButton) {
		searchButton.addEventListener("click", () => {
			alert("Search Feature Coming Soon 🚧 ...");
		});
	}

	/* ── 6. Form Validation (Login / Signup) ────────────── */
	const authForm = document.querySelector(".login-container form");
	if (authForm) {
		authForm.addEventListener("submit", (e) => {
			const errors = validateAuthForm(authForm);
			if (errors.length > 0) {
				e.preventDefault();
				alert(errors.join("\n"));
			}
		});
	}

	/* ── 7. Contact Form Submission ─────────────────────── */
	const contactForm = document.querySelector(".contact-page-form");
	if (contactForm) {
		contactForm.addEventListener("submit", function (e) {
			e.preventDefault();
			alert("Your message was sent successfully!");
			this.submit();
		});
	}

	/* ── 8. Expose to window (needed for HTML onclick=) ─── */
	// Because type="module" scopes everything, functions used in onclick="..." attributes must be attached to window.
	window.toggleDarkMode = toggleDarkMode;
	window.goBack = () => history.back();
	window.goForward = () => history.forward();
});
