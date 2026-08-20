"use client";

import { forwardRef } from "react";
import { useTiltEffect } from "./hooks/useTiltEffect";

interface FeatureCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  bgColor?: string;
  index?: number;
}

const FeatureCard = forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ title = "", description = "", icon = null, bgColor = "", index = 0 }, ref) => {
    const { innerRef, glowRef, handleMouseMove, handleMouseEnter, handleMouseLeave } =
      useTiltEffect();

    return (
      <div ref={ref} className="feature-card-outer" style={{ transformStyle: "preserve-3d" }}>
        <div
          ref={innerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="feature-card group relative bg-white rounded-3xl p-7 shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-gray-100/80 flex items-center justify-between gap-6 overflow-hidden will-change-transform transition-shadow duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Spotlight خفيف يتبع الماوس */}
          <div
            ref={glowRef}
            className="pointer-events-none absolute inset-0 opacity-0"
            style={{
              background:
                "radial-gradient(260px circle at var(--x, 50%) var(--y, 50%), rgba(16,185,129,0.07), transparent 70%)",
            }}
          />

          <div
            className={`feature-icon w-20 h-20 shrink-0 rounded-2xl flex items-center justify-center p-2.5 border border-slate-100 shadow-inner relative z-10 ${bgColor}`}
          >
            {icon}
          </div>

          <div className="text-right flex-1 relative z-10">
            <h3 className="text-xl font-bold text-slate-900 mb-2.5 transition-colors duration-300 group-hover:text-emerald-600">
              {title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
          </div>

          <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-gradient-to-l from-emerald-500 to-blue-500 transition-all duration-500 ease-out group-hover:w-full" />
        </div>
      </div>
    );
  }
);

FeatureCard.displayName = "FeatureCard";
export default FeatureCard;