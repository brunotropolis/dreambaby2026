import heroImg from '@/assets/dayane-hero.jpg';

const HeroSection = () => (
  <section className="relative overflow-hidden flex items-center" style={{ background: 'linear-gradient(160deg, hsl(185 60% 94%) 0%, hsl(185 40% 97%) 40%, hsl(33 75% 96%) 100%)' }}>
    {/* Cloud decorations */}
    <div className="absolute inset-0 pointer-events-none">
      <svg className="absolute opacity-[0.35]" style={{ top: '-40px', right: '-60px', width: '360px' }} viewBox="0 0 360 200" fill="none">
        <ellipse cx="180" cy="130" rx="170" ry="70" fill="#38B2C0"/>
        <ellipse cx="100" cy="110" rx="80" ry="60" fill="#38B2C0"/>
        <ellipse cx="260" cy="105" rx="90" ry="65" fill="#38B2C0"/>
        <ellipse cx="180" cy="90" rx="110" ry="75" fill="#38B2C0"/>
      </svg>
      <svg className="absolute opacity-[0.2]" style={{ bottom: '40px', left: '-40px', width: '240px' }} viewBox="0 0 240 140" fill="none">
        <ellipse cx="120" cy="90" rx="115" ry="50" fill="#38B2C0"/>
        <ellipse cx="60" cy="70" rx="60" ry="45" fill="#38B2C0"/>
        <ellipse cx="180" cy="68" rx="65" ry="48" fill="#38B2C0"/>
        <ellipse cx="120" cy="55" rx="80" ry="55" fill="#38B2C0"/>
      </svg>
    </div>

    <div className="max-w-[1140px] mx-auto px-6 sm:px-10 pt-10 pb-6 sm:py-14 grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-8 lg:gap-12 items-center relative z-[2] animate-float-up w-full">

      {/* Foto mobile — com badges, só no mobile */}
      <div className="block lg:hidden w-full">
        <div className="relative mx-auto" style={{ width: '220px', height: '200px' }}>
          <div
            className="overflow-hidden absolute left-1/2"
            style={{
              width: '170px',
              height: '170px',
              borderRadius: '50%',
              transform: 'translateX(-50%)',
              boxShadow: '0 12px 40px rgba(56,178,192,0.25), 0 0 0 6px rgba(56,178,192,0.1)',
            }}
          >
            <img
              src={heroImg}
              alt="Dayane Dos Anjos"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%' }}
            />
          </div>
          <div className="absolute bg-card rounded-[12px] px-2.5 py-2 flex items-center gap-1.5" style={{ bottom: '0px', left: '0px', boxShadow: '0 6px 24px rgba(30,45,53,0.12)' }}>
            <span className="font-display text-[16px] font-bold text-primary leading-none">+10mil</span>
            <span className="text-[9px] text-text-2 leading-[1.3] font-semibold">famílias<br/>ajudadas</span>
          </div>
          <div className="absolute bg-card rounded-[12px] px-2.5 py-2 flex items-center gap-1.5" style={{ top: '0px', right: '0px', boxShadow: '0 6px 24px rgba(30,45,53,0.12)' }}>
            <span className="font-display text-[16px] font-bold text-primary leading-none">5 dias</span>
            <span className="text-[9px] text-text-2 leading-[1.3] font-semibold">resultado<br/>em média</span>
          </div>
        </div>
      </div>

      <div>
        <h1 className="font-display text-[30px] sm:text-[46px] lg:text-[52px] font-black leading-[1.08] text-foreground mb-5 lg:mb-7">
          Seu bebê vai dormir<br />
          <em className="text-primary italic">no berço.</em><br />
          Você vai dormir bem<br />
          <span className="text-accent">à noite.</span>
        </h1>
        <p className="text-lg text-text-2 leading-[1.8] max-w-[480px] mb-8 lg:mb-10">
          Sem choro. Sem culpa. Sem método genérico que não respeita o seu filho. O Dream Baby já ajudou mais de 10 mil famílias a fazer essa transição em até 5 dias.
        </p>
        <a href="#suporte" className="flex items-center justify-center gap-2.5 bg-green-btn text-primary-foreground font-body text-sm font-bold tracking-[0.5px] px-9 py-[18px] rounded-full w-full text-center transition-all duration-200 hover:bg-green-btn-hover hover:-translate-y-0.5" style={{ boxShadow: '0 8px 32px rgba(56,178,192,0.35)' }}>
          Quero que meu bebê durma no berço essa semana ☁️
        </a>
        <div className="flex flex-row justify-between gap-2 mt-4 sm:mt-7 mb-0">
          {[
            { ico: '🔒', label: 'Compra segura' },
            { ico: '⚡', label: 'Acesso imediato' },
            { ico: '✅', label: '7 dias de garantia' },
          ].map((c) => (
            <div key={c.label} className="flex-1 inline-flex items-center justify-center gap-1 bg-card border-[1.5px] border-primary/20 text-text-2 text-[10px] sm:text-xs font-semibold px-1.5 py-2 rounded-xl text-center">
              <span>{c.ico}</span>
              <span className="leading-tight">{c.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Foto desktop — coluna direita */}
      <div className="relative hidden lg:block">
        <div className="overflow-hidden aspect-[3/4] bg-teal-light" style={{ borderRadius: '40% 60% 55% 45% / 45% 40% 60% 55%', boxShadow: '0 24px 80px rgba(56,178,192,0.2), 0 0 0 8px rgba(56,178,192,0.08)' }}>
          <img src={heroImg} alt="Dayane Dos Anjos segurando um bebê" className="w-full h-full object-cover object-[center_20%]" />
        </div>
        <div className="absolute bottom-8 -left-8 bg-card rounded-[20px] px-5 py-3.5 flex items-center gap-3" style={{ boxShadow: '0 8px 40px rgba(30,45,53,0.12)' }}>
          <span className="font-display text-[28px] font-bold text-primary leading-none">+10mil</span>
          <span className="text-[11.5px] text-text-2 leading-[1.4] font-semibold">famílias<br/>ajudadas</span>
        </div>
        <div className="absolute top-10 -right-5 bg-card rounded-[20px] px-5 py-3.5 flex items-center gap-3" style={{ boxShadow: '0 8px 40px rgba(30,45,53,0.12)' }}>
          <span className="font-display text-[28px] font-bold text-primary leading-none">5 dias</span>
          <span className="text-[11.5px] text-text-2 leading-[1.4] font-semibold">resultado<br/>em média</span>
        </div>
      </div>

    </div>
  </section>
);

export default HeroSection;
