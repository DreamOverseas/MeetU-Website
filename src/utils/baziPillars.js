import { Solar } from "lunar-javascript";

export function calculatePillars({ year, month, day, hour }) {
  try {
    const solar = Solar.fromYmdHms(year, month, day, hour, 0, 0);
    const lunar = solar.getLunar();

    return {
      year: lunar.getYearInGanZhi(),
      month: lunar.getMonthInGanZhi(),
      day: lunar.getDayInGanZhi(),
      hour: lunar.getTimeInGanZhi()
    };
  } catch (err) {
    console.error("Pillar calculation error:", err);
    return null; // prevent crash
  }
}