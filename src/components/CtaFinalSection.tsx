const CtaFinalSection = () => (
  <section className="py-16 px-6 sm:px-10 md:text-center relative overflow-hidden" style={{ background: 'linear-gradient(160deg, hsl(185 57% 39%) 0%, #1E6E7A 100%)' }}>
    <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
      <svg width="100%" height="100%" viewBox="0 0 1440 600" preserveAspectRatio="none">
        <ellipse cx="200" cy="150" rx="300" ry="150" fill="white"/>
        <ellipse cx="200" cy="100" rx="200" ry="130" fill="white"/>
        <ellipse cx="350" cy="110" rx="200" ry="140" fill="white"/>
        <ellipse cx="1200" cy="450" rx="280" ry="130" fill="white"/>
        <ellipse cx="1200" cy="400" rx="200" ry="120" fill="white"/>
        <ellipse cx="1050" cy="410" rx="180" ry="130" fill="white"/>
      </svg>
    </div>
    <h2 className="font-display text-[32px] sm:text-[50px] font-bold text-primary-foreground leading-[1.15] max-w-[740px] md:mx-auto mb-6 relative z-[2]">
      Seu bebê merece dormir bem. Você merece dormir bem.{' '}
      <em className="italic" style={{ color: 'rgba(255,255,255,0.75)' }}>E você não precisa escolher entre uma coisa e a outra.</em>
    </h2>
    <p className="text-lg max-w-[520px] md:mx-auto mb-10 leading-[1.8] relative z-[2]" style={{ color: 'rgba(255,255,255,0.82)' }}>
      O Dream Baby existe pra te dar o passo a passo, o suporte e a segurança que você precisa pra fazer essa transição com amor e sem culpa.
    </p>
    <a
      href="https://payfast.greenn.com.br/120378/offer/Yo2LTy?ch_id=21567&b_id_1=119621&b_offer_1=9sSh5S&b_id_2=119641&b_offer_2=l8brFU&b_id_3=119627&b_offer_3=UNkLyv&src=||||"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block text-primary-foreground font-body text-sm font-bold tracking-[0.5px] px-[52px] py-5 rounded-full no-underline transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 relative z-[2]"
      style={{ background: '#22A845', boxShadow: '0 8px 32px rgba(34,168,69,0.4)' }}
    >
      Quero que meu bebê durma no berço essa semana ☁️
    </a>
  </section>
);

export default CtaFinalSection;
