import { lazy, Suspense } from 'react';
import HeroSection from '@/components/HeroSection';
import WaveDivider from '@/components/WaveDivider';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

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

const Index = () => (
  <Suspense fallback={null}>
    <HeroSection />

    {/* Hero → Dor */}
    <WaveDivider topColor="hsl(33 75% 96%)" bottomColor="hsl(33 75% 96%)" variant="down" />
    <DorSection />

    {/* Dor → Mitos */}
    <WaveDivider topColor="hsl(33 75% 96%)" bottomColor="#1E7A86" variant="up" />
    <MitosSection />

    {/* Mitos → Método */}
    <WaveDivider topColor="#1E7A86" bottomColor="#38B2C0" variant="down" />
    <MetodoSection />
    <WaveDivider topColor="#38B2C0" bottomColor="hsl(42 100% 99%)" variant="up" />

    {/* Autoridade */}
    <AutoridadeSection />

    {/* Autoridade → Suporte */}
    <WaveDivider topColor="hsl(42 100% 99%)" bottomColor="hsl(33 75% 96%)" variant="gentle" />
    <SuporteSection />

    {/* Suporte → Depoimentos */}
    <WaveDivider topColor="hsl(33 75% 96%)" bottomColor="hsl(42 100% 99%)" variant="up" />
    <DepoimentosSection />

    {/* Depoimentos → Bônus */}
    <BonusSection />

    {/* Bônus → Oferta */}
    <WaveDivider topColor="hsl(42 100% 99%)" bottomColor="hsl(197 30% 16%)" variant="down" />
    <OfertaSection />

    {/* Oferta → Garantia */}
    <WaveDivider topColor="hsl(197 30% 16%)" bottomColor="hsl(185 50% 96%)" variant="up" />
    <GarantiaSection />

    {/* Garantia → WhatsApp */}
    <WhatsAppSection />

    {/* CTA Final */}
    <CtaFinalSection />

    {/* CTA → FAQ */}
    <WaveDivider topColor="#1E6E7A" bottomColor="hsl(33 75% 96%)" variant="up" />
    <FaqSection />

    <FooterSection />
    <FloatingWhatsApp />
  </Suspense>
);

export default Index;
