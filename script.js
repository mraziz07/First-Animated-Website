var page1Content = document.querySelector(".page-content");
var cursor = document.querySelector("#cursor");

page1Content.addEventListener("mousemove", function(e) {
    cursor.style.left = e.x + "px";
    cursor.style.top = e.y + "px";
    cursorShow();
});

function cursorShow() {
    page1Content.addEventListener("mouseenter", function() {
        cursor.style.scale = "1";
        cursor.style.opacity = "1";
    });
    
    page1Content.addEventListener("mouseleave", function() {
        cursor.style.scale = "0";
        cursor.style.opacity = "0";
    });
}
// ----------------------------------------------------------------

var page3Content = document.querySelector(".page3 .video");
var cursor2 = document.querySelector("#cursor2");

page3Content.addEventListener("mousemove", function(e) {
    cursor2.style.left = e.x + "px";
    cursor2.style.top = e.y + "px";
    cursorShow2();
});

function cursorShow2() {
    page3Content.addEventListener("mouseenter", function() {
        cursor2.style.scale = "1";
        cursor2.style.opacity = "1";
    });
    
    page3Content.addEventListener("mouseleave", function() {
        cursor2.style.scale = "0";
        cursor2.style.opacity = "0";
    });
}

// =========== Swiper ===========
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    centeredSlides: false,
    spaceBetween: 28,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      }
  });

//   ======================= LOader =====================
var loader = document.querySelector(".loader");

window.addEventListener("load",function() {
    setTimeout(removeLoader, 2200);
});

function removeLoader() {
    loader.classList.add("loader-hidden");
    setTimeout(() => {
        loader.style.display = "none";
    },500);
};