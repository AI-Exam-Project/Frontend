"use client";

import { useRef } from "react";
import { gsap } from "gsap";

/**
 * Hook خفيف لتأثير tilt + spotlight بسيط عند تمرير الماوس فوق الكرت.
 * تم تخفيف القيم مقارنة بالنسخة السابقة (rotate أقل، بدون scale مبالغ فيه).
 */
export function useTiltEffect() {
  const innerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const quickSetters = useRef<{
    rotateX?: gsap.QuickToFunc;
    rotateY?: gsap.QuickToFunc;
    glowX?: gsap.QuickToFunc;
    glowY?: gsap.QuickToFunc;
    glowOpacity?: gsap.QuickToFunc;
  }>({});

  const setupQuickSetters = () => {
    if (!innerRef.current) return;
    quickSetters.current.rotateX = gsap.quickTo(innerRef.current, "rotateX", {
      duration: 0.5,
      ease: "power2.out",
    });
    quickSetters.current.rotateY = gsap.quickTo(innerRef.current, "rotateY", {
      duration: 0.5,
      ease: "power2.out",
    });
    if (glowRef.current) {
      quickSetters.current.glowX = gsap.quickTo(glowRef.current, "--x", {
        duration: 0.3,
        ease: "power2.out",
      });
      quickSetters.current.glowY = gsap.quickTo(glowRef.current, "--y", {
        duration: 0.3,
        ease: "power2.out",
      });
      quickSetters.current.glowOpacity = gsap.quickTo(glowRef.current, "opacity", {
        duration: 0.3,
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!Object.keys(quickSetters.current).length) setupQuickSetters();
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    // قيم مخففة مقارنة بالنسخة السابقة (كانت 10 / 8)
    const rotateY = (px - 0.5) * 5;
    const rotateX = (0.5 - py) * 4;

    quickSetters.current.rotateX?.(rotateX);
    quickSetters.current.rotateY?.(rotateY);
    quickSetters.current.glowX?.(px * 100);
    quickSetters.current.glowY?.(py * 100);
    quickSetters.current.glowOpacity?.(1);
  };

  const handleMouseEnter = () => {
    // تم إزالة الـ scale على الكرت كامل، وتخفيف حركة الأيقونة
    const iconEl = innerRef.current?.querySelector(".feature-icon");
    if (iconEl) {
      gsap.to(iconEl, { scale: 1.05, rotate: -2, duration: 0.35, ease: "power2.out" });
    }
  };

  const handleMouseLeave = () => {
    quickSetters.current.rotateX?.(0);
    quickSetters.current.rotateY?.(0);
    quickSetters.current.glowOpacity?.(0);

    const iconEl = innerRef.current?.querySelector(".feature-icon");
    if (iconEl) {
      gsap.to(iconEl, { scale: 1, rotate: 0, duration: 0.3, ease: "power2.out" });
    }
  };

  return { innerRef, glowRef, handleMouseMove, handleMouseEnter, handleMouseLeave };
}