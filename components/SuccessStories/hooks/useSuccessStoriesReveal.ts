"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * أنيميشن reveal عند السكرول لسكشن قصص النجاح — بدون أي تعديل على الشكل.
 * - العنوان: fade + slide بسيط
 * - الصور: fade + slide من الجهتين مع parallax خفيف عند السكرول
 * - كروت الشهادات: reveal متسلسل (stagger) واحدة تلو الأخرى
 */
export function useSuccessStoriesReveal() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // العنوان
      gsap.fromTo(
        ".stories-title",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 1.3,
          ease: "power2.out",
          scrollTrigger: { trigger: ".stories-title", start: "top 85%" },
        }
      );

      // الصورة اليمين
      gsap.fromTo(
        ".stories-img-right",
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );

      // الصورة اليسار (تدخل بعد الأولى بقليل)
      gsap.fromTo(
        ".stories-img-left",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );

      // parallax خفيف جداً للصور أثناء السكرول
      gsap.to(".stories-img-right", {
        y: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.3,
        },
      });
      gsap.to(".stories-img-left", {
        y: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.3,
        },
      });

      // كروت الشهادات: reveal متسلسل
      gsap.fromTo(
        ".testimonial-item",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.22,
          scrollTrigger: { trigger: ".testimonial-item", start: "top 88%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return { sectionRef };
}