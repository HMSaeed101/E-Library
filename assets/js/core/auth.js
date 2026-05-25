/* ============================================================
   FORMVALIDATION.JS — Auth Form Validation
   Validates login/signup form fields.
   Exported functions are imported by main.js.

   Exports:
     - validateAuthForm(form) → returns array of error strings
     - markInvalid(field)     → highlights field in red
     - markValid(field)       → clears field highlight
     - initAuth()             → initializes form validation listeners
============================================================ */

/* ── Validate All Auth Fields ───────────────────────────── */
export function validateAuthForm(form) {
    const errors = [];

    const fields = {
        username : form.querySelector('input[name="username"]'),
        email    : form.querySelector('input[name="email"]'),
        password : form.querySelector('input[name="password"]'),
        fullName : form.querySelector('input[name="fullname"]'),
    };

    if (fields.username) {
        if (fields.username.value.trim().length < 3) {
            errors.push("Username must be at least 3 characters long.");
            markInvalid(fields.username);
        } else {
            markValid(fields.username);
        }
    }

    if (fields.email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(fields.email.value)) {
            errors.push("Please enter a valid email address.");
            markInvalid(fields.email);
        } else {
            markValid(fields.email);
        }
    }

    if (fields.password) {
        if (fields.password.value.length < 6) {
            errors.push("Password must be at least 6 characters long.");
            markInvalid(fields.password);
        } else {
            markValid(fields.password);
        }
    }

    if (fields.fullName) {
        if (fields.fullName.value.trim() === "") {
            errors.push("Full Name is required.");
            markInvalid(fields.fullName);
        } else {
            markValid(fields.fullName);
        }
    }

    return errors;
}

/* ── Field Highlight Helpers ────────────────────────────── */
export function markInvalid(field) {
    // It's better to use CSS classes than inline styles
    field.classList.add("error-field");
}
export function markValid(field) {
    field.classList.remove("error-field");
}

/**
 * Initialize Auth logic
 */
export function initAuth() {
    const form = document.querySelector(".login-container form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        const errors = validateAuthForm(form);
        if (errors.length > 0) {
            e.preventDefault();
            alert(errors.join("\n"));
        }
    });
}
