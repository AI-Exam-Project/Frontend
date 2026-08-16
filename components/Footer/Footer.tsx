import Image from "next/image";
import FooterLinksColumn from "./FooterLinksColumn";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="w-full  pt-16">
      <div className="w-full rounded-t-[2.5rem] bg-white px-6 pt-16 pb-8 shadow-[0_-10px_40px_rgba(0,0,0,0.04)] border-t border-slate-100 sm:px-12 lg:px-20">
        
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8 items-start">
          
          <div className="flex flex-col items-start lg:col-span-1">
            <div className="relative h-24 w-36">
              <Image src="/logo.png" alt="مسار التميز" fill className="object-contain lg:object-right" />
            </div>
          </div>

          <FooterLinksColumn
            title="القائمة"
            links={[
              { href: "/#hero", label: "الرئيسية" },
              { href: "/#features", label: "من نحن" },
              { href: "/#contact", label: "الخدمات" },
              { href: "/#success-stories", label: "قصص نجاح" },
            ]}
          />

          <FooterLinksColumn
            title="الشركة"
            links={[
              { href: "/terms", label: "الشروط والأحكام" },
              { href: "/privacy", label: "سياسة الخصوصية" },
            ]}
          />

          <FooterLinksColumn
            title="الدعم"
            links={[
              { href: "/contact", label: "اتصل بنا" },
              { href: "/faq", label: "الأسئلة الشائعة" },
            ]}
          />

          <div className="flex flex-col gap-3 lg:col-span-1">
            <h3 className="text-base font-bold text-[#002C5A]">اتصل بنا</h3>
            <p className="text-sm font-medium text-slate-600 dir-ltr text-right">0912345678</p>
            <p className="text-sm text-slate-500 break-words">support@Path to Excellence.edu.com</p>
            <div className="mt-2">
              <input
                type="email"
                placeholder="بريدك الالكتروني"
                className="w-full rounded-full border border-slate-200 bg-white px-4 py-2.5 text-right text-sm text-slate-700 placeholder-slate-400 outline-none transition-all focus:border-[#002C5A] focus:ring-1 focus:ring-[#002C5A]"
              />
            </div>
          </div>

        </div>

        <div className="my-10 h-[1px] w-full bg-slate-200" />

        <FooterBottom />

      </div>
    </footer>
  );
}