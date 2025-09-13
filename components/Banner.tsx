import AcademiaName from "./AcademiaName";

export default function Banner() {
  return (
    <div className="bg-[#506642] w-full h-64 flex items-center justify-center">
      <img
        src="/images/banner.png"
        alt="Academia Banner"
        className="object-contain z-0"
        style={{
          width: "100%",
          maxWidth: "600px",
          height: "auto",
        }}
      />
    </div>
  );
}
