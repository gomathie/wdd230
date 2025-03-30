// Dark mode toggle functionality
const toggle = document.getElementById("dark-mode");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Check for saved user preference
if (localStorage.getItem("darkMode") === "enabled" ||
    (localStorage.getItem("darkMode") === null && prefersDarkScheme.matches)) {
    document.body.classList.add("dark-mode");
    toggle.textContent = "🔆 Light Mode";
} else {
    toggle.textContent = "🌙 Dark Mode";
}

// Toggle dark mode
toggle.addEventListener("click", () => {
    if (document.body.classList.toggle("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        toggle.textContent = "🔆 Light Mode";
    } else {
        localStorage.setItem("darkMode", "disabled");
        toggle.textContent = "🌙 Dark Mode";
    }
});