/**
 * Black Friday / Cyber Monday switch.
 *
 * The Black Friday hub pages keep their URLs all year. While the sale season is
 * on, they use the "Black Friday" title, heading and intro. After Cyber Monday
 * they switch automatically to an evergreen "deals worth opening" version.
 * The pages revalidate every hour, so the switch happens without a redeploy.
 *
 * Cyber Monday 2026 is Monday, November 30. The season ends at midnight
 * Pacific time on December 1 (08:00 UTC). Update these dates each year.
 */
export const SALE_SEASON_START = new Date('2026-11-01T07:00:00Z');
export const SALE_SEASON_END = new Date('2026-12-01T08:00:00Z');

export function isSaleSeason(now: Date = new Date()): boolean {
  return now >= SALE_SEASON_START && now < SALE_SEASON_END;
}

export type SeasonCopy = { title: string; heading: string; intro: string; listName: string };

export function seasonCopy(sale: SeasonCopy, evergreen: SeasonCopy, now: Date = new Date()): SeasonCopy {
  return isSaleSeason(now) ? sale : evergreen;
}
