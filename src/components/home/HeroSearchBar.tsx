"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { MapPin, Users, Search } from "lucide-react";
import Dropdown from "@/components/ui/Dropdown";
import DatePicker from "@/components/ui/DatePicker";
import { properties } from "@/data/properties";
import { addDays, todayValue } from "@/lib/date";

const destinations = Array.from(new Set(properties.map((p) => p.region))).map(
  (region) => ({ value: region, label: region })
);

const maxGuests = Math.max(...properties.map((p) => p.guests));
const guestOptions = Array.from({ length: maxGuests }, (_, i) => i + 1).map(
  (n) => ({
    value: String(n),
    label: `${n} guest${n === 1 ? "" : "s"}`,
  })
);

export default function HeroSearchBar() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination) params.set("region", destination);
    if (checkIn) params.set("checkin", checkIn);
    if (checkOut) params.set("checkout", checkOut);
    params.set("guests", guests);
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="grid gap-1 rounded-3xl bg-cream p-2 shadow-xl sm:grid-cols-[1.1fr_1fr_1fr_0.9fr_auto] sm:items-stretch sm:divide-x sm:divide-black/10"
    >
      <Dropdown
        label="Destination"
        icon={MapPin}
        value={destination}
        placeholder="Anywhere"
        options={destinations}
        onChange={setDestination}
      />

      <DatePicker
        label="Check-in"
        value={checkIn}
        minDate={todayValue()}
        onChange={(v) => {
          setCheckIn(v);
          if (checkOut && v >= checkOut) {
            setCheckOut(addDays(v, 1));
          }
        }}
      />

      <DatePicker
        label="Check-out"
        value={checkOut}
        minDate={checkIn ? addDays(checkIn, 1) : todayValue()}
        onChange={setCheckOut}
        align="right"
      />

      <Dropdown
        label="Guests"
        icon={Users}
        value={guests}
        placeholder=""
        options={guestOptions}
        onChange={setGuests}
        align="right"
      />

      <button
        type="submit"
        className="m-1 flex items-center justify-center gap-2 rounded-2xl bg-coral-500 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-coral-600"
      >
        <Search size={16} />
        <span className="sm:hidden">Search stays</span>
      </button>
    </form>
  );
}
