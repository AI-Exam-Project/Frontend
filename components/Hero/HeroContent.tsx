import Link from 'next/link';

export default function HeroContent() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-8  flex justify-start flex-col items-start gap-6 mt-9">
      
      <div className="inline-block border border-[#38B793]  text-[#38B793] text-sm font-medium px-4 py-1 rounded-full shadow-md bg-[#0000001F] ">
        + بوابتك للتعلم التفاعلي
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg text-white mt-3">
        تجربة تعلم شاملة عن بعد <br /> لتحقيق طموحك الأكاديمي
      </h1>

    <p className="text-gray-100 text-lg md:text-xl max-w-2xl leading-relaxed drop-shadow-md">
  تُقَدّم منصة &quot;مَسار التَّمَيُّز&quot; بِيئَة تَعْلِيمِيَّة افْتِرَاضِيَّة مُتَكَامِلَة، تَجْمَع بَيْنَ المَنَاهِج القَوِيَّة وَالتِّقْنِيَّات الحَدِيثَة لِإِعْدَاد الطُّلَّاب لِلْقُبُول الجَامِعِي عَن بُعْد، مَع دُرُوس حَيَّة، مُحْتَوَى رَقَمِي مُتَقَدِّم، وَمُتَابَعَة فَرْدِيَّة.
</p>

      <div className="flex justify-start items-start gap-5  text-start py-6 w-full max-w-2xl ">
        <div  >
          <span className="block text-2xl md:text-3xl font-bold text-[#38B793] drop-shadow-lg">2M+</span>
          <span className="text-sm text-white mt-1 block">طالب ملتحق</span>
        </div>
        <div className="h-16 w-[1px] bg-white"></div>
        <div>
          <span className="block text-2xl md:text-3xl font-bold text-[#38B793] drop-shadow-lg">20+</span>
          <span className="text-sm text-white mt-1 block">دورة متخصصة</span>
        </div>
        <div className="h-16 w-[1px] bg-white"></div>
        <div >
          <span className="block text-2xl md:text-3xl font-bold text-[#38B793] drop-shadow-lg">10+</span>
          <span className="text-sm text-white mt-1 block">أعوام من الابتكار التعليمي</span>
        </div>
      </div>

      <div>
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