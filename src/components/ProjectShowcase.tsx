"use client";

import { useState } from "react";
import { withBasePath } from "@/lib/basePath";

/**
 * In-card media showcase for projects that ship a featured image and/or short
 * demo clips (currently only "Rex-Robot-Dog"). Renders nothing unless media is
 * supplied, so every other project card stays visually unchanged.
 *
 * Videos are shown as a uniform row of poster thumbnails; clicking one mounts a
 * real HTML5 <video> (controls, playsInline) in place, so nothing downloads
 * until the visitor asks for it.
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
  const [playing, setPlaying] = useState<number | null>(null);
  const hasVideos = videos.length > 0;
  const poster = image ? withBasePath(image) : undefined;

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
            className="block w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover/media:scale-[1.03]"
          />
        </div>
      )}

      {hasVideos && (
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-500/70 mb-2">
            Robot in Action
          </h4>
          <div className="grid grid-cols-3 gap-3">
            {videos.map((src, i) => {
              const label = `Rex robot demonstration ${i + 1}`;
              return (
                <div
                  key={src}
                  className="group/vid relative aspect-[4/3] overflow-hidden rounded-lg border border-cyan-900/35 bg-black/40 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_0_1px_rgba(0,240,255,0.15),0_0_20px_rgba(0,240,255,0.13)]"
                >
                  {playing === i ? (
                    <video
                      controls
                      autoPlay
                      muted
                      playsInline
                      preload="metadata"
                      aria-label={label}
                      className="absolute inset-0 h-full w-full bg-black object-contain"
                    >
                      <source src={withBasePath(src)} type="video/mp4" />
                    </video>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setPlaying(i)}
                      aria-label={`Play ${label}`}
                      className="absolute inset-0 h-full w-full"
                      style={
                        poster
                          ? {
                              backgroundImage: `url(${poster})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }
                          : undefined
                      }
                    >
                      <span className="absolute inset-0 bg-[#050810]/35 transition-colors duration-300 group-hover/vid:bg-[#050810]/15" />
                      <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-300/70 bg-[#050810]/60 text-cyan-200 backdrop-blur-sm transition-transform duration-300 group-hover/vid:scale-110">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
