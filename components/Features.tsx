import Image from "next/image";
import FeatureCard from "./FeatureCard";

export default function Features() {
    const featuresList = [
        {
            title: "محتوى مكيّف ومصمّم خصيصاً للمنهاج", 
            description: "تغطية شاملة ودقيقة لجميع المواد والأفرع (علمي، أدبي، ريادي...) مع تركيز خاص على نمط أسئلة الوزارة والامتحانات النهائية", 
            icon: <img src="/interactiv.png" alt="محتوى مكيف" className="w-full h-full object-contain"/>,
        
        },
        {
            title: "بنك أسئلة واختبارات وزارية سابقة",
            description: "آلية حل امتحانات السنوات السابقة مع تصحيح تلقائي وإظهار طريقة الحل النموذجية خطوة بخطوة.",
            icon: <img src="/exam-time (1) 1.png" alt="بنك أسئلة" className="w-full h-full object-contain" />,
            bgColor: "bg-[#F0F4F8]"
        },
        {
            title: "خطط دراسية وجداول مخصصة",
            description: "إمكانية تنظيم الوقت وإعداد جدول دراسي يناسب كل طالب بناءً على مستواه والوقت المتبقي حتى امتحانات التوجيهي.",
            icon: <img src="/daily.png" alt="خطط دراسية" className="w-full h-full object-contain" />,
            bgColor: "bg-[#FFF9DB]",

        },
        {
            title: "ملخصات وبطاقات مراجعة سريعة",
            description: "تركيز على القوانين، والمفاهيم، والقواعد الأساسية للمراجعة قبل الامتحانات مباشرة.",
            icon: <img src="/search.png" alt="ملخصات" className="w-full h-full object-contain" />,
            bgColor: "bg-[#E6F7FF]",
        },
    ];

    return (
        <section id="features" className="py-48 " dir="rtl">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-[#002C5A] tracking-tight mb-4">
                        لماذا منصتنا هي بوابتك الحقيقية للنجاح والتفوق؟
                    </h2>
                    <p className="text-slate-500 text-base md:text-lg">
                        هيا نكتشف لماذا مسار التميز هي البوابة الحقيقية للنجاح والتفوق
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {featuresList.map((item, index) => (
                        <FeatureCard
                            key={index}
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