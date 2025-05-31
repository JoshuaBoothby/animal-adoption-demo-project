import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Animals from "./Animals";
import { describe, it, expect, test } from "vitest";

describe("Animals Component", () => {
  it("does NOT show the noPets message when the array has pets", () => {
    const samplePets = [
      {
        species: "Dog",
        vaccinated: true,
        imageUrl: "https://placebear.com/300/400",
        kidFriendly: false,
        id: "1d0d0709-a253-49fe-8ddb-fcca2bbae3ab",
        adopted: false,
        name: "Bob",
        age: "11",
      },
    ];
    render(
      <Animals
        animals={samplePets}
        title="random string"
        noPets="No pets here"
      />
    );
    expect(screen.queryByText("No pets here")).not.toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
  });
});
