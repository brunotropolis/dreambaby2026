const GarantiaSection = () => (
  <section className="bg-teal-pale py-20 text-center">
    <div className="w-[130px] h-[130px] rounded-full border-4 border-primary bg-card flex flex-col items-center justify-center mx-auto mb-8" style={{ boxShadow: '0 8px 40px rgba(56,178,192,0.2)' }}>
      <div className="font-display text-[48px] font-bold text-primary leading-none">7</div>
      <div className="text-[8px] font-bold tracking-[2px] uppercase text-primary">dias de garantia</div>
    </div>
    <h2 className="font-display text-[34px] font-bold text-foreground mb-5">Risco zero. Sério.</h2>
    <p className="text-[17px] text-text-2 leading-[1.8] max-w-[560px] mx-auto mb-4 px-10">Se você aplicar o método dentro dos primeiros 7 dias e não tiver nenhum resultado, você recebe seu dinheiro de volta. Sem burocracia, sem precisar justificar.</p>
    <p className="text-[17px] text-foreground leading-[1.8] max-w-[560px] mx-auto px-10 font-bold">A garantia existe porque a gente tem certeza do que o método entrega.</p>
  </section>
);

export default GarantiaSection;
