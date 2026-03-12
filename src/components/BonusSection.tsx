import SectionTag from './SectionTag';

const bonuses = [
  {
    badge: 'BÔNUS 1', featured: false, price: 'Valor: R$59',
    title: 'E-book Saltos de Desenvolvimento',
    desc: 'Entenda o que está acontecendo com o seu bebê em cada salto — e como isso afeta (ou não) o sono. Chega de achar que regrediu do nada.',
    icon: (
      <svg viewBox="0 0 64 64" width="60" height="60"><circle cx="32" cy="32" r="30" fill="#FFF0F3"/><path d="M20 44 Q32 20 44 44" stroke="#C96B7A" strokeWidth="3" fill="none" strokeLinecap="round"/><circle cx="32" cy="22" r="6" fill="#C96B7A" opacity="0.7"/><path d="M24 38 L40 38" stroke="#C96B7A" strokeWidth="2" strokeLinecap="round"/><path d="M26 42 L38 42" stroke="#C96B7A" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
  },
  {
    badge: 'BÔNUS 2', featured: true, price: 'Valor: R$59',
    title: 'E-book Atividades para Estimular Energia',
    desc: 'Como gastar a energia certa antes do sono, na hora certa, do jeito certo. Simples, prático, sem precisar de nada especial.',
    icon: (
      <svg viewBox="0 0 64 64" width="60" height="60"><circle cx="32" cy="32" r="30" fill="#E8F7F9"/><rect x="18" y="20" width="28" height="24" rx="4" fill="#38B2C0" opacity="0.3"/><rect x="22" y="24" width="8" height="8" rx="2" fill="#38B2C0"/><rect x="34" y="24" width="8" height="8" rx="2" fill="#38B2C0"/><rect x="22" y="36" width="20" height="3" rx="1.5" fill="#38B2C0" opacity="0.7"/><circle cx="42" cy="44" r="8" fill="#22A845"/><path d="M39 44 L41 46 L45 42" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
  {
    badge: 'BÔNUS 3', featured: false, price: 'Valor: R$87',
    title: 'Mini Curso A Rotina do Bebê',
    desc: 'O método funciona muito melhor quando tem uma rotina por trás. Esse mini curso te mostra como montar a rotina ideal para o seu bebê, sem engessamento.',
    icon: (
      <svg viewBox="0 0 64 64" width="60" height="60"><circle cx="32" cy="32" r="30" fill="#FFF8E7"/><circle cx="32" cy="26" r="10" fill="#F6C90E" opacity="0.4"/><path d="M24 38 Q32 28 40 38" stroke="#F6C90E" strokeWidth="2.5" fill="none" strokeLinecap="round"/><rect x="28" y="40" width="8" height="2" rx="1" fill="#F6C90E" opacity="0.7"/><path d="M22 18 Q32 10 42 18" stroke="#F6C90E" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
    ),
  },
];

const BonusSection = () => (
  <section className="bg-warm py-24">
    <div className="max-w-[1080px] mx-auto px-10">
      <SectionTag className="justify-center" dotColor="#C96B7A">Incluído no seu acesso</SectionTag>
      <h2 className="font-display text-[42px] font-bold leading-[1.2] text-foreground text-center mt-5">Você leva tudo isso junto</h2>
      <p className="text-center text-text-2 text-base max-w-[520px] mx-auto mt-4 mb-[52px] leading-[1.6]">Além do método completo, você recebe três bônus que aceleram sua jornada (e que você vai usar muito).</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {bonuses.map((b) => (
          <div key={b.badge} className={`bg-card rounded-[20px] p-8 px-7 flex flex-col items-start gap-3 border-2 transition-all duration-200 hover:-translate-y-1 ${b.featured ? 'border-primary' : 'border-transparent'}`} style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
            <span className={`text-[10px] font-bold tracking-[2px] uppercase px-3 py-1 rounded-[20px] ${b.featured ? 'bg-primary text-primary-foreground' : 'bg-teal-pale text-primary'}`}>{b.badge}</span>
            <div className="my-1">{b.icon}</div>
            <span className="text-xs font-semibold text-accent line-through opacity-80">{b.price}</span>
            <h3 className="font-display text-lg font-bold text-foreground leading-[1.3]">{b.title}</h3>
            <p className="text-sm text-text-2 leading-[1.6]">{b.desc}</p>
          </div>
        ))}
      </div>
      <div className="bg-primary text-primary-foreground rounded-2xl p-5 px-7 flex justify-center items-center gap-3 flex-wrap text-center">
        <span className="text-sm opacity-85 font-semibold">Total em bônus:</span>
        <span className="text-xl font-extrabold">R$205,00 <em className="not-italic text-sm font-medium opacity-85 ml-2">incluídos no seu acesso</em></span>
      </div>
    </div>
  </section>
);

export default BonusSection;
