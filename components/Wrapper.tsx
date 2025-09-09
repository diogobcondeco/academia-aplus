export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 px-8 max-w-4xl mx-auto">{children}</div>
  );
}
