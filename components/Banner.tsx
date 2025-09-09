import AcademiaName from "./AcademiaName";

export default function Banner() {
  return (
    <div
      className="w-full h-64 flex items-center justify-center"
      style={{ backgroundColor: "#506642" }}
    >
      <img
        src="/banner.png"
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
