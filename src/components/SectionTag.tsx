interface SectionTagProps {
  children: React.ReactNode;
  dotColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SectionTag = ({ children, dotColor, className = '', style }: SectionTagProps) => (
  <div
    className={`inline-flex items-center gap-2 text-[13px] font-extrabold tracking-[2.5px] uppercase text-primary bg-teal-pale px-4 py-[7px] pr-4 pl-3 rounded-full ${className}`}
    style={style}
  >
    <span className="w-[9px] h-[9px] rounded-full bg-primary flex-shrink-0" style={dotColor ? { background: dotColor } : {}} />
    {children}
  </div>
);

export default SectionTag;
