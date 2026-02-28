
/* =========================
       TOGGLE DARK MODE
========================== */
const savedMode = localStorage.getItem("dark-mode");
if (savedMode === "true") {document.body.classList.add("dark-theme");}
window.toggleDarkMode = function () {
    document.body.classList.toggle("dark-theme");
    const isDark = document.body.classList.contains("dark-theme");
    localStorage.setItem("dark-mode", isDark);
};

// Alert Messages
document.querySelector(".btn.secondary")
.addEventListener("click", () => 
{
    alert("Favorites Coming Soon 🚧");
}
);

document.querySelector(".btn.tertiary")
.addEventListener("click", () => 
{
    alert("Download Feature Coming Soon 🚧");
}
);