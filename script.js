const toggle = document.getElementById("themeToggle");
const html = document.querySelector("html");

toggle.addEventListener("change", () => {
  const current = html.getAttribute("data-bs-theme");
  html.setAttribute("data-bs-theme", current === "dark" ? "light" : "dark");
});
