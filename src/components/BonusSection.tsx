import SectionTag from './SectionTag';

const bonuses = [
  {
    badge: 'BÔNUS 1', price: 'Valor: R$59', borderColor: '#C96B7A',
    title: 'E-book Saltos de Desenvolvimento',
    desc: 'Entenda o que está acontecendo com o seu bebê em cada salto e como isso afeta (ou não) o sono. Chega de achar que regrediu do nada.',
    icon: (
      <svg viewBox="0 0 80 80" width="60" height="60">
        <circle cx="40" cy="40" r="38" fill="#FFF0F3"/>
        {/* Open book */}
        <path d="M20 55 L40 50 L60 55 L60 25 L40 20 L20 25Z" fill="#F5D6DC" stroke="#C96B7A" strokeWidth="1.5"/>
        <line x1="40" y1="20" x2="40" y2="50" stroke="#C96B7A" strokeWidth="1.5"/>
        <path d="M24 30 L36 27" stroke="#C96B7A" strokeWidth="1" opacity="0.5"/>
        <path d="M24 35 L36 32" stroke="#C96B7A" strokeWidth="1" opacity="0.5"/>
        <path d="M24 40 L36 37" stroke="#C96B7A" strokeWidth="1" opacity="0.5"/>
        <path d="M44 27 L56 30" stroke="#C96B7A" strokeWidth="1" opacity="0.5"/>
        <path d="M44 32 L56 35" stroke="#C96B7A" strokeWidth="1" opacity="0.5"/>
        {/* Baby jumping */}
        <circle cx="52" cy="14" r="6" fill="#FDDCB5"/>
        <path d="M48 20 Q52 28 56 20" stroke="#C96B7A" strokeWidth="1.5" fill="none"/>
        <path d="M49 13 Q51 12 52 13" stroke="#5B4037" strokeWidth="1" fill="none"/>
        <path d="M53 13 Q54 12 55 13" stroke="#5B4037" strokeWidth="1" fill="none"/>
        <path d="M50 16 Q52 18 54 16" stroke="#C97D5A" strokeWidth="1" fill="none"/>
        <text x="46" y="10" fontSize="8" fill="#C96B7A" opacity="0.7">↑</text>
      </svg>
    ),
  },
  {
    badge: 'BÔNUS 2', price: 'Valor: R$59', borderColor: '#38B2C0',
    title: 'E-book Atividades para Estimular Energia',
    desc: 'Como gastar a energia certa antes do sono, na hora certa, do jeito certo. Simples, prático, sem precisar de nada especial.',
    icon: (
      <svg viewBox="0 0 80 80" width="60" height="60">
        <circle cx="40" cy="40" r="38" fill="#E8F7F9"/>
        {/* Baby playing */}
        <circle cx="40" cy="30" r="10" fill="#FDDCB5"/>
        <path d="M36 28 Q38 27 39 28" stroke="#5B4037" strokeWidth="1.2" fill="none"/>
        <path d="M41 28 Q43 27 44 28" stroke="#5B4037" strokeWidth="1.2" fill="none"/>
        <path d="M37 33 Q40 36 43 33" stroke="#C97D5A" strokeWidth="1.2" fill="none"/>
        <circle cx="35" cy="32" r="3" fill="#F5A6A6" opacity="0.4"/>
        <circle cx="45" cy="32" r="3" fill="#F5A6A6" opacity="0.4"/>
        <path d="M32 22 Q34 16 40 17 Q46 16 48 22" stroke="#8B6343" strokeWidth="2" fill="none"/>
        <ellipse cx="40" cy="50" rx="14" ry="10" fill="#A8DEDE" opacity="0.6"/>
        {/* Arms up - playing */}
        <path d="M30 42 Q26 34 24 30" stroke="#FDDCB5" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <path d="M50 42 Q54 34 56 30" stroke="#FDDCB5" strokeWidth="3" fill="none" strokeLinecap="round"/>
        {/* Stars */}
        <text x="18" y="28" fontSize="10" fill="#F6C90E">★</text>
        <text x="58" y="26" fontSize="8" fill="#F6C90E">★</text>
        <text x="24" y="18" fontSize="7" fill="#38B2C0">✦</text>
      </svg>
    ),
  },
  {
    badge: 'BÔNUS 3', price: 'Valor: R$87', borderColor: '#22A845',
    title: 'Mini Curso A Rotina do Bebê',
    desc: 'O método funciona muito melhor quando tem uma rotina por trás. Esse mini curso te mostra como montar a rotina ideal para o seu bebê, sem engessamento.',
    icon: (
      <svg viewBox="0 0 80 80" width="60" height="60">
        <circle cx="40" cy="40" r="38" fill="#FFF8E7"/>
        {/* Clock */}
        <circle cx="34" cy="36" r="16" fill="white" stroke="#38B2C0" strokeWidth="2"/>
        <line x1="34" y1="36" x2="34" y2="26" stroke="#38B2C0" strokeWidth="2" strokeLinecap="round"/>
        <line x1="34" y1="36" x2="42" y2="36" stroke="#38B2C0" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="34" cy="36" r="2" fill="#38B2C0"/>
        {/* Sleeping baby */}
        <circle cx="56" cy="50" r="8" fill="#FDDCB5"/>
        <path d="M53 49 Q55 48 56 49" stroke="#5B4037" strokeWidth="1" fill="none"/>
        <path d="M57 49 Q58 48 59 49" stroke="#5B4037" strokeWidth="1" fill="none"/>
        <path d="M54 52 Q56 53 58 52" stroke="#C97D5A" strokeWidth="1" fill="none"/>
        <path d="M52 44 Q54 40 56 42 Q58 40 60 44" stroke="#8B6343" strokeWidth="1.5" fill="none"/>
        {/* Moon */}
        <path d="M60 18 Q68 20 66 28 Q58 26 60 18Z" fill="#F6C90E" opacity="0.8"/>
        {/* Zzz */}
        <text x="62" y="40" fontSize="8" fill="#38B2C0" fontWeight="bold" opacity="0.6">z</text>
        <text x="66" y="34" fontSize="10" fill="#38B2C0" fontWeight="bold" opacity="0.4">z</text>
      </svg>
    ),
  },
];

const BonusSection = () => (
  <section className="bg-warm py-16">
    <div className="max-w-[1080px] mx-auto px-6 sm:px-10">
      <div className="md:text-center">
        <SectionTag dotColor="#C96B7A" className="md:justify-center">Incluído no seu acesso</SectionTag>
        <h2 className="font-display text-[32px] sm:text-[42px] font-bold leading-[1.2] text-foreground mt-5">Você leva tudo isso junto</h2>
        <p className="text-text-2 text-base max-w-[520px] md:mx-auto mt-4 mb-10 leading-[1.6]">Além do método completo, você recebe três bônus que aceleram sua jornada (e que você vai usar muito).</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {bonuses.map((b) => (
          <div key={b.badge} className="bg-card rounded-[20px] p-8 px-7 flex flex-col items-start gap-3 border-2 transition-all duration-200 hover:-translate-y-1" style={{ borderColor: b.borderColor, boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
            <span className="text-[10px] font-bold tracking-[2px] uppercase px-3 py-1 rounded-[20px] bg-teal-pale text-primary">{b.badge}</span>
            <div className="my-1">{b.icon}</div>
            <span className="text-[15px] font-semibold text-accent line-through">{b.price}</span>
            <h3 className="font-display text-lg font-bold text-foreground leading-[1.3]">{b.title}</h3>
            <p className="text-sm text-text-2 leading-[1.6]">{b.desc}</p>
          </div>
        ))}
      </div>
      <div className="bg-primary text-primary-foreground rounded-2xl p-4 px-7 flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
        <span className="text-sm opacity-85 font-semibold">Total em bônus:</span>
        <span className="font-display text-2xl sm:text-3xl font-extrabold line-through">R$205,00</span>
        <span className="text-sm font-medium opacity-85">totalmente incluídos no seu acesso</span>
      </div>
    </div>
  </section>
);

export default BonusSection;
