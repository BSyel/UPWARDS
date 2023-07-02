function toggleMenu() {
  let mobileMenu = document.getElementById("nav_item_mobile");
  if (mobileMenu.classList.contains("nav_item_mobile_opened")) {
    mobileMenu.classList.remove("nav_item_mobile_opened");
  } else {
    mobileMenu.classList.add("nav_item_mobile_opened");
  }
}
window.addEventListener("scroll", function () {
  let navbar = document.getElementById("myNavbar");

  if (window.pageYOffset > 0) {
    navbar.style.backgroundColor = "white";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});
