document
  .getElementById("dropdown-button")
  .addEventListener("click", function () {
    if (document.getElementById("right-nav").classList.contains("dropdown")) {
      document.getElementById("right-nav").classList.remove("dropdown");
    } else {
      document.getElementById("right-nav").classList.add("dropdown");
    }
  });
