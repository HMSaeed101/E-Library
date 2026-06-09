/**
 * PROFILE.JS — Features/Profile.js
 * Handles all UI/UX interactions for the user profile page.
 */

import { getRootPrefix } from "../core/utils.js";

export function initProfile() {
    const profileContainer = document.querySelector(".profile-container");
    if (!profileContainer) return;

    initProfileNavigation();
    initProfileTabs();
    initMobileTabSwitching();
    initActionButtons();
}

/**
 * Handles Sidebar and Mobile Navigation highlighting and switching
 */
function initProfileNavigation() {
    const mobileLinks = document.querySelectorAll(".mobile-nav a");
    const sidebarLinks = document.querySelectorAll(".profile-nav a");

    const allLinks = [...mobileLinks, ...sidebarLinks];

    allLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            // Since we are just showing UI/UX for now, we don't preventDefault if they are #links
            // but we update the active state
            const targetId = link.getAttribute("href");
            
            // Remove active from all siblings
            if (link.parentElement.classList.contains("mobile-nav") || link.parentElement.classList.contains("profile-nav")) {
                link.parentElement.querySelectorAll("a").forEach(a => a.classList.remove("active"));
                link.classList.add("active");
            }

            // Sync with the other nav (mobile <-> sidebar)
            allLinks.forEach(otherLink => {
                if (otherLink.getAttribute("href") === targetId) {
                    otherLink.classList.add("active");
                } else if (otherLink.parentElement.classList.contains(link.parentElement.classList[0])) {
                    // Do nothing, handled by sibling remove
                } else {
                    otherLink.classList.remove("active");
                }
            });
        });
    });
}

/**
 * Handles the "My Library", "Reviews", "Achievements" tabs
 */
function initProfileTabs() {
    const sectionTabs = document.querySelectorAll(".section-tabs-mobile button");
    
    sectionTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            sectionTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            // Mock content change feedback
            const grid = document.querySelector(".mobile-book-grid");
            if (grid) {
                grid.style.opacity = "0.5";
                setTimeout(() => {
                    grid.style.opacity = "1";
                }, 200);
            }
        });
    });
}

/**
 * Logic for specific section-tab buttons if they exist
 */
function initMobileTabSwitching() {
    // This can be expanded if we add more specific mobile tab logic
}

/**
 * Action button feedback (Edit Profile, Share, etc.)
 */
function initActionButtons() {
    const editBtn = document.querySelector(".profile-actions-mobile .primary");
    const shareBtn = document.querySelector(".profile-actions-mobile .ghost");
    const editAvatarBtn = document.querySelector(".edit-avatar-btn");

    if (editBtn) {
        editBtn.addEventListener("click", () => {
            alert("Edit Profile modal would open here.");
        });
    }

    if (shareBtn) {
        shareBtn.addEventListener("click", () => {
            const url = window.location.href;
            navigator.clipboard.writeText(url).then(() => {
                const originalText = shareBtn.textContent;
                shareBtn.textContent = "URL Copied!";
                setTimeout(() => {
                    shareBtn.textContent = originalText;
                }, 2000);
            });
        });
    }

    if (editAvatarBtn) {
        editAvatarBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            alert("Change avatar dialog would open here.");
        });
    }
}
