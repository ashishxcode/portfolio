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
      <div className={`w-full border-t ${className}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20 border-x">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`max-w-4xl mx-auto px-4 py-6 sm:px-6 sm:py-8 lg:px-12 lg:py-12 border-x ${className}`}
    >
      {children}
    </div>
  );
}
