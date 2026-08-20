"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        videoRef.current,
        { scale: 1.15, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.8, ease: "power2.out" }
      );

      // Ken Burns: زوم بطيء ومستمر بعد التحميل
      gsap.to(videoRef.current, {
        scale: 1.08,
        duration: 20,
        ease: "none",
        delay: 1.8,
      });

      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.2, delay: 0.3 }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/classroom-video.mp4" type="video/mp4" />
        عذراً، متصفحك لا يدعم تشغيل الفيديو.
      </video>

      <div
        ref={overlayRef}
        className="absolute inset-0 bg-[#002C5A66] opacity-0"
      />
    </div>
  );
}