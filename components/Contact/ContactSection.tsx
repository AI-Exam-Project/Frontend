"use client";

import { useContactSectionReveal } from "./hooks/useContactSectionReveal";
import ContactForm from "./ContactForm";

export default function ContactSection () {
    const { sectionRef } = useContactSectionReveal();

    return(
        <section id="contact" ref={sectionRef} className="w-full bg-sky-50/60 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-lg text-center">
        <div className="mb-8 flex flex-col gap-2">
          <span className="contact-eyebrow text-xl font-medium text-[#002C5A]">
            تواصل معنا
          </span>
          <h2 className="contact-title text-xl font-bold text-[#002C5A] sm:text-2xl">
            فريقنا جاهز للرد على اسئلتكم
          </h2>
          <p className="contact-cta text-xl font-bold text-[#38B793] sm:text-xl">
            تواصلوا معنا الآن
          </p>
        </div>
          <ContactForm/>
        
      </div>
    </section>
    )
}