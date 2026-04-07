import { lazy, Suspense, useEffect, useRef } from 'react';
import HeroSection from '@/components/HeroSection';

const WaveDivider = lazy(() => import('@/components/WaveDivider'));
const FloatingWhatsApp = lazy(() => import('@/components/FloatingWhatsApp'));
const DorSection = lazy(() => import('@/components/DorSection'));
const MitosSection = lazy(() => import('@/components/MitosSection'));
const MetodoSection = lazy(() => import('@/components/MetodoSection'));
const AutoridadeSection = lazy(() => import('@/components/AutoridadeSection'));
const SuporteSection = lazy(() => import('@/components/SuporteSection'));
const DepoimentosSection = lazy(() => import('@/components/DepoimentosSection'));
const BonusSection = lazy(() => import('@/components/BonusSection'));
const OfertaSection = lazy(() => import('@/components/OfertaSection'));
const GarantiaSection = lazy(() => import('@/components/GarantiaSection'));
const WhatsAppSection = lazy(() => import('@/components/WhatsAppSection'));
const CtaFinalSection = lazy(() => import('@/components/CtaFinalSection'));
const FaqSection = lazy(() => import('@/components/FaqSection'));
const FooterSection = lazy(() => import('@/components/FooterSection'));

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

const Index = () => {
  const dorRef = useRef<HTMLDivElement>(null);
  const ofertaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const entries = [
      { ref: dorRef, clarityEvt: 'scroll_dobra2', fbEvt: 'ScrollDobra2' },
      { ref: ofertaRef, clarityEvt: 'visivel_botao_compra', fbEvt: 'VisivelBotaoCompra' },
    ];

    const observer = new IntersectionObserver(
      (observed) => {
        observed.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const track = (entry.target as HTMLElement).dataset.track;
          const match = entries.find((e) => e.clarityEvt === track);
          if (!match) return;
          window.clarity?.('event', match.clarityEvt);
          window.fbq?.('trackCustom', match.fbEvt);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.3 }
    );

    [dorRef, ofertaRef].forEach((r) => r.current && observer.observe(r.current));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <HeroSection />

      <Suspense fallback={<div />}>
        <WaveDivider topColor="hsl(33 75% 96%)" bottomColor="hsl(33 75% 96%)" variant="down" />
        <div ref={dorRef} data-track="scroll_dobra2">
          <DorSection />
        </div>

        <WaveDivider topColor="hsl(33 75% 96%)" bottomColor="#1E7A86" variant="up" />
        <MitosSection />

        <WaveDivider topColor="#1E7A86" bottomColor="#38B2C0" variant="down" />
        <MetodoSection />
        <WaveDivider topColor="#38B2C0" bottomColor="hsl(42 100% 99%)" variant="up" />

        <AutoridadeSection />

        <WaveDivider topColor="hsl(42 100% 99%)" bottomColor="hsl(33 75% 96%)" variant="gentle" />
        <SuporteSection />

        <WaveDivider topColor="hsl(33 75% 96%)" bottomColor="hsl(42 100% 99%)" variant="up" />
        <DepoimentosSection />

        <BonusSection />

        <WaveDivider topColor="hsl(42 100% 99%)" bottomColor="hsl(197 30% 16%)" variant="down" />
        <div ref={ofertaRef} data-track="visivel_botao_compra">
          <OfertaSection />
        </div>

        <WaveDivider topColor="hsl(197 30% 16%)" bottomColor="hsl(185 50% 96%)" variant="up" />
        <GarantiaSection />

        <WhatsAppSection />

        <CtaFinalSection />

        <WaveDivider topColor="#1E6E7A" bottomColor="hsl(33 75% 96%)" variant="up" />
        <FaqSection />

        <FooterSection />
        <FloatingWhatsApp />
      </Suspense>
    </>
  );
};

export default Index;
