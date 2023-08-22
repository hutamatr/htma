interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={`flex w-full cursor-pointer flex-col rounded bg-transparent ${className}`}
    >
      {children}
    </div>
  );
}
