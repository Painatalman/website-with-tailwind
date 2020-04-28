import Portfolio from "./Portfolio";

/**
 * show a list of portfolios based on:
 * - expected quantity
 * - category
 *
 * @export
 * @interface PortfolioToggler
 */
export default interface PortfolioToggler {
  // if no category is provided, show all portfolios
  show: (category?: string) => Promise<void>;
  increaseNumPortfolios: () => Promise<void>;
}
