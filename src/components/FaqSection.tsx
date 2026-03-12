import { useState } from 'react';
import SectionTag from './SectionTag';

const faqs = [
  { q: 'Isso funciona para bebê de qualquer idade?', a: 'O método foi desenvolvido para bebês de recém-nascidos a 12 meses. Para bebês menores de 4 semanas, o sono ainda é fisiológico e irregular, mas você pode começar a aprender o método durante esse período. Quanto antes você começar, melhor para vocês dois.' },
  { q: 'Meu bebê vai chorar durante o processo?', a: 'Pode haver algum choro de protesto, que é muito diferente de choro de sofrimento. O Dream Baby te ensina a identificar essa diferença e a estar presente durante todo o processo. A maioria das mães relata choro mínimo quando o método é aplicado corretamente.' },
  { q: 'Já tentei outros métodos e não funcionou. Por que seria diferente?', a: 'Três diferenças práticas: o Dream Baby parte do ritmo biológico do seu bebê (não de um horário genérico), começa com um quiz de perfil de sono para personalizar a abordagem, e oferece suporte em tempo real pelo WhatsApp quando a teoria não acontece como previsto. Você não vai tentar sozinha.' },
  { q: 'Em quanto tempo vejo resultado?', a: 'Os primeiros resultados costumam aparecer nos primeiros dias de aplicação consistente. Em cerca de duas semanas, a maioria dos bebês já apresenta grande melhora no sono. O tempo varia conforme o perfil e a idade do bebê.' },
  { q: 'Como funciona o suporte via WhatsApp?', a: 'Após a compra você recebe acesso a um grupo ou contato exclusivo para alunas. Por 30 dias você pode enviar mensagens, áudios, vídeos e fotos e receber orientações personalizadas da equipe da Dayane. Atendimento em dias úteis, horário comercial.' },
  { q: 'As aulas são longas? Vou ter tempo de assistir?', a: 'As aulas são curtas e objetivas, feitas para mães que têm pouco tempo. Você assiste quando quiser, no seu ritmo, durante o tempo que der, e pode voltar sempre que precisar durante o 1 ano de acesso.' },
  { q: 'Qual é o prazo de acesso ao conteúdo?', a: '1 ano de acesso completo, 100% online. Você pode assistir quantas vezes quiser durante esse período, incluindo os bônus e todos os materiais extras.' },
  { q: 'Como recebo o acesso após a compra?', a: 'Assim que a compra for confirmada, você recebe seus dados de login por e-mail e já pode começar a assistir imediatamente. O acesso ao WhatsApp de suporte também é liberado em seguida.' },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-warm py-16">
      <div className="max-w-[760px] mx-auto px-6 sm:px-10">
        <SectionTag className="md:justify-center">Dúvidas frequentes</SectionTag>
        <h2 className="font-display text-[32px] sm:text-[42px] font-bold text-foreground mb-10 mt-5 md:text-center">Perguntas Frequentes</h2>
        <div className="flex flex-col">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-primary/15" style={i === 0 ? { borderTop: '1px solid rgba(56,178,192,0.15)' } : {}}>
                <div
                  className={`flex justify-between items-center py-[22px] px-1 cursor-pointer text-base font-bold gap-4 select-none transition-colors duration-200 hover:text-primary ${isOpen ? 'text-primary' : 'text-foreground'}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  {faq.q}
                  <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${isOpen ? 'bg-primary text-primary-foreground rotate-45' : 'bg-teal-light text-primary'}`}>+</span>
                </div>
                <div
                  className="text-[15px] text-text-2 leading-[1.8] overflow-hidden transition-all duration-[350ms] px-1"
                  style={{ maxHeight: isOpen ? '300px' : '0', paddingBottom: isOpen ? '20px' : '0' }}
                >
                  {faq.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
