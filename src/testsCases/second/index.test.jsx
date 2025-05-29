import { describe, expect, it } from 'vitest';
import multiply from "./index";

describe("Second test case", () => {
  it("should calculate the result of the multiplication between two numbers", () => {
    // Arrange: prepara os dados
    const a = 7;
    const b = 7;

    // Act: executa a função que será testada
    const result = multiply(a, b);

    // Assert: verifica se o resultado é o esperado
    expect(result).toBe(49);
  });
});



