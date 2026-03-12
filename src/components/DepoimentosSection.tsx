import SectionTag from './SectionTag';

const testimonials = [
  { initials: 'JF', color: '#E91E63', name: 'Ju Ferreira', tag: 'Bebê 3 meses · só dormia no colo', text: '"No quarto dia ela foi pro berço acordada e dormiu sozinha. Fiquei olhando a câmera do monitor sem acreditar. Sem choro. Nem ela nem eu."' },
  { initials: 'CS', color: '#9C27B0', name: 'Camila S.', tag: 'Já tinha comprado 2 outros cursos', text: '"A Day explica o porquê de cada coisa e isso me deu segurança real pra continuar. Meu filho de 4 meses tá no berço faz 5 dias seguidos."' },
  { initials: 'RM', color: '#38B2C0', name: 'Re Martins', tag: 'Comprou ainda grávida', text: '"Todo mundo achou esquisito eu comprar grávida. Minha filha tem 2 meses e já dorme no berço com rotininha certinha. As amigas não estão rindo mais."' },
  { initials: 'AP', color: '#FF5722', name: 'Ana Paula R.', tag: 'Acordava 5x por noite', text: '"Dormi 6 horas seguidas pela primeira vez em meses. Sou outra pessoa. O suporte de vocês no zap valeu muito."' },
  { initials: 'FB', color: '#2A8F9C', name: 'Fê Braga', tag: 'Achava que o bebê era "diferente"', text: '"O quiz de perfil abriu meu olho. Eu tava errando a janela de sono dele em 30 minutos todo dia. Só isso mudou tudo em 3 dias."' },
  { initials: 'LC', color: '#C96B7A', name: 'Lari Costa', tag: 'Regressão dos 4 meses', text: '"O que me salvou foi entender o que tava acontecendo. Estou muito mais tranquila como mãe agora."' },
];

const DepoimentosSection = () => (
  <section className="bg-cream py-16">
    <div className="max-w-[1100px] mx-auto mb-10 px-6 sm:px-10 md:text-center">
      <SectionTag className="md:justify-center">Resultados reais</SectionTag>
      <h2 className="font-display text-[32px] sm:text-[42px] font-bold leading-[1.2] text-foreground mt-5">Mães que já passaram por isso</h2>
      <p className="text-base text-text-2 mt-3">Organizamos por situação. Encontre a sua.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1100px] mx-auto px-6 sm:px-10">
      {testimonials.map((t) => (
        <div key={t.initials} className="bg-card rounded-3xl p-7 border-[1.5px] border-primary/10">
          <div className="flex items-center gap-3 mb-[18px]">
            <div className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground flex-shrink-0" style={{ background: t.color }}>{t.initials}</div>
            <div>
              <div className="text-sm font-bold text-foreground">{t.name}</div>
              <span className="inline-block bg-teal-light text-teal-dark text-[10px] font-semibold px-2.5 py-[3px] rounded-full mt-[3px]">{t.tag}</span>
            </div>
          </div>
          <p className="text-[14.5px] text-text-2 leading-[1.75] mb-4 italic">{t.text}</p>
          <div className="text-[#F5A623] text-[13px] tracking-[1px]">★★★★★</div>
        </div>
      ))}
    </div>
  </section>
);

export default DepoimentosSection;
