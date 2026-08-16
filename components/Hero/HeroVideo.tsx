import Link from "next/link";
export default function HeroVideo (){
    return(
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
            <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover"
            >
                <source src="/classroom-video.mp4" type="video/mp4" />
                عذراً، متصفحك لا يدعم تشغيل الفيديو.
            </video>

            <div className="absolute inset-0 bg-[#002C5A66]"></div>
        </div>
    )
}