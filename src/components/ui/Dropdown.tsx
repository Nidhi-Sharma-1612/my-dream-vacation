"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown, type LucideIcon } from "lucide-react";
import { announceOpen, onOtherOpen } from "@/lib/popoverCoordination";

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  label: string;
  icon: LucideIcon;
  value: string;
  placeholder?: string;
  options: DropdownOption[];
  onChange: (value: string) => void;
  className?: string;
  align?: "left" | "right";
}

export default function Dropdown({
  label,
  icon: Icon,
  value,
  placeholder = "Select",
  options,
  onChange,
  className = "",
  align = "left",
}: DropdownProps) {
  const [open, setOpen] = useState(false);
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

  const selected = options.find((o) => o.value === value);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() =>
          setOpen((v) => {
            if (!v) announceOpen(id);
            return !v;
          })
        }
        className="w-full rounded-2xl px-4 py-2.5 text-left transition-colors hover:bg-black/3"
      >
        <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-ink-soft">
          <Icon size={13} /> {label}
        </span>
        <span className="mt-0.5 flex items-center justify-between gap-2">
          <span className="truncate text-sm text-ink">
            {selected ? selected.label : placeholder}
          </span>
          <ChevronDown
            size={15}
            className={`shrink-0 text-ink-soft transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </span>
      </button>

      {open && (
        <div
          className={`absolute top-[calc(100%+8px)] z-30 max-h-72 w-full min-w-56 overflow-auto rounded-2xl bg-white p-2 shadow-xl ring-1 ring-black/5 ${
            align === "right" ? "right-0" : "left-0"
          }`}
        >
          {placeholder && (
            <button
              type="button"
              onClick={() => {
                onChange("");
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition-colors hover:bg-sand ${
                !value ? "text-ocean-600" : "text-ink"
              }`}
            >
              {placeholder}
              {!value && <Check size={15} />}
            </button>
          )}
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition-colors hover:bg-sand ${
                value === option.value ? "text-ocean-600" : "text-ink"
              }`}
            >
              {option.label}
              {value === option.value && <Check size={15} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
