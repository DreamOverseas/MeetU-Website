export async function fetchCompatibility(person1, person2) {
  const response = await fetch(
    "https://bazi-calculator.heyuu.workers.dev/analyze/compatibility",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ person1, person2 }),
    }
  );

  const data = await response.json();
  return data;
}