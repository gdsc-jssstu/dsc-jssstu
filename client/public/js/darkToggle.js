$(document).ready(function () {
  checkDark();

  $("#dark-light-toggle").click(function () {
    toggleDark();
    checkDark();
  });
});

var toggleDark = function () {
  if (!$("body").hasClass("dark")) {
    localStorage.setItem("dark", true);
  } else {
    localStorage.setItem("dark", false);
  }
};

var checkDark = function () {
  var dark = localStorage.getItem("dark");

  if (dark === "true") {
    $("body").addClass("dark");
    // $('body').addClass('dark');
    $(".logo-light").hide();
    $(".logo").show();
    $(".logo-nav-light").hide();
    $(".logo-nav").show();
    $(".dark-light-toggle").children().text("I want light mode");
  } else {
    $("body").removeClass("dark");
    $(".logo-light").show();
    $(".logo").hide();
    $(".logo-nav-light").show();
    $(".logo-nav").hide();
    $(".dark-light-toggle").children().text("I want dark mode");
  }
};
