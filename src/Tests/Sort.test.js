import ascendingSort from "../Utils/Ascending-Sort";
import descendingSort from "../Utils/Descending-Sort";
import {
  fullNames,
  firstNamesOnly,
  closelyMatchResults,
  closelyMatchedNames,
} from "./MockData";

describe("Ascending sorting:", () => {
  test("Check if Ascending sort is defined", () => {
    expect(ascendingSort([])).toBeDefined();
  });

  test("Should return array", () => {
    expect(Array.isArray(ascendingSort([firstNamesOnly]))).toBeTruthy();
  });

  test("Should sort array by first name", () => {
    expect(ascendingSort(firstNamesOnly)[0].name).toEqual("Blaise");
  });

  test("Should sort array by full name", () => {
    expect(ascendingSort(fullNames)[0].name).toEqual("Carleton Hessel");
  });

  test("Should not miss any data", () => {
    expect(ascendingSort(fullNames).length).toBe(9);
  });

  test("Should sort closely matched names", () => {
    expect(ascendingSort(closelyMatchedNames)).toEqual(closelyMatchResults);
  });
});

describe("Descending sorting:", () => {
  test("Check if Descending sort is defined", () => {
    expect(descendingSort([])).toBeDefined();
  });

  test("Should return array", () => {
    expect(Array.isArray(descendingSort([firstNamesOnly]))).toBeTruthy();
  });

  test("Should sort array by first name", () => {
    expect(descendingSort(firstNamesOnly)[0].name).toEqual("Willa");
  });

  test("Should sort array by full name", () => {
    expect(descendingSort(fullNames)[0].name).toEqual("Vivian Schinner");
  });

  test("Should sort closely matched names", () => {
    expect(descendingSort(closelyMatchedNames)).toEqual(
      closelyMatchResults.reverse()
    );
  });

  test("Should not miss any data", () => {
    expect(descendingSort(fullNames).length).toBe(9);
  });
});
