import { useState } from "react";

export const minus = (a, b) => (Number(a) && Number(b)) ? Number(a) - Number(b) : 0;

export default function FirstTestCase() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <div>
      <input value={a} onChange={(e) => setA(e.target.value)} aria-label="a" />
      <input value={b} onChange={(e) => setB(e.target.value)} aria-label="b" />
      <button onClick={() => {
        setResult(minus(a, b));
      }}>Calcular</button>
      <p>O resultado da subtração é: {result}</p>

    </div>
  );
}

