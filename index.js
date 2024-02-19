// JavaScript to add active class to clicked link
document.addEventListener("DOMContentLoaded", function () {
  $("nav ul li a").click(function (e) {
    e.preventDefault();
    $(".tab-content").removeClass("active");
    $($(this).attr("href")).addClass("active");
  });

  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.forEach(function (item) {
        item.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
});
