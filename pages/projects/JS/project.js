var currentPage = 1;
var cardsPerPage = 4;
var cards = document.getElementsByClassName("card");
var totalPages = Math.ceil(cards.length / cardsPerPage);

function showCards(page) {
  var startIndex = (page - 1) * cardsPerPage;
  var endIndex = startIndex + cardsPerPage;

  for (var i = 0; i < cards.length; i++) {
    cards[i].classList.remove("active-card");

    if (i >= startIndex && i < endIndex) {
      cards[i].classList.add("active-card");
    }
  }
}

function renderPageNumbers() {
  var pageNumbers = "";

  for (var i = 1; i <= totalPages; i++) {
    pageNumbers +=
      '<button onclick="goToPage(' +
      i +
      ')" class="' +
      (i === currentPage ? "active" : "") +
      '">' +
      i +
      "</button>";
  }

  document.getElementById("page-numbers").innerHTML = pageNumbers;
}

function previousPage() {
  if (currentPage > 1) {
    currentPage--;
    showCards(currentPage);
    renderPageNumbers();
  }
}

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    showCards(currentPage);
    renderPageNumbers();
  }
}

function goToPage(page) {
  currentPage = page;
  showCards(currentPage);
  renderPageNumbers();
}

showCards(currentPage);

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
