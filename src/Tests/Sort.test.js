import { ascendingSort, descendingSort } from "../Utils/Ascending-Sort";

describe("Ascending sorting:", () => {
  test("Check if Ascending sort is defined", () => {
    expect(ascendingSort([])).toBeDefined();
  });
});

describe("Descending sorting:", () => {
  test("Check if Descending sort is defined", () => {
    expect(descendingSort([])).toBeDefined();
  });
});
