/* ============================================================
   UI-EFFECTS.JS — Shared UI Interactions
   Handles scroll effects, dynamic navigation, drawer logic, etc.
============================================================ */

/**
 * Header Scroll Effect: Transitions navbar from transparent to solid
 * Also handles initial state based on page type.
 */
export function initHeaderScroll(selector = ".header") {
    const header = document.querySelector(selector);
    if (!header) return;

    const handleScroll = () => {
        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check immediately on load
}

/**
 * Mobile Menu Toggle: Orchestrates the drawer and overlay
 */
export function toggleMenu() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navContainer = document.querySelector(".nav-container");
    const body = document.body;
    
    if (menuToggle && navContainer) {
        const isActive = menuToggle.classList.toggle("active");
        navContainer.classList.toggle("active");
        
        // Prevent scrolling when menu is open
        body.style.overflow = isActive ? "hidden" : "";
    }
}

/**
 * Escape Strategy: Closes mobile menu on link click or click outside
 */
export function initNavInteractions() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navContainer = document.querySelector(".nav-container");
    const navLinks = document.querySelectorAll(".nav-links a");

    // 1. Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navContainer.classList.contains("active")) {
                toggleMenu();
            }
        });
    });

    // 2. Click outside to close
    document.addEventListener("click", (e) => {
        if (navContainer?.classList.contains("active") && 
            !navContainer.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            toggleMenu();
        }
    });

    // 3. ESC key to close
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && navContainer?.classList.contains("active")) {
            toggleMenu();
        }
    });
}

/**
 * Highlights the active link in the navigation bar based on the current URL
 */
export function highlightActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (!href) return;
        
        // Normalize paths for comparison
        const linkPath = href.split("?")[0].replace(/^\.\.\//g, "").replace(/^\//, "");
        const activePath = currentPath.replace(/^\//, "") || "index.html";

        if (linkPath === activePath || (activePath === "" && linkPath === "index.html")) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

/**
 * Statistics Counter (Scalability Scope)
 */
export function updateStats(books) {
    const totalBooksEl = document.querySelector(".stat-total-books p");
    if (totalBooksEl && books) { totalBooksEl.textContent = books.length; }
}

/**
 * Tab Switching Utility
 */
export function initTabs() {
    const tabContainers = document.querySelectorAll(".tabs");
    
    tabContainers.forEach(container => {
        const tabs = container.querySelectorAll(".tab");
        
        tabs.forEach(tab => {
            tab.addEventListener("click", () => {
                tabs.forEach(t => t.classList.remove("active"));
                tab.classList.add("active");
            });
        });
    });
}
