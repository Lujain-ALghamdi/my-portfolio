"use client";

import { withBasePath } from "@/lib/basePath";

/**
 * In-card media showcase for projects that ship a featured image and/or short
 * demo clips (currently only "Rex Robot Dog"). Renders nothing unless media is
 * supplied, so every other project card stays visually unchanged.
 */
export default function ProjectShowcase({
  image,
  imageAlt,
  videos = [],
}: {
  image?: string;
  imageAlt?: string;
  videos?: string[];
}) {
  const hasVideos = videos.length > 0;

  if (!image && !hasVideos) return null;

  return (
    <div className="mt-2 mb-5 space-y-4">
      {image && (
        <div className="group/media overflow-hidden rounded-lg border border-cyan-900/35 bg-[rgba(8,16,28,0.72)] transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_0_1px_rgba(0,240,255,0.15),0_0_26px_rgba(0,240,255,0.16)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBasePath(image)}
            alt={imageAlt ?? "Project media"}
            loading="lazy"
            className="block w-full h-auto object-cover transition-transform duration-500 group-hover/media:scale-[1.03]"
          />
        </div>
      )}

      {hasVideos && (
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-500/70 mb-2">
            Robot in Action
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {videos.map((src, i) => (
              <div
                key={src}
                className="overflow-hidden rounded-lg border border-cyan-900/35 bg-black/40 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_0_1px_rgba(0,240,255,0.15),0_0_20px_rgba(0,240,255,0.13)]"
              >
                <video
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={`Rex robot demonstration ${i + 1}`}
                  className="block w-full h-auto"
                >
                  <source src={withBasePath(src)} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
