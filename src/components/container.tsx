interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  asSection?: boolean;
}

export function Container({
  children,
  className = "",
  asSection = false,
}: ContainerProps) {
  if (asSection) {
    return (
      <div className={`w-full ${className}`}>
        <div className="max-w-4xl border-t mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-10 lg:py-12 border-x">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10 lg:py-12 border-x ${className}`}
    >
      {children}
    </div>
  );
}
