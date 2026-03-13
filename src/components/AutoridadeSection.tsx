import SectionTag from './SectionTag';
import dayaneImg from '@/assets/dayane-autoridade.jpg';

const stats = [
  { icon: <svg width="20" height="14" viewBox="0 0 20 14" fill="none"><path d="M19.582 2.186a2.51 2.51 0 00-1.768-1.768C16.254 0 10 0 10 0S3.746 0 2.186.418A2.51 2.51 0 00.418 2.186C0 3.746 0 7 0 7s0 3.254.418 4.814a2.51 2.51 0 001.768 1.768C3.746 14 10 14 10 14s6.254 0 7.814-.418a2.51 2.51 0 001.768-1.768C20 10.254 20 7 20 7s0-3.254-.418-4.814z" fill="#FF0000"/><path d="M8 10l5.196-3L8 4v6z" fill="white"/></svg>, num: '+778k', lbl: 'inscritos no YouTube' },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#000000"/><path d="M16.5 8.5c-.4-1-1.2-1.8-2.2-2.2C13.3 6 12 6 12 6s-1.3 0-2.3.3c-1 .4-1.8 1.2-2.2 2.2C7 9.5 7 12 7 12s0 2.5.5 3.5c.4 1 1.2 1.8 2.2 2.2 1 .3 2.3.3 2.3.3s1.3 0 2.3-.3c1-.4 1.8-1.2 2.2-2.2.5-1 .5-3.5.5-3.5s0-2.5-.5-3.5z" fill="#000000"/><path d="M10.8 14.4V9.6l4 2.4-4 2.4z" fill="white"/><path d="M15.5 6.5a2.5 2.5 0 01.9.2" stroke="white" strokeWidth="0"/></svg>, num: '+650k', lbl: 'seguidores no TikTok' },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><defs><linearGradient id="ig2" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#f09433"/><stop offset="25%" stopColor="#e6683c"/><stop offset="50%" stopColor="#dc2743"/><stop offset="75%" stopColor="#cc2366"/><stop offset="100%" stopColor="#bc1888"/></linearGradient></defs><rect width="24" height="24" rx="6" fill="url(#ig2)"/><circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="2" fill="none"/><circle cx="17.5" cy="6.5" r="1.2" fill="white"/></svg>, num: '+616k', lbl: 'seguidores no Instagram' },
  { icon: <svg width="18" height="16" viewBox="0 0 24 22" fill="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#C96B7A"/></svg>, num: '+21mil', lbl: 'famílias atendidas' },
];

const AutoridadeSection = () => (
  <section className="bg-cream py-16">
    <div className="max-w-[1100px] mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-14 items-center">
      <div className="relative">
        <div className="rounded-[32px] overflow-hidden aspect-[3/4] bg-teal-light">
          <img src={dayaneImg} alt="Dayane Dos Anjos" className="w-full h-full object-cover object-[center_top]" />
        </div>
        <div className="absolute -bottom-5 -right-5 bg-card rounded-[20px] p-4 px-[22px] text-center border-2 border-teal-light" style={{ boxShadow: '0 8px 40px rgba(30,45,53,0.12)' }}>
          <div className="font-display text-[26px] font-bold text-primary leading-none">+10k</div>
          <div className="text-[11px] text-text-3 font-semibold mt-1">alunas formadas</div>
        </div>
      </div>
      <div>
        <SectionTag dotColor="#C4A8FF">Quem vai te ensinar</SectionTag>
        <h2 className="font-display text-[32px] sm:text-[40px] font-bold leading-[1.15] text-foreground mb-2 mt-5">Dayane Dos Anjos</h2>
        <div className="text-[17px] text-primary font-semibold tracking-[0.3px] mb-7 leading-[1.7]">Consultora de sono, amamentação e cuidados com o bebê. Uma das maiores referências em maternidade do Brasil.</div>
        <p className="text-[17px] text-text-2 leading-[1.85] mb-5">Depois de orientar mais de 10 mil famílias, ela percebeu que cada bebê é único, mas que existem padrões de dificuldades com o sono. Foi assim que nasceram os perfis do Método Dream Baby.</p>
        <p className="text-[17px] text-text-2 leading-[1.85] mb-5">O objetivo da Dayane é mostrar que é possível, sim, ensinar o bebê a dormir bem e no berço com leveza, sem deixar chorando, respeitando o ritmo dele... e o da mãe também.</p>
        <p className="text-[17px] text-text-2 leading-[1.85]">Se hoje tudo parece difícil, saiba que existe um caminho mais tranquilo. E a equipe da Dayane está a um clique de distância, pronta pra te apoiar. ♥</p>
        <div className="grid grid-cols-2 gap-4 mt-10">
          {stats.map((s, i) => (
            <div key={i} className="bg-teal-pale rounded-[20px] p-[22px_24px] border-[1.5px] border-primary/15">
              <div className="mb-1">{s.icon}</div>
              <div className="font-display text-[30px] font-bold text-primary leading-none mb-1">{s.num}</div>
              <div className="text-[12.5px] text-text-3 font-semibold">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AutoridadeSection;
