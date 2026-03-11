import { useState, useEffect } from 'react';

const App = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      root.style.backgroundColor = "#0A0A0B"; // Obsidian Void
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      root.style.backgroundColor = "#F2F2F7"; // Cool Light Grey
    }
  }, [isDark]);

  const projects = [
    { title: "Tirupati Divine Gateway", tag: "Divine Logic", desc: "A sanctuary for pilgrimage management.", link: "https://the-heritage-museum.lovable.app/" },
    { title: "Heritage Museum", tag: "Cultural Heritage", desc: "Digital preservation of local history.", link: "https://the-heritage-museum.lovable.app/" },
    { title: "Aetheris Oracle", tag: "AI Experience", desc: "Experimental UI with celestial states.", link: "https://aetheris-theta.vercel.app/" }
  ];

  return (
    <div className={`min-h-screen transition-all duration-700 p-8 ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
      <nav className="flex justify-between items-center max-w-6xl mx-auto mb-20">
        <h1 className="text-2xl font-bold tracking-tighter text-[#8B5CF6]">AARTI CHATURVEDI</h1>
        <button 
          onClick={() => setIsDark(!isDark)}
          className={`px-6 py-2 rounded-xl border transition-all font-medium ${isDark ? 'border-[#8B5CF6]/40 hover:bg-[#8B5CF6]/10' : 'border-slate-400 hover:bg-slate-100'}`}
        >
          {isDark ? '✨ EMERGE' : '🌑 WITHDRAW'}
        </button>
      </nav>

      <header className="max-w-4xl mx-auto text-center mb-32">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Crafting Digital <span className="text-[#8B5CF6]">Atmospheres</span>.
        </h2>
        <p className="text-xl opacity-60">Front-End Developer | Jaipur, Rajasthan</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((p, i) => (
          <div key={i} className={`p-8 rounded-[2rem] border transition-all duration-500 hover:scale-[1.02] ${isDark ? 'bg-white/5 border-white/10 hover:border-[#8B5CF6]/50' : 'bg-black/5 border-black/5 shadow-xl hover:border-[#8B5CF6]/30'}`}>
            <span className="text-xs font-bold uppercase tracking-widest text-[#8B5CF6]">{p.tag}</span>
            <h3 className="text-3xl font-bold mt-2 mb-4">{p.title}</h3>
            <p className="opacity-60 mb-6 leading-relaxed">{p.desc}</p>
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-block text-[#8B5CF6] font-bold group">
              VIEW PROJECT <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;