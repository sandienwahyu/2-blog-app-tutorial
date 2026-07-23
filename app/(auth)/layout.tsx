"use client";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      <div className="flex justify-center items-center min-w-72 h-98 p-5 bg-background border border-border rounded-xl">
        {children}
      </div>
    </div>
  );
}
