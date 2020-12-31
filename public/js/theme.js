(function () {
  try {
    var theme = localStorage.getItem("theme");
    "dark" === theme
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  } catch (e) {
    console.error("error fetching error"), console.error(e);
  }
})();
