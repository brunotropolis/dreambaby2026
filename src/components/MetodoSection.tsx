const features = [
  { icon: '🌙', title: 'Quiz de perfil de sono', desc: 'Identifica o perfil único do seu bebê antes de começar. Chega de seguir método genérico que não foi feito para o seu filho.' },
  { icon: '⏰', title: 'Janela de sono certa', desc: 'Te ensina a ler os sinais do bebê antes do cansaço excessivo. Esse ajuste sozinho muda tudo na rotina.' },
  { icon: '💬', title: 'Suporte real de quem entende', desc: 'Via WhatsApp, com orientação personalizada quando a teoria não sai como planejado. Você não aplica isso sozinha.' },
];

const MetodoSection = () => (
  <section className="bg-primary py-16 relative overflow-hidden">
    <div className="absolute -top-[120px] -right-[120px] w-[400px] h-[400px] rounded-full bg-primary-foreground/[0.06]" />
    <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-primary-foreground/[0.05]" />
    <div className="max-w-[1100px] mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-[2]">
      <div>
        <div className="inline-flex items-center gap-2 text-[13px] font-extrabold tracking-[2.5px] uppercase bg-card text-primary px-4 py-[7px] pl-3 rounded-full mb-5">
          <span className="w-[9px] h-[9px] rounded-full bg-primary flex-shrink-0" />
          Por que funciona quando outros falharam
        </div>
        <h2 className="font-display text-[44px] font-bold text-primary-foreground leading-[1.15] mb-6">O que torna o Dream Baby diferente</h2>
        <p className="text-[17px] text-primary-foreground/80 leading-[1.8] mb-6">A maioria dos métodos tem dois problemas: ou exigem choro controlado que a mãe não consegue sustentar, ou são tão genéricos que deixam você perdida quando a teoria não acontece na prática.</p>
        <div className="bg-primary-foreground/[0.12] border-l-[3px] border-primary-foreground/60 p-5 px-6 rounded-r-2xl text-[17px] font-bold text-primary-foreground leading-[1.6] backdrop-blur-[10px]">
          O resultado: bebê no berço, com autonomia, em até 5 dias. Sem choro. Sem você se sentir péssima no processo.
        </div>
      </div>
      <div className="flex flex-col gap-7">
        {features.map((f) => (
          <div key={f.title} className="flex gap-5 items-start bg-primary-foreground/10 p-6 rounded-[20px] backdrop-blur-[10px] border border-primary-foreground/15">
            <div className="w-[52px] h-[52px] rounded-2xl bg-primary-foreground/20 flex items-center justify-center text-2xl flex-shrink-0">{f.icon}</div>
            <div>
              <h4 className="text-base font-bold text-primary-foreground mb-1.5">{f.title}</h4>
              <p className="text-sm text-primary-foreground/75 leading-[1.65]">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MetodoSection;
