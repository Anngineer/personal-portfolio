document
  .getElementById("dropdown-button")
  .addEventListener("click", function () {
    if (document.getElementById("right-nav").classList.contains("dropdown")) {
      document.getElementById("right-nav").classList.remove("dropdown");
    } else {
      document.getElementById("right-nav").classList.add("dropdown");
    }
  });

// JS for closing drop down menu when a link is clicked
const linkPortfolio = document.getElementById("link-portfolio");
const linkAbout = document.getElementById("link-about");
const linkContact = document.getElementById("link-contact");

linkPortfolio.addEventListener("click", () => {
  closeMenu();
});
linkAbout.addEventListener("click", () => {
  closeMenu();
});
linkContact.addEventListener("click", () => {
  closeMenu();
});
function closeMenu() {
  if (document.getElementById("right-nav").classList.contains("dropdown")) {
    document.getElementById("right-nav").classList.remove("dropdown");
  }
}
