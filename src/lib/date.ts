// All dates in this app are plain "YYYY-MM-DD" strings representing a
// calendar day with no timezone. Never round-trip through
// Date#toISOString()/new Date(string) for these — both interpret the
// string as UTC while Date getters/setters operate in local time, which
// silently shifts the day by one for any UTC-negative timezone.

export function parseDateValue(value: string): Date {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export function formatDateValue(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function addDays(value: string, days: number): string {
  const date = parseDateValue(value);
  date.setDate(date.getDate() + days);
  return formatDateValue(date);
}

export function todayValue(): string {
  return formatDateValue(new Date());
}
