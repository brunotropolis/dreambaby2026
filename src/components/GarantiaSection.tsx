const GarantiaSection = () => (
  <section className="bg-teal-pale py-14">
    <div className="max-w-[660px] mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-start gap-8">
      <div className="w-[110px] h-[110px] rounded-full border-4 border-primary bg-card flex flex-col items-center justify-center flex-shrink-0" style={{ boxShadow: '0 8px 40px rgba(56,178,192,0.2)' }}>
        <div className="font-display text-[42px] font-bold text-primary leading-none">7</div>
        <div className="text-[8px] font-bold tracking-[2px] uppercase text-primary">dias de garantia</div>
      </div>
      <div>
        <h2 className="font-display text-[28px] sm:text-[34px] font-bold text-foreground mb-4">Risco zero. Sério.</h2>
        <p className="text-[16px] text-text-2 leading-[1.8] mb-3">Se você aplicar o método dentro dos primeiros 7 dias e não tiver nenhum resultado, você recebe seu dinheiro de volta. Sem burocracia, sem precisar justificar.</p>
        <p className="text-[16px] text-foreground leading-[1.8] font-bold">A garantia existe porque a gente tem certeza do que o método entrega.</p>
      </div>
    </div>
  </section>
);

export default GarantiaSection;
