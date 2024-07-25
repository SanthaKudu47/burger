import { useCallback, useState } from "react";
import Logo from "../../common/Logo";
import MenuIcon from "../../common/MenuIcon";
import CloseButton from "../../common/CloseButton";
import NavButton from "../../common/NavButton";

export default function MobileNav() {
  const [isOpened, setOpen] = useState(false);

  const clickEventHandler = useCallback(
    function () {
      setOpen(!isOpened);
    },
    [isOpened]
  );

  return (
    <div className="flex flex-row h-[50] justify-between items-center mx-2">
      <div className="font-baseFont font-normalWeight flex  items-center text-lg p-1 ">
        <Logo />
        <span className="ml-2">Burger</span>
      </div>
      <span className="cursor-pointer" onClick={clickEventHandler}>
        <MenuIcon />
      </span>
      {isOpened && (
        <div className="absolute  bg-red-600 right-0 left-0 top-0">
          <div className="w-full text-left">
            <CloseButton />
          </div>
          <div>
            <NavButton />
            <NavButton />
            <NavButton />
            <NavButton />
          </div>
        </div>
      )}
    </div>
  );
}
