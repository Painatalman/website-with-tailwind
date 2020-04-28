import Portfolio from "./types/Portfolio";

interface PortfolioServiceGetOptions {
  nPortfolios: number;
  category?: string;
}

interface PortfolioService {
  get: () => Promise<Portfolio[]>;
}

/**
 * Does not load additional content
 */
export default class implements PortfolioService {
  _cache: any[];
  constructor(initialServices: Portfolio[] = []) {
    this._cache = [...initialServices];
  }
  async get({
    nPortfolios = 6,
    category = null,
  }: Partial<PortfolioServiceGetOptions> = {}) {
    return [...this._cache]
      .filter((portfolio) => !category || portfolio.category === category)
      .slice(0, nPortfolios);
  }
}
