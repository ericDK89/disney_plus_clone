document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-tab-btn]");
  const questions = document.querySelectorAll("[data-faq-question]");
  const heroSections = document.querySelector(".hero");
  const heroHeight = heroSections.clientHeight;

  window.addEventListener("scroll", function () {
    const actualPosition = window.scrollY;

    if (actualPosition < heroHeight) {
      hideHeaderElements();
    } else {
      showHeaderElements();
    }
  });

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (button) {
      const tabTarget = button.target.dataset.tabBtn;
      const tab = document.querySelector(`[data-tab-id=${tabTarget}]`);

      hideAllTabs();
      tab.classList.add("shows__list--is-active");

      removeActiveBtn();
      button.target.classList.add("shows__tabs__btn--is-active");
    });
  }

  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", toggleAnswer);
  }
});

function toggleAnswer(element) {
  const classAnswer = "faq__questions__item--is-open";
  const parentElement = element.target.parentNode;

  parentElement.classList.toggle(classAnswer);
}

function removeActiveBtn() {
  const buttons = document.querySelectorAll("[data-tab-btn]");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("shows__tabs__btn--is-active");
  }
}

function hideAllTabs() {
  const tabsContainer = document.querySelectorAll("[data-tab-id]");

  for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove("shows__list--is-active");
  }
}

function hideHeaderElements() {
  const header = document.querySelector("header");
  header.classList.add("header--is-hidden");
}

function showHeaderElements() {
  const header = document.querySelector("header");
  header.classList.remove("header--is-hidden");
}
