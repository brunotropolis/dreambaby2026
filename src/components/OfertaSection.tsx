import { useState, useEffect } from 'react';
import SectionTag from './SectionTag';

function getNextSundayEnd() {
  const now = new Date();
  const day = now.getDay(); // 0=Sun
  const daysUntilSunday = day === 0 ? 0 : 7 - day;
  const target = new Date(now);
  target.setDate(now.getDate() + daysUntilSunday);
  target.setHours(23, 59, 59, 999);
  if (target <= now) {
    target.setDate(target.getDate() + 7);
  }
  return target;
}

const OfertaSection = () => {
  const [time, setTime] = useState({ d: '00', h: '00', m: '00', s: '00' });

  useEffect(() => {
    const target = getNextSundayEnd();
    const tick = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) { setTime({ d: '00', h: '00', m: '00', s: '00' }); return; }
      const totalSec = Math.floor(diff / 1000);
      setTime({
        d: String(Math.floor(totalSec / 86400)).padStart(2, '0'),
        h: String(Math.floor((totalSec % 86400) / 3600)).padStart(2, '0'),
        m: String(Math.floor((totalSec % 3600) / 60)).padStart(2, '0'),
        s: String(totalSec % 60).padStart(2, '0'),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const offerItems = [
    'Acesso completo ao método em vídeo',
    'Quiz de perfil de sono do bebê',
    '30 dias de suporte via WhatsApp',
    '1 ano de acesso ao conteúdo',
    '🎁 E-book Saltos de Desenvolvimento (R$59)',
    '🎁 E-book Atividades para Estimular Energia (R$59)',
    '🎁 Mini Curso A Rotina do Bebê (R$87)',
  ];

  return (
    <section className="py-16 relative overflow-hidden" id="oferta" style={{ background: 'hsl(197 30% 16%)' }}>
      <div className="absolute opacity-[0.04] font-script text-[200px] text-primary-foreground whitespace-nowrap pointer-events-none" style={{ top: '-60px', left: '-80px' }}>Sono</div>
      <div className="max-w-[1100px] mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-14 items-center relative z-[2]">
        <div>
          <SectionTag style={{ background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.95)' }}>
            <span className="w-[9px] h-[9px] rounded-full flex-shrink-0" style={{ background: 'rgba(255,255,255,0.8)' }} />
            Investimento
          </SectionTag>
          <h2 className="font-display text-[46px] font-bold text-primary-foreground leading-[1.15] mb-6 mt-5">Quanto você pagaria para dormir bem essa noite?</h2>
          <p className="text-[17px] leading-[1.8]" style={{ color: 'rgba(255,255,255,0.65)' }}>Uma consulta particular com especialista em sono infantil custa entre R$300 e R$800, por sessão, sem suporte contínuo.</p>
          <p className="text-[15px] mt-5" style={{ color: 'rgba(255,255,255,0.8)' }}>O Dream Baby é acesso ao método completo, suporte por 30 dias e todos os bônus, por menos do que um jantar fora.</p>
        </div>
        <div className="bg-card rounded-[28px] p-10" style={{ boxShadow: '0 24px 80px rgba(0,0,0,0.3)' }}>
          <div className="flex flex-col gap-3 mb-7">
            {offerItems.map((item) => (
              <div key={item} className="flex gap-3 items-start text-[14.5px] text-foreground leading-[1.4] font-medium">
                <span className="text-primary font-bold text-base flex-shrink-0 mt-[1px]">✓</span> {item}
              </div>
            ))}
          </div>

          {/* Countdown */}
          <div className="rounded-2xl p-5 px-6 text-center mb-5 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #C45200, #F06000)' }}>
            <div className="font-display text-[22px] font-extrabold text-primary-foreground mb-2 relative">🏷️ 20% de desconto ativo</div>
            <div className="text-xs uppercase tracking-[1.5px] mb-3 relative" style={{ color: 'rgba(255,255,255,0.8)' }}>Oferta encerra em:</div>
            <div className="flex justify-center items-center gap-2 mb-2.5 relative">
              {[
                { val: time.d, lbl: 'dias' },
                { val: time.h, lbl: 'horas' },
                { val: time.m, lbl: 'min' },
                { val: time.s, lbl: 'seg' },
              ].map((box, i) => (
                <div key={box.lbl} className="flex items-center gap-2">
                  {i > 0 && <span className="text-[28px] font-extrabold mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>:</span>}
                  <div className="rounded-[10px] px-4 py-2.5 min-w-[64px] backdrop-blur-[4px]" style={{ background: 'rgba(255,255,255,0.15)' }}>
                    <span className="block text-[28px] font-extrabold text-primary-foreground leading-none font-display">{box.val}</span>
                    <small className="block text-[10px] uppercase tracking-[1px] mt-[2px]" style={{ color: 'rgba(255,255,255,0.75)' }}>{box.lbl}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-px bg-border my-6" />
          <div className="text-[13px] text-text-3 line-through text-center">De R$297,00</div>
          <div className="font-display text-[54px] font-black text-primary text-center leading-none my-2">12x R$24,43</div>
          <div className="text-sm text-text-3 text-center mb-7 font-medium">ou R$237,60 à vista</div>
          <a
            href="https://payfast.greenn.com.br/120378/offer/Yo2LTy"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-green-btn text-primary-foreground font-body text-[13px] font-bold tracking-[0.5px] px-6 py-[18px] rounded-full text-center no-underline transition-all duration-200 btn-pulse"
            style={{ boxShadow: '0 8px 32px rgba(56,178,192,0.4)' }}
          >
            Quero que meu bebê durma no berço essa semana ☁️
          </a>
          <p className="text-[11.5px] text-text-3 text-center mt-4 font-medium">🔒 Pagamento seguro &nbsp;·&nbsp; Acesso imediato &nbsp;·&nbsp; Garantia 7 dias</p>
        </div>
      </div>
    </section>
  );
};

export default OfertaSection;
