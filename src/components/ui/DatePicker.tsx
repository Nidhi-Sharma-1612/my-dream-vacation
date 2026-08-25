"use client";

import { useEffect, useId, useRef, useState } from "react";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import { formatDateValue, parseDateValue } from "@/lib/date";
import { announceOpen, onOtherOpen } from "@/lib/popoverCoordination";

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

interface DatePickerProps {
  label: string;
  value: string;
  placeholder?: string;
  minDate?: string;
  unavailableDates?: string[];
  onChange: (value: string) => void;
  className?: string;
  align?: "left" | "right";
}

function formatDisplay(value: string) {
  return parseDateValue(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function DatePicker({
  label,
  value,
  placeholder = "Add date",
  minDate,
  unavailableDates = [],
  onChange,
  className = "",
  align = "left",
}: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const [viewDate, setViewDate] = useState(() =>
    value ? parseDateValue(value) : new Date()
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  useEffect(() => onOtherOpen(id, () => setOpen(false)), [id]);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  const startOffset = firstOfMonth.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const min = minDate ? parseDateValue(minDate) : null;
  const selected = value ? parseDateValue(value) : null;
  const unavailableSet = new Set(unavailableDates);
  const today = new Date();

  const cells: (Date | null)[] = [
    ...Array.from({ length: startOffset }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1)),
  ];

  const isSameDay = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => {
          setViewDate(value ? parseDateValue(value) : new Date());
          setOpen((v) => {
            if (!v) announceOpen(id);
            return !v;
          });
        }}
        className="w-full rounded-2xl px-4 py-2.5 text-left transition-colors hover:bg-black/3"
      >
        <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-ink-soft">
          <CalendarDays size={13} /> {label}
        </span>
        <span
          className={`mt-0.5 block text-sm ${value ? "text-ink" : "text-ink-soft"}`}
        >
          {value ? formatDisplay(value) : placeholder}
        </span>
      </button>

      {open && (
        <div
          className={`absolute top-[calc(100%+8px)] z-30 w-72 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/5 ${
            align === "right" ? "right-0" : "left-0"
          }`}
        >
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setViewDate(new Date(year, month - 1, 1))}
              className="flex h-8 w-8 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-sand"
              aria-label="Previous month"
            >
              <ChevronLeft size={16} />
            </button>
            <p className="text-sm font-semibold text-ink">
              {viewDate.toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </p>
            <button
              type="button"
              onClick={() => setViewDate(new Date(year, month + 1, 1))}
              className="flex h-8 w-8 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-sand"
              aria-label="Next month"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="mt-3 grid grid-cols-7 gap-y-1 text-center text-[11px] font-semibold text-ink-soft">
            {WEEKDAYS.map((d, i) => (
              <span key={i}>{d}</span>
            ))}
          </div>

          <div className="mt-1 grid grid-cols-7 gap-y-1 text-center text-sm">
            {cells.map((date, i) => {
              if (!date) return <span key={i} />;
              const dateValue = formatDateValue(date);
              const isPast = !!min && date < min;
              const isUnavailable = unavailableSet.has(dateValue);
              const disabled = isPast || isUnavailable;
              const isSelected = !!selected && isSameDay(date, selected);
              const isToday = isSameDay(date, today);

              let stateClasses: string;
              if (isSelected) {
                stateClasses = "bg-ocean-500 font-semibold text-cream";
              } else if (isUnavailable) {
                stateClasses =
                  "cursor-not-allowed bg-coral-50 text-coral-400 line-through decoration-coral-300";
              } else if (isPast) {
                stateClasses = "cursor-not-allowed text-ink-soft/30";
              } else if (isToday) {
                stateClasses =
                  "font-semibold text-ocean-600 ring-2 ring-inset ring-ocean-500 hover:bg-sand";
              } else {
                stateClasses = "text-ink hover:bg-sand";
              }

              return (
                <button
                  key={i}
                  type="button"
                  disabled={disabled}
                  title={isUnavailable ? "Unavailable" : undefined}
                  onClick={() => {
                    onChange(dateValue);
                    setOpen(false);
                  }}
                  className={`relative mx-auto flex h-8 w-8 items-center justify-center rounded-full transition-colors ${stateClasses}`}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex items-center gap-3 border-t border-black/5 pt-3 text-[11px] text-ink-soft">
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white ring-1 ring-black/15" />
              Available
            </span>
            {unavailableDates.length > 0 && (
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-coral-50 ring-1 ring-coral-300" />
                Unavailable
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full ring-2 ring-inset ring-ocean-500" />
              Today
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
