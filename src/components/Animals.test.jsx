import "@testing-library/jest-dom";
import { describe } from "vitest";
import Animals from "./Animals";
import { render, screen } from "@testing-library/react";

describe("Animals Component", () => {
  it("shows the noPets when the array is empty", () => {
    render(<Animals animals={[]} noPets="No pets available" />);
    expect(screen.getByText("No pets available")).toBeInTheDocument();
  });
});
