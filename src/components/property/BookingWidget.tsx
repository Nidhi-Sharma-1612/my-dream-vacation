"use client";

import { useMemo, useState } from "react";
import { Users, Mail } from "lucide-react";
import Dropdown from "@/components/ui/Dropdown";
import DatePicker from "@/components/ui/DatePicker";
import { addDays, parseDateValue, todayValue } from "@/lib/date";

const MS_PER_NIGHT = 1000 * 60 * 60 * 24;

export default function BookingWidget({
  pricePerNight,
  maxGuests,
  unavailableDates = [],
}: {
  pricePerNight: number;
  maxGuests: number;
  unavailableDates?: string[];
}) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  const guestOptions = Array.from({ length: maxGuests }, (_, i) => {
    const n = i + 1;
    return { value: String(n), label: `${n} guest${n === 1 ? "" : "s"}` };
  });

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const inDate = parseDateValue(checkIn);
    const outDate = parseDateValue(checkOut);
    const diff = Math.round((outDate.getTime() - inDate.getTime()) / MS_PER_NIGHT);
    return diff > 0 ? diff : 0;
  }, [checkIn, checkOut]);

  const subtotal = nights * pricePerNight;
  const serviceFee = Math.round(subtotal * 0.08);
  const total = subtotal + serviceFee;

  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-black/5">
      <div className="flex items-baseline justify-between">
        <p>
          <span className="font-display text-2xl font-semibold text-ink">
            ${pricePerNight}
          </span>
          <span className="text-sm text-ink-soft"> / night (estimated)</span>
        </p>
        <span className="text-xs font-semibold text-ocean-600">
          No platform fees
        </span>
      </div>

      <form className="mt-6 space-y-3" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-black/10">
            <DatePicker
              label="Check-in"
              value={checkIn}
              minDate={todayValue()}
              unavailableDates={unavailableDates}
              onChange={(v) => {
                setCheckIn(v);
                if (checkOut && v >= checkOut) {
                  setCheckOut(addDays(v, 1));
                }
              }}
            />
          </div>
          <div className="rounded-2xl border border-black/10">
            <DatePicker
              label="Check-out"
              value={checkOut}
              minDate={checkIn ? addDays(checkIn, 1) : todayValue()}
              unavailableDates={unavailableDates}
              onChange={setCheckOut}
              align="right"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-black/10">
          <Dropdown
            label="Guests"
            icon={Users}
            value={guests}
            placeholder=""
            options={guestOptions}
            onChange={setGuests}
          />
        </div>

        <button
          type="submit"
          disabled={nights <= 0}
          className="w-full rounded-full bg-coral-500 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:bg-coral-600 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
        >
          {nights > 0 ? "Book Now" : "Select valid dates"}
        </button>

        {nights > 0 && (
          <div className="space-y-2 border-t border-black/5 pt-4 text-sm text-ink-soft">
            <div className="flex justify-between">
              <span>
                ${pricePerNight} × {nights} night{nights === 1 ? "" : "s"}
              </span>
              <span>${subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Service fee</span>
              <span>${serviceFee.toLocaleString()}</span>
            </div>
            <div className="flex justify-between border-t border-black/5 pt-2 font-semibold text-ink">
              <span>Estimated total</span>
              <span>${total.toLocaleString()}</span>
            </div>
          </div>
        )}

        <p className="flex items-center gap-1.5 pt-2 text-xs text-ink-soft">
          <Mail size={14} className="text-ocean-500" />
          Confirmed by email before your rate is finalized
        </p>
      </form>
    </div>
  );
}
