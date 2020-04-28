import PortfolioElement from "./types/PortfolioElement";
import Portfolio from "./types/Portfolio";

export default class implements PortfolioElement {
  element: HTMLElement;
  portfolio: Portfolio;
  constructor(element: HTMLElement) {
    this.element = element;

    const { category, label, slug, fullPicture, description } = element.dataset;
    const thumbnailEl: HTMLImageElement = this.element.querySelector(
      "[data-thumbnail]"
    );

    this.portfolio = {
      label,
      slug,
      thumbnail: thumbnailEl?.src,
      fullPicture,
      description,
      category,
    };
  }
  hasCategory(filterCategory?: string) {
    const { category } = this.portfolio;
    return !category || category === filterCategory;
  }
  async show() {
    this.element.removeAttribute("hidden");
  }
  async hide() {
    this.element.setAttribute("hidden", null);
  }
}
