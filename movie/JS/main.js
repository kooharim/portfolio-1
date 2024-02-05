
    // under Bar js 시작
    let horizontalBar = document.getElementById("horizontal-underline");
    let horizontalMenus = document.querySelectorAll("nav:first-child a");

    function horizontalIndicator(e) {
      horizontalBar.style.left = e.offsetLeft + "px";
      horizontalBar.style.width = e.offsetWidth + "px";
      horizontalBar.style.top = e.offsetTop + e.offsetHeight + "px";
    }

    horizontalMenus.forEach((menu) =>
      menu.addEventListener("click", (e) =>
        horizontalIndicator(e.currentTarget)
      )
    );

    // 캐러셀 1 js
    const swiper1 = document.querySelector(".carousel_wrapper");
    const prevButtons1 = document.querySelectorAll(".carousel_prev");
    const nextButtons1 = document.querySelectorAll(".carousel_next");
    const bullets1 = document.querySelectorAll(".carousel_circle");

    let currentSlide1 = 0;

    function showSlide1(slideIndex1) {
      swiper1.style.transform = `translateX(-${slideIndex1 * 300}px)`;
      currentSlide1 = slideIndex1;

      bullets1.forEach((bullet1, index1) => {
        if (index1 === currentSlide1) {
          bullet1.classList.add("active1");
        } else {
          bullet1.classList.remove("active1");
        }
      });
    }

    prevButtons1.forEach((prevButton1) => {
      prevButton1.addEventListener("click", () => {
        if (currentSlide1 > 0) {
          showSlide1(currentSlide1 - 1);
        }
      });
    });

    nextButtons1.forEach((nextButton1) => {
      nextButton1.addEventListener("click", () => {
        if (currentSlide1 < 9) {
          showSlide1(currentSlide1 + 1);
        }
      });
    });

    bullets1.forEach((bullet1, index1) => {
      bullet1.addEventListener("click", () => {
        showSlide1(index1);
      });
    });
    showSlide1(0);

    //  캐러셀 2 js
    const swiper = document.querySelector(".carousel2_wrapper");
    const prevButtons = document.querySelectorAll(".carousel2_prev");
    const nextButtons = document.querySelectorAll(".carousel2_next");
    const bullets = document.querySelectorAll(".carousel2_circle");

    let currentSlide = 0;

    function showSlide(slideIndex) {
      swiper.style.transform = `translateX(-${slideIndex * 300}px)`;
      currentSlide = slideIndex;

      bullets.forEach((bullet, index) => {
        if (index === currentSlide) {
          bullet.classList.add("active");
        } else {
          bullet.classList.remove("active");
        }
      });
    }

    prevButtons.forEach((prevButton) => {
      prevButton.addEventListener("click", () => {
        if (currentSlide > 0) {
          showSlide(currentSlide - 1);
        }
      });
    });

    nextButtons.forEach((nextButton) => {
      nextButton.addEventListener("click", () => {
        if (currentSlide < 9) {
          showSlide(currentSlide + 1);
        }
      });
    });

    bullets.forEach((bullet, index) => {
      bullet.addEventListener("click", () => {
        showSlide(index);
      });
    });

    showSlide(0);

    // 캐러셀 3 js
    const swiper3 = document.querySelector(".carousel3_wrapper");
    const prevButtons3 = document.querySelectorAll(".carousel3_prev");
    const nextButtons3 = document.querySelectorAll(".carousel3_next");
    const bullets3 = document.querySelectorAll(".carousel3_circle");

    let currentSlide3 = 0;

    function showSlide3(slideIndex3) {
      swiper3.style.transform = `translateX(-${slideIndex3 * 300}px)`;
      currentSlide3 = slideIndex3;

      bullets3.forEach((bullet3, index3) => {
        if (index3 === currentSlide3) {
          bullet3.classList.add("active3");
        } else {
          bullet3.classList.remove("active3");
        }
      });
    }

    prevButtons3.forEach((prevButton3) => {
      prevButton3.addEventListener("click", () => {
        if (currentSlide3 > 0) {
          showSlide3(currentSlide3 - 1);
        }
      });
    });

    nextButtons3.forEach((nextButton3) => {
      nextButton3.addEventListener("click", () => {
        if (currentSlide3 < 8) {
          showSlide3(currentSlide3 + 1);
        }
      });
    });

    bullets3.forEach((bullet3, index3) => {
      bullet3.addEventListener("click", () => {
        showSlide3(index3);
      });
    });
    showSlide3(0);

    // 캐러셀 4 js
    const swiper4 = document.querySelector(".carousel4_wrapper");
    const prevButtons4 = document.querySelectorAll(".carousel4_prev");
    const nextButtons4 = document.querySelectorAll(".carousel4_next");
    const bullets4 = document.querySelectorAll(".carousel4_circle");

    let currentSlide4 = 0;

    function showSlide4(slideIndex4) {
      swiper4.style.transform = `translateX(-${slideIndex4 * 300}px)`;
      currentSlide4 = slideIndex4;

      bullets4.forEach((bullet4, index4) => {
        if (index4 === currentSlide4) {
          bullet4.classList.add("active4");
        } else {
          bullet4.classList.remove("active4");
        }
      });
    }

    prevButtons4.forEach((prevButton4) => {
      prevButton4.addEventListener("click", () => {
        if (currentSlide4 > 0) {
          showSlide4(currentSlide4 - 1);
        }
      });
    });

    nextButtons4.forEach((nextButton4) => {
      nextButton4.addEventListener("click", () => {
        if (currentSlide4 < 7) {
          showSlide4(currentSlide4 + 1);
        }
      });
    });

    bullets4.forEach((bullet4, index4) => {
      bullet4.addEventListener("click", () => {
        showSlide4(index4);
      });
    });
    showSlide4(0);

    // 캐러셀 5 js
    const swiper5 = document.querySelector(".carousel5_wrapper");
    const prevButtons5 = document.querySelectorAll(".carousel5_prev");
    const nextButtons5 = document.querySelectorAll(".carousel5_next");
    const bullets5 = document.querySelectorAll(".carousel5_circle");

    let currentSlide5 = 0;

    function showSlide5(slideIndex5) {
      swiper5.style.transform = `translateX(-${slideIndex5 * 300}px)`;
      currentSlide5 = slideIndex5;

      bullets5.forEach((bullet5, index5) => {
        if (index5 === currentSlide5) {
          bullet5.classList.add("active5");
        } else {
          bullet5.classList.remove("active5");
        }
      });
    }

    prevButtons5.forEach((prevButton5) => {
      prevButton5.addEventListener("click", () => {
        if (currentSlide5 > 0) {
          showSlide5(currentSlide5 - 1);
        }
      });
    });

    nextButtons5.forEach((nextButton5) => {
      nextButton5.addEventListener("click", () => {
        if (currentSlide5 < 7) {
          showSlide5(currentSlide5 + 1);
        }
      });
    });

    bullets5.forEach((bullet5, index5) => {
      bullet5.addEventListener("click", () => {
        showSlide5(index5);
      });
    });
    showSlide5(0);
 