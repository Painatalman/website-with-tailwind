import NoAPIPortfolioToggler from "../NoAPIPortfolioToggler";

let controller: NoAPIPortfolioToggler;

beforeEach(() => {
  document.body.innerHTML = `
    <ul id="portfolio-list">
      <li id="portfolio-1" data-portfolio ></li>
      <li id="portfolio-2"  data-portfolio data-category="type1" data-label='teste-1' data-slug='teste' data-full-picture="dummy"><img src="" data-portfolio-thumbnail></li>
      <li id="portfolio-3"  data-portfolio data-category="type1" data-label='teste-2' data-slug='teste' data-full-picture="dummy"><img src="" data-portfolio-thumbnail></li>
      <li id="portfolio-4"  data-portfolio data-category="type1" data-label='teste-3' data-slug='teste' data-full-picture="dummy"><img src="" data-portfolio-thumbnail></li>
      <li id="portfolio-5"  data-portfolio data-category="type2" data-label='teste-4' data-slug='teste' data-full-picture="dummy"><img src="" data-portfolio-thumbnail></li>
      <li id="portfolio-6"  data-portfolio data-category="type1" data-label='teste-5' data-slug='teste' data-full-picture="dummy"><img src="" data-portfolio-thumbnail></li>
      <li id="portfolio-7"  data-portfolio data-category="type1" data-label='teste-6' data-slug='teste' data-full-picture="dummy"><img src="" data-portfolio-thumbnail></li>
      <li id="portfolio-8"  data-portfolio data-category="type1" data-label='teste-1' data-slug='teste' data-full-picture="dummy"><img src="" data-portfolio-thumbnail></li>
      <li id="portfolio-9"  data-portfolio data-category="type1" data-label='teste-1' data-slug='teste' data-full-picture="dummy"><img src="" data-portfolio-thumbnail></li>
      <li id="portfolio-10"  data-portfolio data-category="type1" data-label='teste-1' data-slug='teste' data-full-picture="dummy"><img src="" data-portfolio-thumbnail></li>
      <li id="portfolio-11"  data-portfolio data-category="type1" data-label='teste-1' data-slug='teste' data-full-picture="dummy"><img src="" data-portfolio-thumbnail></li>
      <li id="portfolio-12"  data-portfolio data-category="type1" data-label='teste-1' data-slug='teste' data-full-picture="dummy"><img src="" data-portfolio-thumbnail></li>
      <li id="portfolio-13"  data-portfolio data-category="type1" data-label='teste-1' data-slug='teste' data-full-picture="dummy"><img src="" data-portfolio-thumbnail></li>
    </ul>    
  `;
  controller = new NoAPIPortfolioToggler(
    document.getElementById("portfolio-list")
  );
});

describe("call to show more portfolios", () => {
  it("should increase the number of visible portfolios, if possible", async (done) => {
    await controller.increaseNumPortfolios();

    const visiblePortfolioIDs = Array.from(
      document.querySelectorAll("[data-portfolio]:not([hidden])")
    ).map(({ id }) => id);
    expect(visiblePortfolioIDs).toEqual([
      "portfolio-1",
      "portfolio-2",
      "portfolio-3",
      "portfolio-4",
      "portfolio-5",
      "portfolio-6",
      "portfolio-7",
      "portfolio-8",
      "portfolio-9",
      "portfolio-10",
      "portfolio-11",
      "portfolio-12",
    ]);
    done();
  });
});
