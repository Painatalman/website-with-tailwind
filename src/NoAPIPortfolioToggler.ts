import PortfolioToggler from "./types/PortfolioToggler";
import FromElementPortfolioElement from "./FromElementPortfolioElement";
import PortfolioElement from "./types/PortfolioElement";

/**
 * Does not load additional content
 */
export default class implements PortfolioToggler {
  private container: HTMLElement;
  portfolioElements: FromElementPortfolioElement[];
  portfoliosToShow: number;
  currentCategory?: string;

  constructor(portfolioContainer: HTMLElement) {
    this.container = portfolioContainer;
    this.portfolioElements = Array.prototype.slice
      .call(this.container.querySelectorAll("[data-portfolio]"))
      .map((el: HTMLElement) => {
        return new FromElementPortfolioElement(el);
      });
    this.portfoliosToShow = 6;
    this.currentCategory = null;
  }

  /**
   *
   * Hide all portfolios
   */
  private async hideAll() {
    return Promise.all(
      this.portfolioElements.map((portfolioEl) => portfolioEl.hide())
    );
  }

  async show(category?: string) {
    await this.hideAll();

    const portfoliosToShow = this.portfolioElements
      .filter(
        (portfolioElement) =>
          !category || portfolioElement.hasCategory(category)
      )
      .slice(0, this.portfoliosToShow);

    await Promise.all(
      portfoliosToShow.map((portfolioEl) => portfolioEl.show())
    );
  }
  async increaseNumPortfolios() {
    this.portfoliosToShow += 6;

    return await this.show();
  }
}
