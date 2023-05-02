document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-tab-btn]");

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
});

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
