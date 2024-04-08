import HomePage from "@/pages/home/HomePage";
import { render, screen } from "@testing-library/react";

test("renders learn react link", () => {
  render(<HomePage />);
  const linkElement = screen.getByText(/Dashboard/i);
  expect(linkElement).toBeInTheDocument();
});
