import { useState } from 'react';
import SectionTag from './SectionTag';

const faqs = [
  { q: 'O método Dream Baby é indicado para qual idade?', a: 'O método Dream Baby foi desenvolvido para bebês de recém-nascidos a 12 meses! Independente da fase em que o seu pequeno se encontra, o método oferece estratégias que se ajustam às necessidades do bebê em diferentes fases ao longo do primeiro aninho. Com o método, você não precisa se preocupar em ter uma "idade certa" para começar, pois ele foi pensado para respeitar cada fase do desenvolvimento do bebê. Como é sem choro, quanto antes começar melhor para vocês.' },
  { q: 'Por que é sem choro?', a: 'O método de sono do Dream Baby é muito gentil e respeitoso com o bebê, por isso não inclui treinamento de choro. Não há a menor necessidade de o bebê chorar para aprender a adormecer e dormir bem. O sono é uma necessidade básica, e não há por que sofrer para alcançá-lo. O método traz técnicas gentis para resolver cada dificuldade que seu bebê possa ter em relação ao sono, sempre respeitando as necessidades dele.' },
  { q: 'Em quanto tempo vejo resultado?', a: 'Os primeiros resultados costumam aparecer nos primeiros dias de aplicação, se a família seguir as orientações corretamente. Em cerca de duas semanas, a maioria dos bebês já apresenta uma grande melhora na qualidade do sono, dormindo por períodos mais longos e com menos despertares. O tempo pode variar de acordo com o bebê, mas o método foi criado para gerar mudanças reais e duradouras sem sofrimento para a família.' },
  { q: 'Conseguirei aplicar as técnicas mesmo sendo curso online e não presencial?', a: 'Sim, você aprenderá em aulas rápidas e práticas cada tema, para poder colocar em prática em casa. Qualquer dúvida que tiver poderá falar diretamente com a Alê no nosso acompanhamento.' },
  { q: 'Os métodos funcionam mesmo para bebês que tenham mais de 30 dias de vida?', a: 'Sim, funciona para bebê de qualquer idade. Você irá aprender não só a fazer o bebê dormir, mas a organizar a rotina dele também. Esse conhecimento você poderá aplicar em qualquer idade ou fase que seu bebê estiver.' },
  { q: 'O curso ajuda a fazer o bebê parar de chorar o tempo todo e dormir tranquilo?', a: 'Sim, o curso ajuda a mamãe a entender as necessidades do bebê. Geralmente o bebê chora porque precisa de alguma coisa e, entendendo o que ele quer, você conseguirá ajudá-lo.' },
  { q: 'É possível aprender as técnicas do Dream Baby mesmo sendo gestante?', a: 'Não só é possível, como é a melhor forma de se preparar para a chegada do seu bebê. Afinal, conhecimento é tudo.' },
  { q: 'O curso Dream Baby é importante para mamães de bebês de que idade?', a: 'O Método de Sono Dream Baby pode ser aplicado em bebês de até 1 ano.' },
  { q: 'O curso promete que meu bebê vai dormir no berço em até 5 dias?', a: 'É possível sim ter resultados em 5 dias, e muitas famílias relatam grandes avanços nos primeiros 5 dias, mas isso não é uma promessa garantida e sim uma média observada nos perfis que seguem as orientações com consistência. O tempo de resposta pode variar conforme o perfil do bebê, a rotina da casa e a forma como o método é aplicado. Por isso, oferecemos também 30 dias de acompanhamento para ajustar o que for necessário com orientação profissional.' },
  { q: 'E se o método não funcionar com meu bebê?', a: 'O Método Dream Baby foi desenvolvido para respeitar o tempo e o perfil de cada bebê. Os primeiros resultados costumam aparecer nos primeiros dias de aplicação, e em cerca de duas semanas a maioria dos bebês já apresenta grande melhora. Além disso, o curso inclui 30 dias de acompanhamento com a Alê para ajudar a adaptar o método ao seu bebê, garantindo que você nunca fique sozinha nesse processo.' },
  { q: 'As aulas são longas? Vou ter tempo para assistir?', a: 'As aulas são curtas e objetivas, feitas para mães que têm pouco tempo e precisam ir direto ao ponto. Você pode assistir quando quiser e quantas vezes precisar.' },
  { q: 'Qual é o prazo de acesso do curso?', a: 'O prazo de acesso é de 12 meses, 100% online. O curso pode ser assistido quantas vezes desejar por esse período.' },
  { q: 'Como vou acessar o curso?', a: 'Assim que a compra for confirmada, você recebe seus dados de login por e-mail e já pode começar a assistir imediatamente.' },
  { q: 'Tem garantia?', a: 'Sim! O prazo de garantia é de 7 dias a contar do dia da compra. Caso o produto não seja satisfatório, basta solicitar o reembolso integral dentro da plataforma Greenn nesse período. O reembolso é processado automaticamente e realizado em até 5 dias. Nosso compromisso é orientar com carinho e responsabilidade durante todo o processo.' },
  { q: 'Tenho direito a acompanhamento individual?', a: 'Sim! O curso inclui 30 dias de acompanhamento com suporte para tirar dúvidas e adaptar o método ao seu bebê. Você não estará sozinha nessa jornada.' },
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
