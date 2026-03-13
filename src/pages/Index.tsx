import HeroSection from '@/components/HeroSection';
import WaveDivider from '@/components/WaveDivider';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import DorSection from '@/components/DorSection';
import MitosSection from '@/components/MitosSection';
import MetodoSection from '@/components/MetodoSection';
import AutoridadeSection from '@/components/AutoridadeSection';
import SuporteSection from '@/components/SuporteSection';
import DepoimentosSection from '@/components/DepoimentosSection';
import BonusSection from '@/components/BonusSection';
import OfertaSection from '@/components/OfertaSection';
import GarantiaSection from '@/components/GarantiaSection';
import WhatsAppSection from '@/components/WhatsAppSection';
import CtaFinalSection from '@/components/CtaFinalSection';
import FaqSection from '@/components/FaqSection';
import FooterSection from '@/components/FooterSection';

const Index = () => (
  <>
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
  </>
);

export default Index;
