"use strict";

// responsive navBar ===============================
var icon = document.getElementById("icon");
var myNav = document.getElementById("myNav");
icon.addEventListener("click", function () {
  myNav.classList.toggle("responsive");
}); //  =================================================
// slider ===========================================

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += "active";
} //  ==================================================
// counter animation =================================


function VanillaCounter() {
  var elements = document.querySelectorAll("[data-vanilla-counter]");
  elements.forEach(function (i) {
    var data = {
      startAt: parseInt(i.getAttribute("data-start-at")),
      endAt: parseInt(i.getAttribute("data-end-at")),
      delay: parseInt(i.getAttribute("data-delay")) || 0,
      format: "{}",
      time: parseInt(i.getAttribute("data-time")) || 1000
    };

    if (i.getAttribute("data-format")) {
      data.format = i.getAttribute("data-format");
    } else if (i.innerHTML != "") {
      data.format = i.innerHTML;
    }

    console.log(data.format);

    if (data.startAt == null) {
      throw new Error("data-start-at attribute is required");
    }

    if (data.endAt == null) {
      throw new Error("data-end-at attribute is required");
    }

    var counter = data.startAt;
    i.innerHTML = data.format.replace("{}", counter);
    var intervalTime = Math.ceil(data.time / (data.endAt - data.startAt));
    setTimeout(function () {
      var interval = setInterval(intervalHandler, intervalTime);

      function intervalHandler() {
        counter += (data.endAt - data.startAt) / Math.abs(data.endAt - data.startAt) * 1;
        i.innerHTML = data.format.replace("{}", counter);

        if (counter == data.endAt) {
          clearInterval(interval);
        }
      }
    }, data.delay);
  });
}

window.VanillaCounter = VanillaCounter; //  ===================================================
// scroll top animation ===============================

function scrollTop() {
  var scrollTop = document.getElementById("scroll-top");

  if (this.scrollY >= 560) {
    scrollTop.classList.add("show-scroll");
  } else {
    scrollTop.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", scrollTop); //  ===================================================
// scroll reveal animation ============================
//  ===================================================