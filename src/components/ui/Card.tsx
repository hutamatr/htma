interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={`flex flex-col gap-y-2 rounded bg-custom-white p-2 shadow-custom-shadow ${className}`}
    >
      {children}
    </div>
  );
}
