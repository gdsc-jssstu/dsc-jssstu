(function () {
  try {
    var theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  } catch (err) {
    console.error("error fetching error");
    console.error(err);
  }
})();
