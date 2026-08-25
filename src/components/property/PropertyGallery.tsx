"use client";

import { useState } from "react";
import Image from "next/image";
import { Images } from "lucide-react";
import GalleryLightbox from "./GalleryLightbox";

export default function PropertyGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [main, ...rest] = images;

  return (
    <>
      <div className="relative grid grid-cols-2 gap-3 overflow-hidden rounded-3xl sm:grid-cols-4 sm:grid-rows-2">
        <button
          type="button"
          onClick={() => setLightboxIndex(0)}
          className="relative col-span-2 row-span-2 aspect-4/3 sm:aspect-auto"
        >
          <Image
            src={main}
            alt={name}
            fill
            priority
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </button>
        {rest.slice(0, 4).map((src, i) => (
          <button
            key={src + i}
            type="button"
            onClick={() => setLightboxIndex(i + 1)}
            className="relative hidden aspect-square sm:block"
          >
            <Image
              src={src}
              alt={`${name} photo ${i + 2}`}
              fill
              sizes="25vw"
              className="object-cover"
            />
          </button>
        ))}

        <button
          type="button"
          onClick={() => setLightboxIndex(0)}
          className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-ink shadow-sm transition-colors hover:bg-white"
        >
          <Images size={14} />
          View all {images.length} photos
        </button>
      </div>

      {lightboxIndex !== null && (
        <GalleryLightbox
          images={images}
          name={name}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
