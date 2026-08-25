import { MapPin, ExternalLink } from "lucide-react";

const AREA_DELTA = 0.06;

export default function PropertyMap({
  location,
  coordinates,
}: {
  location: string;
  coordinates: { lat: number; lng: number };
}) {
  const { lat, lng } = coordinates;
  const bbox = [lng - AREA_DELTA, lat - AREA_DELTA, lng + AREA_DELTA, lat + AREA_DELTA].join(
    ","
  );
  const embedSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;
  const largeMapHref = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=12/${lat}/${lng}`;

  return (
    <div className="mt-10">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="font-display text-xl font-medium text-ink">
          Location
        </h2>
        <a
          href={largeMapHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-semibold text-ocean-600 hover:text-ocean-500"
        >
          Open larger map <ExternalLink size={13} />
        </a>
      </div>

      <p className="mt-2 flex items-center gap-1.5 text-sm text-ink-soft">
        <MapPin size={15} className="text-ocean-600" />
        {location}
      </p>

      <div className="relative mt-4 h-80 w-full overflow-hidden rounded-2xl ring-1 ring-black/10">
        <iframe
          title={`Map showing the general area of ${location}`}
          src={embedSrc}
          className="h-full w-full grayscale-[15%]"
          loading="lazy"
        />
      </div>

      <p className="mt-2 text-xs text-ink-soft">
        Pin shows the general area, not the exact address — your host shares
        the precise location once your stay is confirmed.
      </p>
    </div>
  );
}
