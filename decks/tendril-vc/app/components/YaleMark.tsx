import Image from "next/image";

type Props = {
  className?: string;
  height?: number;
};

export default function YaleMark({ className = "", height = 14 }: Props) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/logos/yale-logo.png"
        alt="Yale University"
        width={Math.round(height * 2.7)}
        height={height}
        className="w-auto opacity-80"
        style={{ height: `${height}px` }}
        priority
      />
    </span>
  );
}
