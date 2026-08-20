"use client";

import Image from "next/image";
import TestimonialCard from "./TestimonialCardProps";
import { useSuccessStoriesReveal } from "./hooks/useSuccessStoriesReveal";

const testimonials = [
  {
    name: "أحمد ابراهيم",
    avatar: "/man-avatar 1.png",
    quote:
      "قبل الامتحانات كنت أشعر بالضياع وتراكم المواد، قررت أن أبدأ درس واحد كل يوم وأنظم وقتي بذكاء بفضل الاستمرار والتوكل على الله، تحول التوتر إلى نجاح وحصلت على معدل 97.8% وحققت حلمي.",
  },
  {
    name: "فاطمة محمود",
    avatar: "/woman (1) 1.png",
    quote:
      "كانت عقدتي الكبرى هي مادة الرياضيات وأخاف منها كثيراً. قررت مواجهة خوفي وحل سؤال واحد يومياً بفهم ودون عجلة، مع الوقت زادت ثقتي بنفسي وحصلت على العلامة الكاملة التي رفعت معدلي إلى 96.5%.",
  },
  {
    name: "آدم ياسين",
    avatar: "/dad 1.png",
    quote:
      "كنت أجد صعوبة كبيرة في حفظ المواد الأدبية الطويلة، حتى بدأت أدرس باستخدام المخططات الذهنية والملخصات السريعة، هذه الخطوة البسيطة وفرت علي جهداً كبيراً، وتوجت تعبي بمعدل 95.2%.",
  },
  {
    name: "سارة أحمد",
    avatar: "/woman 1.png",
    quote:
      "كنت أدرس لساعات طويلة دون فائدة وأشعر بالإرهاق، عندما تعلمت كيف أدرس بذكاء وأعطي نفسي فترات راحة منتظمة، أصبحت أستوعب أسرع ووصلت لمعدل 96% بكل هدوء.",
  },
  {
    name: "محمد علي",
    avatar: "/man 1@2x.png",
    quote:
      "كنت أنشغل كثيراً بالهاتف والتفكير في النتيجة، أعدت المشتتات وركزت فقط على المهمة التي بين يدي كل يوم، وكانت المفاجأة أني تجاوزت توقعاتي وحصلت على 98.1%.",
  },
];

export default function SuccessStories() {
  const { sectionRef } = useSuccessStoriesReveal();

  return (
    <section id="success-stories" ref={sectionRef} className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-start lg:gap-12">

          {/* section Image  */}
          <div className="relative mt-16 lg:col-span-5 lg:mt-0 lg:sticky lg:top-24">
            <div className="relative h-[550px] w-full">
              <div className="stories-img-left absolute top-16 left-4 h-[420px] w-[300px] overflow-hidden rounded-[2.5rem] sm:w-[340px]">
                <Image
                  src="/Rectangle 222.png"
                  alt="طالبة تدرس"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="stories-img-right absolute top-0 right-4 h-[380px] w-[280px] overflow-hidden rounded-[2.5rem] sm:w-[320px]">
                <Image
                  src="/Rectangle 61.png"
                  alt="طالب يدرس"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* section Card */}
          <div className="lg:col-span-7 flex flex-col">
            <h2 className="stories-title mb-12 text-3xl font-extrabold text-[#002C5A] sm:text-4xl">
              قصص نجاح طلابنا في منصة مسار التميز
            </h2>
            
            <div className="flex flex-col gap-6">
              {testimonials.map((t, index) => (
                <div 
                  key={t.name}
                  className={`testimonial-item max-w-xl transition-all duration-300 ${
                    index % 2 === 1 ? "lg:mr-16" : "lg:ml-0"
                  }`}
                >
                  <TestimonialCard {...t} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}