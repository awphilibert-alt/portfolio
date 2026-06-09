"use client";

import { useState } from "react";

export function ImageLightbox({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="bg-white border border-dark/5 overflow-hidden cursor-zoom-in"
        onClick={() => setOpen(true)}
      >
        <img src={src} alt={alt} className="w-full" />
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-dark/90 flex items-center justify-center cursor-zoom-out p-6"
          onClick={() => setOpen(false)}
        >
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </>
  );
}
