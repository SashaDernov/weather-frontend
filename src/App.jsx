import { useState } from "react";

export default function App() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = city.trim() || "неизвестном городе";
    setResult(`В ${name} +20°C ☀️`);
  };

  return (
    <main style={{ maxWidth: 520, margin: "40px auto", fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ marginBottom: 16 }}>Прогноз погоды</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8 }}>
        <input
          type="text"
          placeholder="Введите город"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{ flex: 1, padding: "10px 12px", border: "1px solid #ddd", borderRadius: 8 }}
        />
        <button
          type="submit"
          style={{ padding: "10px 14px", borderRadius: 8, border: "1px solid #ddd", cursor: "pointer" }}
        >
          Показать
        </button>
      </form>

      {result && <p style={{ marginTop: 16, fontSize: 18 }}>{result}</p>}
    </main>
  );
}
