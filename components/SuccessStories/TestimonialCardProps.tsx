import Image from "next/image";
interface TestimonialCardProps {
    name:string;
    quote:string;
    avatar:string;

}
export default function TestimonialCardProps ({name , quote , avatar}:TestimonialCardProps) {

    return(
        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-lg">
            <div className="mb-3 flex items-center gap-3">
                <Image src={avatar} alt={name} width={40} height={40} className="rounded-full"/>
             <h3 className="font-bold text-[#002C5A]">{name}</h3>
            </div>
         <p className="text-sm leading-relaxed text-slate-600">{quote}</p>
        </div>
    )
}