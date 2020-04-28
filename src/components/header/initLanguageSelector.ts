const ACTIVE_CLASS = "is-active";

export default () => {
  const languageSelector = document.getElementById("language-selector");

  document
    .getElementById("language-selector-button")
    .addEventListener("click", function toggleLanguageSelector() {
      languageSelector.classList.toggle(ACTIVE_CLASS);
    });
};
