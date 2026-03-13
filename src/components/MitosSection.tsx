import SectionTag from './SectionTag';

const myths = [
  {
    num: '01',
    title: '"Deixar o bebê dormir sozinho é abandono"',
    text: 'Autonomia de sono não é abandono. É uma habilidade que você ensina ao seu bebê, com amor e presença. A diferença está na forma, não na intenção.',
    baby: (
      <svg viewBox="0 0 120 90" width="120" height="90" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="75" rx="55" ry="12" fill="#E8F7F9" opacity="0.6"/>
        <ellipse cx="60" cy="52" rx="28" ry="20" fill="#FDDCB5"/>
        <circle cx="60" cy="30" r="18" fill="#FDDCB5"/>
        <path d="M52 29 Q55 27 58 29" stroke="#8B6343" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M62 29 Q65 27 68 29" stroke="#8B6343" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <circle cx="50" cy="33" r="4" fill="#F5A6A6" opacity="0.5"/>
        <circle cx="70" cy="33" r="4" fill="#F5A6A6" opacity="0.5"/>
        <ellipse cx="60" cy="36" rx="3" ry="2" fill="#E8A882"/>
        <path d="M56 40 Q60 43 64 40" stroke="#C97D5A" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        <path d="M43 22 Q47 10 60 12 Q73 10 77 22" stroke="#8B6343" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M35 58 Q45 48 60 50 Q75 48 85 58 Q82 72 60 72 Q38 72 35 58Z" fill="#A8DEDE" opacity="0.8"/>
        <text x="85" y="22" fontSize="11" fill="#38B2C0" fontWeight="bold" opacity="0.7">z</text>
        <text x="92" y="14" fontSize="13" fill="#38B2C0" fontWeight="bold" opacity="0.5">z</text>
        <text x="100" y="7" fontSize="15" fill="#38B2C0" fontWeight="bold" opacity="0.3">z</text>
      </svg>
    ),
  },
  {
    num: '02',
    title: '"Todo método tem choro. Sem choro não funciona."',
    text: 'O choro não é o mecanismo de aprendizado. É o sintoma de uma transição mal conduzida. O Dream Baby te ensina a estar presente em cada etapa.',
    baby: (
      <svg viewBox="0 0 120 90" width="120" height="90" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="75" rx="55" ry="12" fill="#E8F7F9" opacity="0.6"/>
        <ellipse cx="60" cy="55" rx="26" ry="18" fill="#FDDCB5"/>
        <circle cx="60" cy="32" r="18" fill="#FDDCB5"/>
        <ellipse cx="53" cy="30" rx="4" ry="4.5" fill="#5B8FAA"/>
        <ellipse cx="67" cy="30" rx="4" ry="4.5" fill="#5B8FAA"/>
        <circle cx="54" cy="29" r="1.5" fill="white"/>
        <circle cx="68" cy="29" r="1.5" fill="white"/>
        <path d="M48 23 Q53 21 56 24" stroke="#8B6343" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M64 24 Q67 21 72 23" stroke="#8B6343" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M53 40 Q60 47 67 40" stroke="#C97D5A" strokeWidth="1.5" fill="#E8A882" strokeLinecap="round"/>
        <path d="M49 35 Q47 42 49 46" stroke="#89CDD9" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M71 35 Q73 42 71 46" stroke="#89CDD9" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="49" cy="35" r="4" fill="#F5A6A6" opacity="0.4"/>
        <circle cx="71" cy="35" r="4" fill="#F5A6A6" opacity="0.4"/>
        <path d="M43 24 Q47 12 60 13 Q73 12 77 24" stroke="#8B6343" strokeWidth="2.5" fill="none"/>
        <text x="86" y="30" fontSize="18" fill="#C96B7A" opacity="0.7">♡</text>
      </svg>
    ),
  },
  {
    num: '03',
    title: '"Meu bebê é diferente. Nada funciona com ele."',
    text: 'É por isso que o Dream Baby começa com um quiz de perfil de sono, para adaptar o método ao seu filho específico, não a um bebê genérico.',
    baby: (
      <svg viewBox="0 0 120 90" width="120" height="90" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="80" rx="55" ry="10" fill="#E8F7F9" opacity="0.6"/>
        <rect x="22" y="55" width="76" height="28" rx="8" fill="#A8DEDE" opacity="0.5"/>
        <rect x="22" y="52" width="76" height="8" rx="4" fill="#38B2C0" opacity="0.4"/>
        <line x1="35" y1="55" x2="35" y2="83" stroke="white" strokeWidth="1" opacity="0.6"/>
        <line x1="48" y1="55" x2="48" y2="83" stroke="white" strokeWidth="1" opacity="0.6"/>
        <line x1="61" y1="55" x2="61" y2="83" stroke="white" strokeWidth="1" opacity="0.6"/>
        <line x1="74" y1="55" x2="74" y2="83" stroke="white" strokeWidth="1" opacity="0.6"/>
        <line x1="87" y1="55" x2="87" y2="83" stroke="white" strokeWidth="1" opacity="0.6"/>
        <circle cx="60" cy="42" r="15" fill="#FDDCB5"/>
        <path d="M54 45 Q60 51 66 45" stroke="#C97D5A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M53 38 Q56 35 59 38" stroke="#5B4037" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M61 38 Q64 35 67 38" stroke="#5B4037" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <circle cx="51" cy="44" r="4" fill="#F5A6A6" opacity="0.5"/>
        <circle cx="69" cy="44" r="4" fill="#F5A6A6" opacity="0.5"/>
        <path d="M46 35 Q50 26 60 27 Q70 26 74 35" stroke="#8B6343" strokeWidth="2" fill="none"/>
        <text x="85" y="20" fontSize="12" fill="#F6C90E">★</text>
        <text x="95" y="30" fontSize="9" fill="#F6C90E">★</text>
        <text x="100" y="15" fontSize="8" fill="#F6C90E">★</text>
      </svg>
    ),
  },
];

const MitosSection = () => (
  <section className="py-16" style={{ background: '#1E7A86' }}>
    <div className="max-w-[1100px] mx-auto px-6 sm:px-10">
      <div className="max-w-[620px] md:mx-auto md:text-center mb-12">
        <SectionTag style={{ background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.95)' }}>
          <span className="w-[9px] h-[9px] rounded-full flex-shrink-0" style={{ background: 'rgba(255,255,255,0.8)' }} />
          3 mitos sobre sono de bebê
        </SectionTag>
        <h2 className="font-display text-[32px] sm:text-[42px] font-bold leading-[1.2] text-primary-foreground mt-5">
          O que você ouviu que não é verdade
        </h2>
        <p className="text-lg leading-[1.7] mt-4" style={{ color: 'rgba(255,255,255,0.75)' }}>Antes de falar sobre o método, a gente precisa derrubar três crenças que travam a maioria das mães.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {myths.map((m) => (
          <div key={m.num} className="bg-card rounded-[28px] p-9 px-8 border-[1.5px] border-primary/[0.12] relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-primary before:to-accent">
            <div className="flex justify-center mb-4" style={{ filter: 'drop-shadow(0 4px 8px rgba(56,178,192,0.15)) saturate(1.3) contrast(1.15)' }}>
              {m.baby}
            </div>
            <div className="font-script text-[64px] font-bold text-primary/30 leading-none mb-4 select-none">{m.num}</div>
            <div className="text-[10px] font-bold tracking-[2px] uppercase text-accent mb-3">Mito</div>
            <h3 className="font-display text-xl font-bold text-foreground mb-3.5 leading-[1.35] italic">{m.title}</h3>
            <p className="text-[15px] text-text-2 leading-[1.75]">{m.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MitosSection;
