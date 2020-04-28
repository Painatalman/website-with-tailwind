function setFooterYear() {
  document.querySelector(
    "[data-current-year]"
  ).textContent = `${new Date().getFullYear()}`;
}

export default () => setFooterYear();
