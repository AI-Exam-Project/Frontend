"use client"
import React, { useState } from "react";

export default function ContactForm () {
    const [sending , setSending] = useState(false);
    async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
      e.preventDefault();
      setSending(true);

      await new Promise((res)=> setTimeout(res , 800));
      setSending(false);
       e.currentTarget.reset();
    }
    return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="name" placeholder="اسمك كامل" required className="contact-field w-full rounded-full border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#002C5A]" />
        <input
        name="email"
        type="email"
        placeholder="البريد الالكتروني"
        required
        className="contact-field w-full rounded-full border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#002C5A]"
      />

      <input
        name="phone"
        type="tel"
        placeholder="رقم الهاتف"
        required
        className="contact-field w-full rounded-full border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#002C5A] text-right"
      />

      <textarea
        name="message"
        placeholder="الرسالة"
        required
        rows={5}
        className="contact-field w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#002C5A]"
      />
    <button
  type="submit"
  disabled={sending}
  className="contact-field rounded-xl bg-[#002C5A] py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#003a73] hover:shadow-lg hover:shadow-[#002C5A]/20 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
   >
  {sending ? "جاري الإرسال..." : "تواصل معنا"}
   </button>

        </form>
    )
}