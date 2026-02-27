document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       FORM VALIDATION
    ========================== */
    const authForm = document.querySelector(".login-container form");

    if (authForm) {
        authForm.addEventListener("submit", (e) => {

            let errors = [];

            const email = authForm.querySelector('input[name="email"]');
            const password = authForm.querySelector('input[name="password"]');
            const username = authForm.querySelector('input[name="username"]');
            const fullName = authForm.querySelector('input[name="fullname"]');

            // Username validation
            if (username) {
                if (username.value.trim().length < 3) {
                    errors.push("Username must be at least 3 characters long.");
                    username.style.border = "2px solid #ff4d4d";
                } else {
                    username.style.border = "";
                }
            }

            // Email validation
            if (email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!emailRegex.test(email.value)) {
                    errors.push("Please enter a valid email address.");
                    email.style.border = "2px solid #ff4d4d";
                } else {
                    email.style.border = "";
                }
            }

            // Password validation
            if (password) {
                if (password.value.length < 6) {
                    errors.push("Password must be at least 6 characters long.");
                    password.style.border = "2px solid #ff4d4d";
                } else {
                    password.style.border = "";
                }
            }

            // Full name validation
            if (fullName) {
                if (fullName.value.trim() === "") {
                    errors.push("Full Name is required.");
                    fullName.style.border = "2px solid #ff4d4d";
                } else {
                    fullName.style.border = "";
                }
            }

            if (errors.length > 0) {
                e.preventDefault();
                alert(errors.join("\n"));
            }
        });
    }


    /* =========================
       HEADER SCROLL EFFECT
    ========================== */
    const header = document.querySelector(".header");

    if (header) 
    {
    // Always reset position on page load
    header.style.top = "0";

    let lastScrollY = window.scrollY;

    // Optional: disable automatic scroll restoration
    if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
    }

    window.addEventListener("scroll", () => {

        const currentScrollY = window.scrollY;

        if (currentScrollY > 20) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            header.style.top = "-100px";
        } else {
            header.style.top = "0";
        }

        lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
    });
    }
    

    /* =========================
       CONTACT FORM POPUP
    ========================== */
    const contactForm = document.querySelector(".contact-page-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Your message was sent successfully!");
            this.submit();
        });
    }


    /* =========================
       DARK MODE
    ========================== */
    const savedMode = localStorage.getItem("dark-mode");

    if (savedMode === "true") {
        document.body.classList.add("dark-theme");
    }

    window.toggleDarkMode = function () {
        document.body.classList.toggle("dark-theme");
        const isDark = document.body.classList.contains("dark-theme");
        localStorage.setItem("dark-mode", isDark);
    };


    /* =========================
       ACTIVE PAGE HIGHLIGHT
    ========================== */
    let currentFile = window.location.pathname.split("/").pop() || "index.html";
    currentFile = currentFile.split("?")[0];

    if (currentFile === "" || currentFile === "/") {
        currentFile = "index.html";
    }

    const navLinks = document.querySelectorAll(".navigation-bar a");

    navLinks.forEach(link => {
        if (link.dataset.page === currentFile) {
            link.classList.add("active");
        }
    });


    /* =========================
       SEARCH DROPDOWN
    ========================== */
    const input = document.getElementById("searchInput");
    const dropdown = document.getElementById("searchDropdown");

    if (input && dropdown) {
        input.addEventListener("focus", () => {
            dropdown.style.display = "block";
        });

        input.addEventListener("blur", () => {
            setTimeout(() => {
                dropdown.style.display = "none";
            }, 200);
        });
    }


    /* =========================
       SEARCH BUTTON ALERT
    ========================== */
    const searchButton = document.querySelector(".button");

    if (searchButton) {
        searchButton.addEventListener("click", () => {
            alert("Search Feature Coming Soon 🚧 ...");
        });
    }

});


/* =========================
   BROWSER NAVIGATION
========================== */
function goBack() {
    history.back();
}

function goForward() {
    history.forward();
}

