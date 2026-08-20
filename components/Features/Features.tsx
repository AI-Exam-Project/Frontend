"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeatureCard from "./FeatureCard";

gsap.registerPlugin(ScrollTrigger);

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor?: string;
}

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const featuresList: FeatureItem[] = [
    {
      title: "محتوى مكيّف ومصمّم خصيصاً للمنهاج",
      description:
        "تغطية شاملة ودقيقة لجميع المواد والأفرع (علمي، أدبي، ريادي...) مع تركيز خاص على نمط أسئلة الوزارة والامتحانات النهائية",
      icon: (
        <Image src="/interactiv.png" alt="محتوى مكيف" width={48} height={48} className="w-full h-full object-contain" />
      ),
      bgColor: "bg-white",
    },
    {
      title: "بنك أسئلة واختبارات وزارية سابقة",
      description:
        "آلية حل امتحانات السنوات السابقة مع تصحيح تلقائي وإظهار طريقة الحل النموذجية خطوة بخطوة.",
      icon: (
        <Image src="/exam-time (1) 1.png" alt="بنك أسئلة" width={48} height={48} className="w-full h-full object-contain" />
      ),
      bgColor: "bg-[#F0F4F8]",
    },
    {
      title: "خطط دراسية وجداول مخصصة",
      description:
        "إمكانية تنظيم الوقت وإعداد جدول دراسي يناسب كل طالب بناءً على مستواه والوقت المتبقي حتى امتحانات التوجيهي.",
      icon: (
        <Image src="/daily.png" alt="خطط دراسية" width={48} height={48} className="w-full h-full object-contain" />
      ),
      bgColor: "bg-[#FFF9DB]",
    },
    {
      title: "ملخصات وبطاقات مراجعة سريعة",
      description:
        "تركيز على القوانين، والمفاهيم، والقواعد الأساسية للمراجعة قبل الامتحانات مباشرة.",
      icon: (
        <Image src="/search.png" alt="ملخصات" width={48} height={48} className="w-full h-full object-contain" />
      ),
      bgColor: "bg-[#E6F7FF]",
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ===== خلفية ديكورية (parallax خفيف جداً) =====
      gsap.to(".feature-blob-1", {
        y: -25,
        x: 12,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
      gsap.to(".feature-blob-2", {
        y: 30,
        x: -15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.8,
        },
      });

      // ===== عنوان السكشن: fade + slide بسيط، بدون blur =====
      gsap.fromTo(
        ".features-eyebrow",
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: ".features-header", start: "top 85%" },
        }
      );

      gsap.fromTo(
        ".features-title",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          delay: 0.06,
          scrollTrigger: { trigger: ".features-header", start: "top 85%" },
        }
      );

      gsap.fromTo(
        ".features-sub",
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          delay: 0.14,
          scrollTrigger: { trigger: ".features-header", start: "top 85%" },
        }
      );

      // ===== الكروت: fade + slide بسيط بدل الـ rotateX/blur الثقيلة =====
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const fromRight = i % 2 === 0; // RTL: يمين أولاً

        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 30,
            x: fromRight ? 16 : -16,
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
            },
          }
        );
      });
      // ملاحظة: تم حذف حركة الـ idle floating المستمرة للأيقونات بناءً على طلب التخفيف
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="features"
      className="relative py-48 overflow-hidden"
      dir="rtl"
      ref={sectionRef}
    >
      {/* طبقات خلفية ديكورية (parallax خفيف) */}
      <div className="feature-blob-1 pointer-events-none absolute -top-20 -left-32 w-[420px] h-[420px] rounded-full bg-emerald-100/30 blur-3xl" />
      <div className="feature-blob-2 pointer-events-none absolute bottom-0 -right-24 w-[380px] h-[380px] rounded-full bg-blue-100/30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="features-header text-center max-w-3xl mx-auto mb-20">
          <span className="features-eyebrow inline-block text-emerald-600 font-bold text-sm tracking-widest mb-4 uppercase">
            لماذا نحن
          </span>
          <h2 className="features-title text-3xl md:text-4xl font-black text-[#002C5A] tracking-tight mb-4">
            لماذا منصتنا هي بوابتك الحقيقية للنجاح والتفوق؟
          </h2>
          <p className="features-sub text-slate-500 text-base md:text-lg">
            هيا نكتشف لماذا مسار التميز هي البوابة الحقيقية للنجاح والتفوق
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuresList.map((item, index) => (
            <FeatureCard
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              index={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              bgColor={item.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}