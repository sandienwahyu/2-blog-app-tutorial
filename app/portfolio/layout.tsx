export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col flex-1 justify-center gap-4 overflow-hidden">
      <h1 className="text-4xl font-bold">Our Works</h1>
      {children}
    </div>
  );
}
