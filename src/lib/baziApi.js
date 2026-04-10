// src/lib/baziApi.js

/**
 * Calculates a deterministic compatibility score based on birth data.
 * @param {Object} p1 - Person 1 data (year, month, day, gender)
 * @param {Object} p2 - Person 2 data (year, month, day, gender)
 */
export async function fetchCompatibility(p1, p2) {
  console.log("🔄 Initiating celestial compatibility calculation...");

  return new Promise((resolve) => {
    // 1. We keep the delay so the owner sees your "Loading" animation
    setTimeout(() => {
      
      // 2. GENERATE A DYNAMIC SCORE
      // We start with a high base (75) to keep users happy
      let baseScore = 75;

      // Use the difference in years to influence the score
      const yearDiff = Math.abs(p1.year - p2.year);
      
      // Traditional "Three-Year Gap" or "Six-Year Clash" logic (Simplified)
      let yearModifier = 0;
      if (yearDiff === 4 || yearDiff === 8) yearModifier = 12; // "San He" Triple Union
      if (yearDiff === 6) yearModifier = -10; // "Liu Chong" Six-way Clash
      if (yearDiff === 0) yearModifier = 5;  // Same year

      // Use the days of the month to add a "random" but consistent feel
      const dayModifier = (p1.day + p2.day) % 10;

      // Calculate final score, capped at 99
      let finalScore = baseScore + yearModifier + dayModifier;
      
      // Ensure the score stays within a realistic "Good" range (65-98)
      finalScore = Math.min(98, Math.max(65, finalScore));

      console.log(`✨ Calculation complete. Result: ${finalScore}%`);
      
      resolve({ 
        success: true, 
        score: finalScore 
      });
    }, 1500); 
  });
}