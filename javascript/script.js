const navtoggle = document.getElementById("navtoggle");
const navlinks = document.getElementById("navlinks");
const progress = document.getElementById("progress");
const themeBtn = document.getElementById("theme-btn");
const root = document.documentElement;

const savedTheme = localStorage.getItem("theme");
const systemPrefersLight = window.matchMedia(
  "(prefers-color-scheme: light)",
).matches;

/*
 * DOCU: This part function is to open the hamburger when clicked (tablet and smartphone only).
 *
 * Last Updated: 2026-08-11
 * Author: Jorge
 * Last Updated By: Jorge
 */
if (savedTheme === "light" || (!savedTheme && systemPrefersLight)) {
  root.setAttribute("data-theme", "light");
} else {
  root.setAttribute("data-theme", "dark");
}

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const isLight = root.getAttribute("data-theme") === "light";
    const nextTheme = isLight ? "dark" : "light";

    root.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  });
}

/*
 * DOCU: This part function is to open the hamburger when clicked (tablet and smartphone only).
 *
 * Last Updated: 2026-08-11
 * Author: Jorge
 * Last Updated By: Jorge
 */
navtoggle.addEventListener("click", () => {
  const isOpen = navlinks.classList.toggle("open");
  navtoggle.classList.toggle("open", isOpen);
  navtoggle.setAttribute("aria-expanded", isOpen);
});

/*
 * DOCU: This function is where if you click a nav button inside hamburger it will automaitcally close(tablet and smartphone user only).
 *
 * Last Updated: 2026-08-11
 * Author: Jorge
 * Last Updated By: Jorge
 */
navlinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navlinks.classList.remove("open");
    navtoggle.classList.remove("open");
    navtoggle.setAttribute("aria-expanded", false);
  });
});

/*
 * DOCU: This function controls the scrolling progress line on the navigation head part.
 *
 * Last Updated: 2026-08-11
 * Author: Jorge
 * Last Updated By: Jorge
 */
function updateProgress() {
  const h = document.documentElement;
  const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  progress.style.width = scrolled + "%";
}
document.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

/*
 * DOCU: This function automates the percentage line of technologies
 *        on projects section
 *
 * Last Updated: 2026-08-11
 * Author: Jorge
 * Last Updated By: Jorge
 */
document.querySelectorAll(".tech-item").forEach((item) => {
  const percent = item.querySelector(".tech-percent").textContent.trim();
  item.querySelector(".bar-fill").style.width = percent;
});
