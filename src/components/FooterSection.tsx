const FooterSection = () => (
  <footer className="flex flex-col items-center gap-3 py-7 px-10 text-center" style={{ background: '#0F1E24' }}>
    <div className="opacity-85" style={{ filter: 'brightness(0) invert(1)' }}>
      <svg width="120" viewBox="0 0 200 45" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="32" fontFamily="'Playfair Display', serif" fontSize="28" fontWeight="700" fill="#38B2C0">
          Dream Baby
        </text>
        <ellipse cx="175" cy="12" rx="18" ry="8" fill="#38B2C0" opacity="0.5"/>
        <ellipse cx="165" cy="10" rx="10" ry="7" fill="#38B2C0" opacity="0.5"/>
        <ellipse cx="185" cy="9" rx="12" ry="7" fill="#38B2C0" opacity="0.5"/>
        <ellipse cx="175" cy="7" rx="14" ry="8" fill="#38B2C0" opacity="0.5"/>
      </svg>
    </div>
    <p className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>
      © {new Date().getFullYear()} Dream Baby · Todos os direitos reservados
    </p>
  </footer>
);

export default FooterSection;
