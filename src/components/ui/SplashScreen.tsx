"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Mencegah scroll selama loading
    document.body.style.overflow = "hidden";

    // Mulai fade out setelah 1 detik
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
      document.body.style.overflow = "unset";
    }, 1000);

    // Sembunyikan sepenuhnya setelah efek transisi (500ms) selesai
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-opacity duration-500 ease-in-out ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      } ${!isVisible ? "hidden" : ""}`}
    >
      <div className="relative flex items-center justify-center">
        {/* Logo yang berputar lebih cepat */}
        <div className="animate-[spin_1.5s_linear_infinite]">
          <Image
            src="/assets/logo2.png"
            alt="Loading Brocleanx..."
            width={240}
            height={240}
            className="h-28 w-auto object-contain sm:h-36"
            priority
          />
        </div>
        
        {/* Glow effect di belakang logo */}
        <div className="absolute inset-0 -z-10 h-56 w-56 animate-pulse rounded-full bg-[#0a2e22] opacity-40 blur-3xl" />
      </div>
    </div>
  );
}
