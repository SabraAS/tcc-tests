import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import FourthTestCase from "./index";

describe("Fourth test case", () => {
  it('should have a input with the label "texto"', () => {
    render(<FourthTestCase />);
    const input = screen.getByRole("textbox", { name: "texto" });
    expect(input).toBeInTheDocument();
  });

  it('should show the value of the input in the screen', () => {
    const inputValue = "valor do input";
    
    render(<FourthTestCase />);
    const input = screen.getByRole("textbox", { name: "texto" });
    
    // Type a value
    fireEvent.change(input, { target: { value: inputValue } });
    expect(input).toHaveValue(inputValue);
    
    // Verify the value is shown in the screen
    expect(screen.getByText(`Valor digitado: ${inputValue}`)).toBeInTheDocument();
  });
});





