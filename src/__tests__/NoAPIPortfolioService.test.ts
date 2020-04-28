import PortfolioService from "../NoAPIPortfolioService";

// with an initial number of 6 portfolios
//  and a default call
// check if returned portfolios match provided data is 6
describe("getting portfolios by default", () => {
  it("should return the first 6 portfolios, if more than 6 is available", (done) => {
    const service = new PortfolioService([
      {
        label: "Test",
        slug: "a",
        thumbnail: "",
        fullPicture: "",
      },
      {
        label: "Test",
        slug: "b",
        thumbnail: "",
        fullPicture: "",
      },
      {
        label: "Test",
        slug: "c",
        thumbnail: "",
        fullPicture: "",
      },
      {
        label: "Test",
        slug: "d",
        thumbnail: "",
        fullPicture: "",
      },
      {
        label: "Test",
        slug: "e",
        thumbnail: "",
        fullPicture: "",
      },
      {
        label: "Test",
        slug: "f",
        thumbnail: "",
        fullPicture: "",
      },
      {
        label: "Test",
        slug: "g",
        thumbnail: "",
        fullPicture: "",
      },
    ]);

    service.get().then((portfolios) => {
      expect(portfolios).toEqual([
        {
          label: "Test",
          slug: "a",
          thumbnail: "",
          fullPicture: "",
        },
        {
          label: "Test",
          slug: "b",
          thumbnail: "",
          fullPicture: "",
        },
        {
          label: "Test",
          slug: "c",
          thumbnail: "",
          fullPicture: "",
        },
        {
          label: "Test",
          slug: "d",
          thumbnail: "",
          fullPicture: "",
        },
        {
          label: "Test",
          slug: "e",
          thumbnail: "",
          fullPicture: "",
        },
        {
          label: "Test",
          slug: "f",
          thumbnail: "",
          fullPicture: "",
        },
      ]);

      done();
    });
  });
});

describe("getting a specific amount of portfolios", () => {
  it("returns the requested amount of portfolios, if more portfolios than the requested amount are available", (done) => {
    const service = new PortfolioService([
      {
        label: "Test",
        slug: "a",
        thumbnail: "",
        fullPicture: "",
      },
      {
        label: "Test",
        slug: "b",
        thumbnail: "",
        fullPicture: "",
      },
      {
        label: "Test",
        slug: "c",
        thumbnail: "",
        fullPicture: "",
      },
      {
        label: "Test",
        slug: "d",
        thumbnail: "",
        fullPicture: "",
      },
      {
        label: "Test",
        slug: "e",
        thumbnail: "",
        fullPicture: "",
      },
      {
        label: "Test",
        slug: "f",
        thumbnail: "",
        fullPicture: "",
      },
      {
        label: "Test",
        slug: "g",
        thumbnail: "",
        fullPicture: "",
      },
    ]);

    service.get({ nPortfolios: 2 }).then((portfolios) => {
      expect(portfolios).toEqual([
        {
          label: "Test",
          slug: "a",
          thumbnail: "",
          fullPicture: "",
        },
        {
          label: "Test",
          slug: "b",
          thumbnail: "",
          fullPicture: "",
        },
      ]);

      done();
    });
  });

  it("returns all portfolios available, if more than the ones available are requested", (done) => {
    const service = new PortfolioService([
      {
        label: "Test",
        slug: "a",
        thumbnail: "",
        fullPicture: "",
      },
      {
        label: "Test",
        slug: "b",
        thumbnail: "",
        fullPicture: "",
      },
      {
        label: "Test",
        slug: "c",
        thumbnail: "",
        fullPicture: "",
      },
      {
        label: "Test",
        slug: "d",
        thumbnail: "",
        fullPicture: "",
      },
      {
        label: "Test",
        slug: "e",
        thumbnail: "",
        fullPicture: "",
      },
      {
        label: "Test",
        slug: "f",
        thumbnail: "",
        fullPicture: "",
      },
      {
        label: "Test",
        slug: "g",
        thumbnail: "",
        fullPicture: "",
      },
    ]);

    service.get({ nPortfolios: 8 }).then((portfolios) => {
      expect(portfolios).toEqual([
        {
          label: "Test",
          slug: "a",
          thumbnail: "",
          fullPicture: "",
        },
        {
          label: "Test",
          slug: "b",
          thumbnail: "",
          fullPicture: "",
        },
        {
          label: "Test",
          slug: "c",
          thumbnail: "",
          fullPicture: "",
        },
        {
          label: "Test",
          slug: "d",
          thumbnail: "",
          fullPicture: "",
        },
        {
          label: "Test",
          slug: "e",
          thumbnail: "",
          fullPicture: "",
        },
        {
          label: "Test",
          slug: "f",
          thumbnail: "",
          fullPicture: "",
        },
        {
          label: "Test",
          slug: "g",
          thumbnail: "",
          fullPicture: "",
        },
      ]);

      done();
    });
  });
});

describe("getting category-specific portfolios", () => {
  it("only returns portfolios with the specified category, excluding portfolios with no category", (done) => {
    const service = new PortfolioService([
      {
        label: "Test",
        slug: "a",
        thumbnail: "",
        fullPicture: "",
      },
      {
        label: "Test",
        slug: "b",
        thumbnail: "",
        fullPicture: "",
        category: "food",
      },
      {
        label: "Test",
        slug: "c",
        thumbnail: "",
        fullPicture: "",
        category: "drink",
      },
    ]);

    service.get({ category: "food" }).then((portfolios) => {
      expect(portfolios).toEqual([
        {
          label: "Test",
          slug: "b",
          thumbnail: "",
          fullPicture: "",
          category: "food",
        },
      ]);

      done();
    });
  });
});
