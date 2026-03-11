import { useState, useEffect } from 'react';

const App = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      root.style.backgroundColor = "#050505";
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      root.style.backgroundColor = "#FDFBF7";
    }
  }, [isDark]);

  const projects = [
    { 
      title: "Tirupati Divine Gateway", 
      tag: "Sacred Foundation", 
      desc: "Large-scale spiritual portal logic designed for pilgrimage management.",
      link: "https://tirupati-divine-gateway.vercel.app/" 
    },
    { 
      title: "The Heritage Museum", 
      tag: "Cultural Art", 
      desc: "Interactive Rajasthani history archive preserving local tradition.",
      link: "https://the-heritage-museum.vercel.app/" 
    },
    { 
      title: "Aetheris Oracle", 
      tag: "Future Tech", 
      desc: "AI-driven celestial application with advanced theme management.",
      link: "https://aetheris-app.vercel.app/" 
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 p-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
      <nav className="flex justify-between items-center max-w-6xl mx-auto mb-20">
        <h1 className="text-2xl tracking-[0.2em] font-serif text-[#EAB308]">AARTI CHATURVEDI</h1>
        <button 
          onClick={() => setIsDark(!isDark)}
          className="px-6 py-2 rounded-full border border-[#EAB308]/40 hover:bg-[#EAB308]/10 transition-all font-medium"
        >
          {isDark ? '✨ SEEK LIGHT' : '🌑 SEEK VOID'}
        </button>
      </nav>

      <header className="max-w-4xl mx-auto text-center mb-32">
        <h2 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
          Modern Sanctuaries for <span className="italic text-[#EAB308]">Ancient Ideas</span>.
        </h2>
        <p className="text-xl opacity-70">Jaipur-based Vibe Coder | Building for BCA 2026</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((p, i) => (
          <div key={i} className={`p-8 rounded-3xl border border-[#EAB308]/20 backdrop-blur-md flex flex-col justify-between ${isDark ? 'bg-white/5' : 'bg-black/5 shadow-xl'}`}>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#EAB308]">{p.tag}</span>
              <h3 className="text-3xl font-serif mt-2 mb-4">{p.title}</h3>
              <p className="opacity-60 mb-6">{p.desc}</p>
            </div>
            
            <a 
              href={p.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#EAB308] font-bold border-b border-[#EAB308] w-fit cursor-pointer hover:opacity-50 transition-opacity no-underline pb-1"
            >
              EXPLORE →
            </a>
          </div>
        ))}
      </div>

      <footer className="mt-40 text-center opacity-40 text-sm italic">
        Building the future in Jaipur, 2026.
      </footer>
    </div>
  );
};

export default App;