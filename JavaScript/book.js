/* ============================================================
   BOOK.JS — Book Detail Page Entry Point
   Imports main.js (runs all shared logic) then adds
   interactions specific to the book detail page only.

   Imports:
     - main.js → all shared page logic

   Sections:
     1. Import Shared Logic
     2. Coming Soon Button Alerts
============================================================ */

/* ── 1. Import Shared Logic ─────────────────────────────── */
import "./main.js";

/* ── 2. Coming Soon Button Alerts ───────────────────────── */
document.addEventListener("DOMContentLoaded", () => {

    const comingSoonButtons = [
        { selector: ".btn.secondary", message: "Favorites Coming Soon 🚧"       },
        { selector: ".btn.tertiary",  message: "Download Feature Coming Soon 🚧" },
    ];

    comingSoonButtons.forEach(({ selector, message }) => {
        const btn = document.querySelector(selector);
        if (btn) {
            btn.addEventListener("click", () => alert(message));
        }
    });

});