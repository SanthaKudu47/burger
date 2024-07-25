export default function Container({
  size = "sm",
  children = null,
  applyShadow = false,
  customStyles = "",
}: {
  size?: "lg" | "md" | "sm";
  children?: React.ReactNode;
  applyShadow?: boolean;
  customStyles?: string;
}) {
  let styleClassNames = "";
  switch (size) {
    case "sm":
      styleClassNames = "sm:hidden";
      break;
    case "md":
      styleClassNames = "hidden sm:flex md:hidden max-w-screen-md";
      break;
    case "lg":
      styleClassNames = "hidden  md:flex  max-w-screen-xl";
      break;
    default:
      styleClassNames = "";
      break;
  }

  return (
    <div
      className={`w-full mx-auto text-center flex-col flex ${styleClassNames} ${
        applyShadow && "shadow-md"
      }  ${customStyles}`}
    >
      {children ? children : null}
    </div>
  );
}
