export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#020617] text-slate-100">
      <div className="fixed inset-0 z-0">
        <div className="absolute -top-[10%] -right-[10%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[250px]" />
        
        <div className="absolute -bottom-[10%] -left-[10%] h-[600px] w-[600px] rounded-full bg-blue-900/30 blur-[150px]" />
        
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>
      <main className="relative z-10 flex flex-col min-h-screen">
        {children}
      </main>
    </div>
  );
}