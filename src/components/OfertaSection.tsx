import { useState, useEffect } from 'react';
import SectionTag from './SectionTag';

function pad2(n: number) { return String(n).padStart(2, '0'); }

function endOfThisSunday2359(now: Date) {
  const day = now.getDay();
  const diff = (7 - day) % 7;
  const end = new Date(now);
  end.setDate(now.getDate() + diff);
  end.setHours(23, 59, 0, 0);
  return end;
}

function startOfNextMonday0010(now: Date) {
  const day = now.getDay();
  const diff = (8 - day) % 7;
  const next = new Date(now);
  next.setDate(now.getDate() + diff);
  next.setHours(0, 10, 0, 0);
  if (day === 1) {
    const t = new Date(now);
    t.setHours(0, 10, 0, 0);
    if (now < t) return t;
    if (diff === 0) next.setDate(now.getDate() + 7);
  }
  return next;
}

function inFreezeWindow(now: Date) {
  return now >= endOfThisSunday2359(now) && now < startOfNextMonday0010(now);
}

const OfertaSection = () => {
  const [time, setTime] = useState({ d: '00', h: '00', m: '00', s: '00' });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      if (inFreezeWindow(now)) {
        setTime({ d: '00', h: '00', m: '00', s: '00' });
        return;
      }
      let target = endOfThisSunday2359(now);
      if (now > target) {
        target = new Date(target);
        target.setDate(target.getDate() + 7);
      }
      const t = Math.max(0, Math.floor((target.getTime() - now.getTime()) / 1000));
      setTime({
        d: pad2(Math.floor(t / 86400)),
        h: pad2(Math.floor((t % 86400) / 3600)),
        m: pad2(Math.floor((t % 3600) / 60)),
        s: pad2(t % 60),
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
  ];

  const bonusItems = [
    { name: 'E-book Saltos de Desenvolvimento', price: 'R$59' },
    { name: 'E-book Atividades para Estimular Energia', price: 'R$59' },
    { name: 'Mini Curso A Rotina do Bebê', price: 'R$87' },
  ];

  const css = `
    .mrn-dealbox, .mrn-dealbox * { box-sizing: border-box; font-family: 'Quicksand', system-ui, sans-serif; }
    .mrn-dealbox { --mrn-fundo: #F4D9E4; --mrn-roxo: #6A3FA0; --mrn-roxo-escuro: #4A2A78; --mrn-rosa: #D94D8C; --mrn-rosa-claro: #FFEAF1; --mrn-branco: #FFFFFF; width: 100%; background: var(--mrn-fundo); border-radius: 20px; padding: 24px 22px; color: var(--mrn-roxo-escuro); overflow: hidden; border: 1px solid rgba(106,63,160,0.15); box-shadow: 0 8px 24px rgba(74,42,120,0.1); }
    .mrn-logo { display: flex; flex-direction: column; align-items: center; justify-content: center; line-height: 1; padding: 4px 0 14px; }
    .mrn-logo-semana { font-family: 'Quicksand', sans-serif; font-size: 12px; font-weight: 500; color: var(--mrn-roxo); letter-spacing: 1.5px; text-transform: lowercase; margin: 0 0 4px 0; }
    .mrn-logo-maternidade { font-family: 'Poppins', sans-serif; font-size: 24px; font-weight: 800; color: var(--mrn-roxo-escuro); letter-spacing: 2.5px; line-height: 1; margin: 0; }
    .mrn-logo-leve { font-family: 'Poppins', sans-serif; font-size: 15px; font-weight: 400; color: var(--mrn-rosa); letter-spacing: 3.5px; line-height: 1; margin: 6px 0 0 0; font-style: italic; text-transform: uppercase; }
    .mrn-divider { height: 1px; width: 100%; background: linear-gradient(90deg, transparent, rgba(106,63,160,0.35), transparent); margin: 4px 0; }
    .mrn-destaque { text-align: center; padding: 14px 0 10px; }
    .mrn-destaque-pre { font-family: 'Quicksand', sans-serif; font-size: 11px; font-weight: 600; color: var(--mrn-rosa); letter-spacing: 2.5px; text-transform: uppercase; margin: 0 0 6px 0; }
    .mrn-destaque-valor { font-family: 'Poppins', sans-serif; font-size: clamp(22px, 5vw, 30px); font-weight: 800; color: var(--mrn-roxo); letter-spacing: 1px; text-transform: uppercase; line-height: 1; margin: 0; }
    .mrn-timer { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 8px; padding: 14px 0 18px; }
    .mrn-tcard { background: var(--mrn-branco); border: 1px solid rgba(106,63,160,0.25); border-radius: 10px; padding: 10px 4px; text-align: center; min-width: 0; }
    .mrn-tval { font-family: 'Poppins', sans-serif; font-weight: 700; color: var(--mrn-roxo-escuro); font-size: clamp(20px, 4vw, 32px); line-height: 1; letter-spacing: 0.5px; }
    .mrn-tlab { font-family: 'Quicksand', sans-serif; font-weight: 700; margin-top: 4px; font-size: 9px; line-height: 1; color: var(--mrn-rosa); text-transform: uppercase; letter-spacing: 1px; }
    .mrn-offer { text-align: center; display: flex; flex-direction: column; align-items: center; padding: 16px 0 6px; }
    .mrn-old { font-family: 'Quicksand', sans-serif; font-weight: 500; font-size: 15px; margin: 0 0 2px; text-decoration: line-through; text-decoration-thickness: 1px; text-decoration-color: rgba(74,42,120,0.5); color: rgba(74,42,120,0.6); }
    .mrn-por { font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 10px; margin: 0 0 10px; color: var(--mrn-rosa); letter-spacing: 2.5px; text-transform: uppercase; }
    .mrn-installment-pill { display: inline-flex; align-items: center; justify-content: center; max-width: calc(100% - 10px); background: var(--mrn-roxo); color: var(--mrn-branco); border-radius: 999px; padding: 14px 32px; font-family: 'Poppins', sans-serif; font-weight: 800; font-size: clamp(22px, 5vw, 34px); letter-spacing: -0.3px; line-height: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; box-shadow: 0 6px 16px rgba(74,42,120,0.25); border: 1px solid rgba(255,255,255,0.2); }
    .mrn-sub { font-family: 'Quicksand', sans-serif; font-weight: 500; margin: 12px auto 0; font-size: 13px; color: var(--mrn-roxo-escuro); text-align: center; }
    .mrn-sub strong { font-family: 'Poppins', sans-serif; font-weight: 700; color: var(--mrn-roxo); }
    .mrn-coupon { padding: 14px 0 2px; width: 100%; display: flex; justify-content: center; }
    .mrn-pill { max-width: calc(100% - 10px); background: var(--mrn-branco); border: 1.5px dashed var(--mrn-rosa); border-radius: 12px; padding: 10px 20px; display: inline-flex; justify-content: center; align-items: center; gap: 10px; flex-wrap: wrap; }
    .mrn-pilltxt { font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 11px; color: var(--mrn-rosa); line-height: 1.1; letter-spacing: 1.5px; text-transform: uppercase; }
    .mrn-code { font-family: 'Poppins', sans-serif; font-weight: 800; font-size: 22px; color: var(--mrn-roxo-escuro); line-height: 1; letter-spacing: 1.5px; }
  `;

  return (
    <section className="py-16 relative overflow-hidden" id="oferta" style={{ background: 'hsl(197 30% 16%)' }}>
      <style>{css}</style>
      <div className="absolute opacity-[0.04] font-script text-[200px] text-primary-foreground whitespace-nowrap pointer-events-none" style={{ top: '-60px', left: '-80px' }}>Sono</div>
      <div className="max-w-[1100px] mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-8 lg:gap-14 items-center relative z-[2]">
        <div>
          <SectionTag style={{ background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.95)' }}>
            <span className="w-[9px] h-[9px] rounded-full flex-shrink-0" style={{ background: 'rgba(255,255,255,0.8)' }} />
            Investimento
          </SectionTag>
          <h2 className="font-display text-[32px] sm:text-[46px] font-bold text-primary-foreground leading-[1.15] mb-4 mt-5">Quanto você pagaria para dormir bem essa noite?</h2>
          <p className="text-[17px] leading-[1.8]" style={{ color: 'rgba(255,255,255,0.65)' }}>Uma consulta particular com especialista em sono infantil custa entre R$300 e R$800, por sessão, sem suporte contínuo.</p>
          <p className="text-[15px] mt-4" style={{ color: 'rgba(255,255,255,0.8)' }}>O Dream Baby é acesso ao método completo, suporte por 30 dias e todos os bônus, por menos do que um jantar fora.</p>
        </div>
        <div className="bg-card rounded-[28px] p-8 sm:p-10" style={{ boxShadow: '0 24px 80px rgba(0,0,0,0.3)' }}>
          <div className="flex flex-col gap-2.5 mb-4">
            {offerItems.map((item) => (
              <div key={item} className="flex gap-3 items-start text-[14.5px] text-foreground leading-[1.4] font-medium rounded-[10px] p-[10px_14px]" style={{ background: 'rgba(56,178,192,0.07)', border: '1px solid rgba(56,178,192,0.15)' }}>
                <span className="text-primary font-bold text-base flex-shrink-0 mt-[1px]">✓</span> {item}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2.5 mb-7">
            {bonusItems.map((b) => (
              <div key={b.name} className="flex gap-3 items-start text-[14.5px] text-foreground leading-[1.4] font-medium rounded-[10px] p-[10px_14px]" style={{ background: 'rgba(56,178,192,0.07)', border: '1px solid rgba(56,178,192,0.15)' }}>
                <span className="text-primary font-bold text-base flex-shrink-0 mt-[1px]">✓</span>
                <span>🎁 {b.name} <span className="line-through text-text-3">({b.price})</span></span>
              </div>
            ))}
          </div>

          {/* Dealbox Semana da Maternidade Leve */}
          <div className="mrn-dealbox">
            <div className="mrn-logo">
              <div className="mrn-logo-semana">Semana da</div>
              <div className="mrn-logo-maternidade">MATERNIDADE</div>
              <div className="mrn-logo-leve">Leve</div>
            </div>
            <div className="mrn-divider" />
            <div className="mrn-destaque">
              <div className="mrn-destaque-pre">você ganha</div>
              <div className="mrn-destaque-valor">20% de desconto</div>
            </div>
            <div className="mrn-timer">
              <div className="mrn-tcard"><div className="mrn-tval">{time.d}</div><div className="mrn-tlab">dias</div></div>
              <div className="mrn-tcard"><div className="mrn-tval">{time.h}</div><div className="mrn-tlab">horas</div></div>
              <div className="mrn-tcard"><div className="mrn-tval">{time.m}</div><div className="mrn-tlab">min</div></div>
              <div className="mrn-tcard"><div className="mrn-tval">{time.s}</div><div className="mrn-tlab">seg</div></div>
            </div>
            <div className="mrn-divider" />
            <div className="mrn-offer">
              <div className="mrn-old">de R$ 297,00</div>
              <div className="mrn-por">por apenas</div>
              <div className="mrn-installment-pill">12x de R$ 24,43</div>
              <div className="mrn-sub">ou à vista por <strong>R$ 237,60</strong></div>
            </div>
            <div className="mrn-divider" />
            <div className="mrn-coupon">
              <div className="mrn-pill">
                <span className="mrn-pilltxt">use o cupom</span>
                <span className="mrn-code">LEVE</span>
              </div>
            </div>
          </div>

          <div className="h-px bg-border my-5" />
          <a
            href="https://payfast.greenn.com.br/120378/offer/Yo2LTy?cupom=20OFFESPECIAL&ch_id=21567&b_id_1=119627&b_offer_1=UNkLyv&b_id_2=119672&b_offer_2=qALA8Y"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-primary-foreground font-body text-[13px] font-bold tracking-[0.5px] px-6 py-[18px] rounded-full text-center no-underline transition-all duration-200 btn-pulse"
            style={{ background: '#22A845', boxShadow: '0 8px 32px rgba(34,168,69,0.4)' }}
          >
            Quero que meu bebê durma no berço essa semana ☁️
          </a>
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-3 flex-wrap">
            <span className="text-[11px] text-text-3">🔒 Compra segura</span>
            <span className="text-text-3 text-[11px]">·</span>
            <span className="text-[11px] text-text-3">⚡ Acesso imediato</span>
            <span className="text-text-3 text-[11px]">·</span>
            <span className="text-[11px] text-text-3">✅ Garantia de 7 dias</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfertaSection;
