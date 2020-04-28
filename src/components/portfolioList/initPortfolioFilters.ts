import NoAPIPortfolioToggler from "../../NoAPIPortfolioToggler";

const FILTER_FOR_ALL_PORTFOLIOS = "all";
const FILTER_ACTIVE_CLASS = "is-active";
const SUBFILTER_ACTIVE_CLASS = "is-active";

export default () => {
  const filters: HTMLElement[] = Array.from(
    document.querySelectorAll("[data-portfolio-toggle]")
  );
  const subfilterTogglers: HTMLElement[] = Array.from(
    document.querySelectorAll("[data-portfolio-subfilter-list]")
  );
  const portfolioToggler = new NoAPIPortfolioToggler(
    document.getElementById("portfolios")
  );

  filters.forEach((filterEl) =>
    filterEl.addEventListener("click", function enablePortfolioFilter() {
      Array.from(filters).forEach((filter) =>
        filter.parentElement.classList.remove(SUBFILTER_ACTIVE_CLASS)
      );
      // SHAME: rendering should be handled separately
      filterEl.parentElement.classList.add(FILTER_ACTIVE_CLASS);
      const category = filterEl.dataset.portfolioToggle;
      portfolioToggler.show(
        category === FILTER_FOR_ALL_PORTFOLIOS ? null : category
      );
    })
  );

  subfilterTogglers.forEach((toggler) => {
    toggler.addEventListener("click", function toggleSubfilters() {
      Array.from(subfilterTogglers).forEach((filter) =>
        filter.classList.remove(SUBFILTER_ACTIVE_CLASS)
      );
      const subfilterList = document.getElementById(
        this.dataset.portfolioSubfilterList
      );
      subfilterList.classList.toggle(SUBFILTER_ACTIVE_CLASS);
    });
  });
};
