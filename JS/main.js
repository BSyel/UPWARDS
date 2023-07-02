$(".banner_slider").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  variableWidth: true,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
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

// Select the elements
const element1 = document.getElementById("element1");
const element2 = document.getElementById("element2");
const element3 = document.getElementById("element3");

// Initialize scroll variables
let currentElement = null;

// Add event listeners for mouseenter and mouseleave events
element1.addEventListener("mouseenter", () => setCurrentElement(element1));
element1.addEventListener("mouseleave", () => setCurrentElement(null));

element2.addEventListener("mouseenter", () => setCurrentElement(element2));
element2.addEventListener("mouseleave", () => setCurrentElement(null));

element3.addEventListener("mouseenter", () => setCurrentElement(element3));
element3.addEventListener("mouseleave", () => setCurrentElement(null));

// Add event listener for mousewheel event
document.addEventListener("mousewheel", handleMouseWheel);

function setCurrentElement(element) {
  currentElement = element;
}

function handleMouseWheel(event) {
  // Check if the current element is set and visible
  if (currentElement && currentElement.style.opacity !== "1") {
    // Disable page scrolling until the element is fully visible
    event.preventDefault();

    // Calculate the scroll direction based on event.deltaY
    const scrollDirection = Math.sign(event.deltaY); // -1 for scrolling up, 1 for scrolling down

    // Update the top position and opacity of the current element
    updateElement(currentElement, scrollDirection);
  }
}

function updateElement(element, scrollDirection) {
  // Get the current top position of the element
  const currentPosition = parseInt(element.style.top) || 0;

  // Calculate the new top position based on the scroll direction
  const newPosition = currentPosition + scrollDirection * 100; // Adjust the scroll speed here

  // Update the top position and opacity of the element
  element.style.top = newPosition + "px";
  element.style.opacity = 1;
}

// $(window).scroll(function () {
//   var scrollTop = $(window).scrollTop();
//   var h = scrollTop - $(".accordion-box").offset().top;
//   var h1 =
//     scrollTop - ($(".accordion-box").offset().top + $(".green").height());
//   if (
//     $(".accordion-box").offset().top < scrollTop &&
//     h < $(".green").height() * 0.9
//   ) {
//     if (h > $(".green").height() * 0.9) {
//       $(".green").css("transform", `translateY(-87.7%)`);
//     } else {
//       $(".green").css("transform", `translateY(-${h}px)`);
//     }
//     $(".orange").css("transform", `translateY(0)`);
//   } else if (
//     $(".accordion-box").offset().top + $(".green").height() + 200 < scrollTop &&
//     h < $(".green").height() + $(".orange").height() * 0.9
//   ) {
//     $(".green").css("transform", `translateY(-87.7%)`);
//     if (h1 > $(".orange").height() * 0.9) {
//       $(".orange").css("transform", `translateY(-87.7%)`);
//     } else {
//       $(".orange").css("transform", `translateY(-${h1}px)`);
//     }
//   } else if ($(".accordion-box").offset().top > scrollTop) {
//     $(".green").css("transform", `translateY(0)`);
//   }
// });
