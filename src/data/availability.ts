import { addDays, todayValue } from "@/lib/date";

// Placeholder availability until the Hostaway calendar API is wired up.
// Blocks a couple of short, plausible-looking ranges per listing so the
// booking widget has something real to render as "unavailable."
const BLOCKED_OFFSETS: Record<number, [number, number][]> = {
  384967: [[5, 8], [20, 24]],
  384968: [[2, 4], [15, 21]],
  387238: [[9, 13], [30, 33]],
};

export function getUnavailableDates(hostawayId: number): string[] {
  const ranges = BLOCKED_OFFSETS[hostawayId] ?? [];
  const today = todayValue();
  const dates: string[] = [];

  for (const [start, end] of ranges) {
    for (let offset = start; offset <= end; offset++) {
      dates.push(addDays(today, offset));
    }
  }

  return dates;
}
