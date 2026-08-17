import LoginForm from "@/app/login/components/LoginForm";

export default function Page() {
  return (
    <main 
      className="flex min-h-screen items-center justify-center px-4 py-10"
      style={{
        background: "linear-gradient(to top, #90CDE1 0%, #C4E5EF 50%, #FFFFFF 100%)"
      }}
    >
      
      <div 
        className="w-full max-w-3xl rounded-[2.5rem] p-8 sm:p-14 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)] border border-white/60 backdrop-blur-sm"
        style={{
          background: "linear-gradient(to top, rgba(200, 235, 245, 0.75) 0%, rgba(235, 247, 252, 0.85) 50%, rgba(255, 255, 255, 0.95) 100%)"
        }}
      >
        
        <div className="mb-8 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#002C5A] flex items-center justify-center gap-2">
            <span>اهلا وسهلا بك في منصتنا</span>
            <span>👋</span>
          </h1>
          <p className="mt-2 text-sm text-slate-500 font-medium">
            سجل الدخول الى حسابك
          </p>
        </div>

        <LoginForm />
        
      </div>
    </main>
  );
}