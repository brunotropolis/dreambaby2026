import SectionTag from './SectionTag';

const painPoints = [
  'Seu bebê só dorme no colo, no peito ou sendo ninado por horas.',
  'Você tenta colocar no berço e ele acorda em segundos, chorando.',
  'À noite, acorda 3, 4, 5 vezes... e você não dorme mais direito há meses.',
  'Você já tentou "deixar chorar" e não conseguiu sustentar — nem emocionalmente nem fisicamente.',
  'Cada vez que pesquisa sobre sono de bebê, lê uma coisa diferente e fica mais perdida.',
];

const DorSection = () => (
  <section className="bg-warm pt-14 relative">
    <div className="max-w-[760px] mx-auto px-6 sm:px-10 pb-14">
      <SectionTag>Você se identifica?</SectionTag>
      <h2 className="font-display text-[32px] sm:text-[42px] font-bold leading-[1.2] text-foreground mb-10 mt-5 sm:mt-3">
        Se isso parece o seu dia a dia, você não está sozinha
      </h2>
      <div className="flex flex-col gap-3.5 mb-12">
        {painPoints.map((p, i) => (
          <div key={i} className="flex items-start gap-4 p-[18px_24px] bg-card rounded-2xl border-l-[3px] text-base text-foreground leading-[1.55] font-medium" style={{ borderLeftColor: '#FFCCD2' }}>
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-rose-light text-accent flex items-center justify-center text-sm font-bold mt-[1px]">✕</div>
            {p}
          </div>
        ))}
      </div>
      <div className="text-center p-8 px-10 rounded-3xl font-display text-[22px] font-bold leading-[1.5] text-teal-dark" style={{ background: 'linear-gradient(135deg, hsl(185 60% 94%) 0%, #E8F7F9 100%)' }}>
        A boa notícia: existe um caminho. E ele não envolve deixar seu bebê chorando sozinho.
      </div>
    </div>
  </section>
);

export default DorSection;
