// src/API/baziCompatibility.js

export async function analyzeCompatibility(person1, person2) {
  const response = await fetch(
    "https://bazi-calculator.heyuu.workers.dev/analyze/compatibility",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        person1,
        person2,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("API request failed");
  }

  return await response.json();
}

