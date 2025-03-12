interface NavContainerProps {
  children: React.ReactNode;
}

export function NavContainer({ children }: NavContainerProps) {
  return (
    <div className="max-w-[100rem] mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        {children}
      </div>
    </div>
  );
}