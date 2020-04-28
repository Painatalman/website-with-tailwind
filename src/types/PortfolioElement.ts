import Portfolio from "./Portfolio";

export default interface PortfolioElement {
  element: HTMLElement;
  portfolio: Portfolio;
  show: () => Promise<void>;
  hide: () => Promise<void>;
  hasCategory: (category?: string) => boolean;
}
