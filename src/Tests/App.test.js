import { render, screen } from "@testing-library/react";
import App from "../App";

describe("DOM test", () => {
  test("renders title", () => {
    render(<App />);
    const title = screen.getByText("Employee List");
    expect(title).toBeInTheDocument();
  });

  test("renders sort select", () => {
    render(<App />);
    const sortSelect = screen.getByText("Sort:");
    const option = screen.getByRole("option", { name: /A - Z/i });
    expect(option).toBeInTheDocument();
    expect(sortSelect).toBeInTheDocument();
  });

  test("renders table", () => {
    render(<App />);
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });

  test("renders input field", () => {
    render(<App />);
    const field = screen.getByRole("group", { name: /New Employee/i });
    const textboxName = screen.getByRole("textbox", { name: /Name:/i });
    const button = screen.getByRole("button", { name: /Add/i });
    console.log(field);
    expect(field).toBeInTheDocument();
    expect(textboxName).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
