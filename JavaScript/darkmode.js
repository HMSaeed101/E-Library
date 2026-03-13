/* ============================================================
   DARKMODE.JS — Dark Mode Manager
   Exported functions are imported by main.js.

   Exports:
     - initDarkMode()   → restores saved preference on page load
     - toggleDarkMode() → switches theme and saves preference
============================================================ */


/* ── Restore Saved Preference on Load ──────────────────── */
export function initDarkMode() {
    const savedMode = localStorage.getItem("dark-mode");
    if (savedMode === "true") {
        document.body.classList.add("dark-theme");
    }
}

/* ── Toggle Theme & Save ────────────────────────────────── */
export function toggleDarkMode() {
    document.body.classList.toggle("dark-theme");
    const isDark = document.body.classList.contains("dark-theme");
    localStorage.setItem("dark-mode", isDark);
}
