"use client";

import { useState } from "react";
import { Share2, Check } from "lucide-react";

export default function ShareButton({
  name,
  tagline,
}: {
  name: string;
  tagline: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title: name, text: tagline, url });
      } catch {
        // user cancelled the share sheet — no action needed
      }
      return;
    }

    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className="flex items-center gap-1.5 rounded-full border border-black/10 px-4 py-2 text-sm font-semibold text-ink-soft transition-colors hover:bg-sand"
    >
      {copied ? (
        <>
          <Check size={15} className="text-ocean-600" />
          Link copied
        </>
      ) : (
        <>
          <Share2 size={15} />
          Share
        </>
      )}
    </button>
  );
}
