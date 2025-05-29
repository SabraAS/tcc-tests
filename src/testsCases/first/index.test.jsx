import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import FirstTestCase from "./index";

describe("First test case", () => {
  it("should calculate the result of the subtraction between two numbers", () => {
    render(<FirstTestCase />);

    const inputA = screen.getByRole("textbox", { name: "a" });
    const inputB = screen.getByRole("textbox", { name: "b" });
    const button = screen.getByRole("button", { name: "Calcular" });

    fireEvent.change(inputA, { target: { value: "10" } });
    fireEvent.change(inputB, { target: { value: "2" } });
    fireEvent.click(button);

    expect(screen.getByText("O resultado da subtração é: 8")).toBeInTheDocument();
  });
});



