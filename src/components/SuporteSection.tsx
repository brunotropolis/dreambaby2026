import SectionTag from './SectionTag';
import dayAlessandraImg from '@/assets/day-alessandra.jpg';

const items = [
  { ico: '📱', text: 'WhatsApp exclusivo para alunas' },
  { ico: '🎙️', text: 'Aceita mensagens, áudios, vídeos e fotos' },
  { ico: '📅', text: '30 dias de acompanhamento ativo' },
];

const SuporteSection = () => (
  <section className="bg-warm py-16" id="suporte">
    <div className="max-w-[1100px] mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-14 items-center">
      <div>
        <SectionTag>Você não está sozinha</SectionTag>

        {/* Photo: visible only on mobile, before the title */}
        <div className="rounded-2xl overflow-hidden aspect-video mt-5 mb-6 lg:hidden" style={{ boxShadow: '0 8px 32px rgba(30,45,53,0.08)' }}>
          <img src={dayAlessandraImg} alt="Dayane e Alessandra - equipe de suporte" className="w-full h-full object-cover object-[center_30%]" loading="lazy" decoding="async" />
        </div>

        <h2 className="font-display text-[32px] sm:text-[42px] font-bold leading-[1.15] text-foreground mb-6">30 dias de acompanhamento individual pelo WhatsApp</h2>
        <p className="text-[17px] text-text-2 leading-[1.8] mb-5">O acompanhamento do Dream Baby é feito pela Alessandra, consultora de sono e amamentação treinada pela Dayane Dos Anjos. Individual, direto com você, para o seu bebê, na sua rotina.</p>
        <p className="text-[17px] text-text-2 leading-[1.8]">Não é grupo, não é fórum. É Alessandra respondendo você pelo WhatsApp, com atenção real para o que está acontecendo na sua casa. Manda áudio, vídeo, foto. Ela entende.</p>
        <div className="flex flex-col gap-3.5 mt-8">
          {items.map((it) => (
            <div key={it.text} className="flex items-center gap-3.5 p-4 px-5 bg-card rounded-[14px] text-[15px] font-semibold text-foreground">
              <span className="text-xl flex-shrink-0">{it.ico}</span> {it.text}
            </div>
          ))}
        </div>
      </div>
      {/* Photo: visible only on desktop, sidebar */}
      <div className="hidden lg:block rounded-[28px] overflow-hidden aspect-[3/4] bg-teal-light" style={{ boxShadow: '0 16px 64px rgba(30,45,53,0.12)' }}>
        <img src={dayAlessandraImg} alt="Dayane e Alessandra - suporte WhatsApp" className="w-full h-full object-cover object-[center_top]" loading="lazy" decoding="async" />
      </div>
    </div>
  </section>
);

export default SuporteSection;
