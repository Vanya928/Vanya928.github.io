$(document).ready(function() {
  let header = $("#header");
  let intro = $("#intro");
  let introH;
  let scrollPos = $(window).scrollTop();

  $(window).on("scroll load resize", function() {
    introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();
    if (scrollPos > introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  });
  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let elementId = $(this).data("scroll");
    let elementOffset = $(elementId).offset().top;

    $("html, body").animate(
      {
        scrollTop: elementOffset - 80
      },
      500
    );
  });

  let modal = document.getElementById("myModal");
  let btn = document.getElementById("myBtn");
  let span = document.getElementsByClassName("close")[0];

  btn.onclick = function(event) {
    event.preventDefault();
    modal.style.display = "block";
  };

  span.onclick = function() {
    modal.style.display = "none";
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  $(".menu-media").on("click", function() {
    $(".menu-media__popap").toggleClass("active");
  });

  $(".friends__items").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:
      '<button type="button" class="slick-btn_prev slick-prev"><img class="img_left" src="img/long-left-arrow-png.png" alt="" /></button>',
    nextArrow:
      '<button type="button" class="slick-btn_next slick-next"><img class="img_right" src="img/long-right-arrow-png.png" alt="" /></button>',
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          prevArrow: false,
          nextArrow: false
        }
      }
    ]
  });
});
