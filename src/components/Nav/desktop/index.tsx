import Logo from "../../common/Logo";
import NavButton from "../../common/NavButton";

export default function DesktopNav() {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center">
        <Logo></Logo>
        <span className="font-baseFont text-title ml-5">Burger</span>
      </div>
      <div>
        <ul className="float-left flex mx-3 space-x-10">
          <li>
            <NavButton label="Home" />
          </li>
          <li>
            <NavButton label="Recipe" />
          </li>
          <li>
            <NavButton label="Popular" />
          </li>
          <li>
            <NavButton label="Delivery" />
          </li>
          <li>
            <NavButton label="Contact"/>
          </li>
        </ul>
      </div>
    </div>
  );
}
