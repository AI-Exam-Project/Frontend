"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

const STATS = [
  { end: 2, suffix: "M+", label: "طالب ملتحق" },
  { end: 20, suffix: "+", label: "دورة متخصصة" },
  { end: 10, suffix: "+", label: "أعوام من الابتكار التعليمي" },
];

export default function HeroContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const statRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-badge",
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .set(".hero-line", { clipPath: "inset(0 0 0 100%)" }) 
        .to(
          ".hero-line",
          { clipPath: "inset(0 0 0 0%)", duration: 0.9, stagger: 0.18 },
          "-=0.2"
        )
        .fromTo(
          ".hero-desc",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.4"
        )
        .fromTo(
          ".hero-stat",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
          "-=0.3"
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.6)" },
          "-=0.2"
        );

      // Count-up للأرقام
      statRefs.current.forEach((el, i) => {
        if (!el) return;
        const counter = { val: 0 };
        gsap.to(counter, {
          val: STATS[i].end,
          duration: 1.6,
          delay: 1 + i * 0.1,
          ease: "power1.out",
          onUpdate: () => {
            el.textContent =
              Math.ceil(counter.val) + STATS[i].suffix;
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative z-10 max-w-7xl mx-auto px-8 flex justify-start flex-col items-start gap-6 mt-9"
    >
      <div className="hero-badge inline-block border border-[#38B793] text-[#38B793] text-sm font-medium px-4 py-1 rounded-full shadow-md bg-[#0000001F]">
        + بوابتك للتعلم التفاعلي
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg text-white mt-3">
        <span className="hero-line block overflow-hidden">
          تجربة تعلم شاملة عن بعد
        </span>
        <span className="hero-line block overflow-hidden">
          لتحقيق طموحك الأكاديمي
        </span>
      </h1>

      <p className="hero-desc text-gray-100 text-lg md:text-xl max-w-2xl leading-relaxed drop-shadow-md">
        تُقَدّم منصة &quot;مَسار التَّمَيُّز&quot; بِيئَة تَعْلِيمِيَّة
        افْتِرَاضِيَّة مُتَكَامِلَة، تَجْمَع بَيْنَ المَنَاهِج القَوِيَّة
        وَالتِّقْنِيَّات الحَدِيثَة لِإِعْدَاد الطُّلَّاب لِلْقُبُول
        الجَامِعِي عَن بُعْد، مَع دُرُوس حَيَّة، مُحْتَوَى رَقَمِي
        مُتَقَدِّم، وَمُتَابَعَة فَرْدِيَّة.
      </p>

      <div className="flex justify-start items-start gap-5 text-start py-6 w-full max-w-2xl">
        {STATS.map((stat, i) => (
          <div key={stat.label} className="flex items-center gap-5 last:gap-0">
            {i > 0 && <div className="h-16 w-[1px] bg-white ms-0 me-5" />}
            <div className="hero-stat">
              <span
                ref={(el) => { statRefs.current[i] = el; }}
                className="block text-2xl md:text-3xl font-bold text-[#38B793] drop-shadow-lg"
              >
                0
              </span>
              <span className="text-sm text-white mt-1 block">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-cta opacity-0">
        <Link
          href="/register"
          className="inline-block bg-[#38B793] text-white font-semibold text-xl px-12 py-3 rounded-full shadow-lg animate-custom-pulse mb-11"
        >
          سجل الآن مجاناً
        </Link>
      </div>
    </div>
  );
}