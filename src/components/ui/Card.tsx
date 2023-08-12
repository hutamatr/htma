interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div className={`flex flex-col rounded bg-transparent ${className}`}>
      {children}
    </div>
  );
}
