export default function FeatureCard({ title = "", description = "", icon = null, bgColor = "" }) {
  return (
    <div className="group bg-white rounded-3xl p-7 shadow-[0_10px_35px_rgba(0,0,0,0.05)] border border-gray-100/80 flex items-center justify-between gap-6 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 ">
       <div className={`w-20 h-20 shrink-0 rounded-2xl flex items-center justify-center p-2.5 border border-slate-100 shadow-inner ${bgColor} `}>
        {icon}
      </div>
      <div className="text-right flex-1">
        <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-emerald-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          {description}
        </p>
      </div>

     

    </div>
  );
}