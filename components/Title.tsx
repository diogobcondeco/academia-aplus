export default function Title({ text }: { text: string }) {
  return (
    // <h2 className="text-3xl text-gray-900 font-bold text-center">{text}</h2>
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{text}</h2>
  );
}
