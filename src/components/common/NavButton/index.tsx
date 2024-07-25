import "./styles.css";

export default function NavButton({ label = "Home" }: { label?: string }) {
  return (
    <div className="flex flex-col content-normal w-max" id="nav_button">
      <span className="font-baseFont text-lg cursor-pointer">{label}</span>
      <div className="h-1 bg-mainYellowLight" id="light"></div>
    </div>
  );
}
