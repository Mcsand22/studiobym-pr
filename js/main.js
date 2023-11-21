window.addEventListener("load", function () {
  const titleElement = document.querySelector(".title");
  const cursorElement = document.createElement("span");
  cursorElement.className = "cursor";
  cursorElement.textContent = "|";
  titleElement.appendChild(cursorElement);

  const titles = ["Desarrolladora Fullstack", "Diseñadora UX/UI"];
  let titleIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;

  function typeDeleteTitle() {
    const title = titles[titleIndex];
    const currentText = isDeleting
      ? title.substring(0, letterIndex - 1)
      : title.substring(0, letterIndex + 1);

    titleElement.textContent = currentText;
    letterIndex += isDeleting ? -1 : 1;

    if ((!isDeleting && letterIndex > title.length) || (isDeleting && letterIndex === 0)) {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        titleIndex = (titleIndex + 1) % titles.length;
      }
    }

    setTimeout(typeDeleteTitle, isDeleting ? 150 : 100);
  }

  typeDeleteTitle();
});

document.addEventListener("DOMContentLoaded", function () {
  const pinkImage = document.querySelector(".pink");
  const greenImage = document.querySelector(".green");

  let angle = 0;
  const radius = 100; // Radio del movimiento

  function moveImages() {
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    pinkImage.style.transform = `translate(${x}px, ${y}px)`;
    greenImage.style.transform = `translate(${-x}px, ${-y}px)`;

    angle += 0.01; // Ajusta la velocidad de movimiento
    requestAnimationFrame(moveImages);
  }

  moveImages();
});

document.addEventListener("DOMContentLoaded", function () {
  const backToTopLink = document.querySelector(".back-to-top");
  const aboutSection = document.querySelector("#about");

  function toggleBackToTopVisibility() {
    if (window.scrollY >= aboutSection.offsetTop) {
      backToTopLink.classList.add("show-back-to-top");
    } else {
      backToTopLink.classList.remove("show-back-to-top");
    }
  }

  toggleBackToTopVisibility();

  window.addEventListener("scroll", toggleBackToTopVisibility);

  backToTopLink.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const skillImages = document.querySelectorAll(".skill-image");
  const skillsSection = document.querySelector(".myskills");
  function animateSkills() {
    skillImages.forEach((image) => {
      image.style.animation = "fade-in 2s forwards";
    });
  }

  function resetSkillsAnimations() {
    skillImages.forEach((image) => {
      image.style.animation = "";
    });
  }
  function checkScroll() {
    const sectionTop = skillsSection.getBoundingClientRect().top;
    if (sectionTop <= window.innerHeight * 0.75) {
      animateSkills();
    } else {
      resetSkillsAnimations();
    }
  }

  const skillsLink = document.querySelector(".skills");
  skillsLink.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: skillsSection.offsetTop,
      behavior: "smooth"
    });
  });

  window.addEventListener("scroll", checkScroll);
  checkScroll();
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-ul a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const contactImages = document.querySelectorAll(".contact img");
  const contactSection = document.querySelector("#contact");
  function animateContactImages() {
    contactImages.forEach((image) => {
      image.style.animation = "fade-in 2s forwards";
    });
  }
  function resetContactAnimations() {
    contactImages.forEach((image) => {
      image.style.animation = "";
    });
  }
  function checkContactScroll() {
    const sectionTop = contactSection.getBoundingClientRect().top;
    if (sectionTop <= window.innerHeight * 0.75) {
      animateContactImages();
    } else {
      resetContactAnimations();
    }
  }
  window.addEventListener("scroll", checkContactScroll);
  checkContactScroll();
});

document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector(".about-me");
  function animateAboutSection() {
    aboutSection.style.animation = "fade-in 2s forwards";
  }
  function resetAboutSectionAnimation() {
    aboutSection.style.animation = "none";
  }
  function checkAboutSectionScroll() {
    const sectionTop = aboutSection.getBoundingClientRect().top;
    if (sectionTop <= window.innerHeight * 0.75) {
      animateAboutSection();
    } else {
      resetAboutSectionAnimation();
    }
  }

  window.addEventListener("scroll", checkAboutSectionScroll);
  checkAboutSectionScroll();
});
