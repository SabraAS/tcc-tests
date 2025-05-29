import { useState } from "react";

export default function FourthTestCase() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        aria-label="texto"
        value={inputValue}
        onChange={handleInputChange}
      />
      <p>Valor digitado: {inputValue}</p>
    </div>
  );
}

