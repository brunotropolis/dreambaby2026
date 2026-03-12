interface WaveDividerProps {
  topColor: string;
  bottomColor: string;
  variant?: 'down' | 'up' | 'gentle';
}

const WaveDivider = ({ topColor, bottomColor, variant = 'down' }: WaveDividerProps) => {
  const paths: Record<string, string> = {
    down: "M0,60 C480,0 960,60 1440,0 L1440,60 Z",
    up: "M0,0 C360,60 1080,0 1440,40 L1440,0 Z",
    gentle: "M0,60 C360,0 1080,60 1440,20 L1440,60 Z",
  };

  return (
    <svg
      className="block w-full leading-[0]"
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      style={{ background: topColor, display: 'block' }}
    >
      <path d={paths[variant]} fill={bottomColor} />
    </svg>
  );
};

export default WaveDivider;
