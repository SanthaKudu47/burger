import BurgerLayers from "../../assets/images/burger_layers.png";
import BurgerBreads from "../../assets/images/burger_bread.png";
import Container from "../Containers/Container";
import { data } from "./data";

function Card({
  image = BurgerBreads,
  title = "Bread",
  text = "Fresh bread,baked to perfection.",
  size = "lg",
}: {
  image: string;
  title: string;
  text: string;
  size: "lg" | "md" | "sm";
}) {
  const sideLength = size === "lg" ? 120 : 65;
  const maxWidth = size === "lg" ? 400 : 200;
  const titleSize = size === "lg" ? "text-[30px]" : "text-[20px]";
  const textSize = size === "lg" ? "text-[25px]" : "text-[15px]";
  const width = `w-[${sideLength}px]`;
  const height = `h-[${sideLength}px]`;

  const maxWidthStyle = `max-w-[${maxWidth}px]`;
  return (
    <div className="flex flex-row gap-x-2  min-w-[400px]">
      <div className="flex">
        <div
          className={`bg-yellowVariant1 rounded-lg border-white border-4 ${width} ${height} items-center justify-center flex`}
        >
          <img src={image} alt="" width={sideLength} height={sideLength} />
        </div>
      </div>
      <div className={`flex flex-col order-last text-left ${maxWidthStyle}`}>
        <div
          className={`font-cardFont font-normal text-mainFontDark ${titleSize}`}
        >
          {title}
        </div>
        <div className={`text-mainFontLight ${textSize}`}>{text}</div>
      </div>
    </div>
  );
}

function Title({ size = "lg" }: { size: "lg" | "md" | "sm" }) {
  const marginTop = size === "lg" ? "my-10" : size === "md" ? "my-8" : "my-5";
  const fontSize =
    size === "lg"
      ? "text-[75px]"
      : size === "md"
      ? "text-[65px]"
      : "text-[45px]";

  return (
    <div className={`${marginTop}`}>
      <h5 className={`font-baseFont font-normal text-center ${fontSize}`}>
        Our Secret Recipe
      </h5>
    </div>
  );
}

function Layout({
  size = "lg",
  cmp1 = <div>cmp1</div>,
  cmp2 = <div>cmp2</div>,
}: {
  size: "lg" | "md" | "sm";
  cmp1?: React.ReactNode;
  cmp2?: React.ReactNode;
}) {
  const gridCols = size === "lg" ? "grid-cols-2" : "grid-cols-3";
  const colSpans = size === "lg" ? "col-span-1" : "col-span-2";
  const gap = size === "lg" ? "justify-evenly" : "gap-y-3";
  return (
    <div className={`grid mt-6 ${gridCols} px-1`}>
      <div className="col-span-1 flex ">{cmp1}</div>
      <div className={`flex ${colSpans} flex-col ${gap}`}>{cmp2}</div>
    </div>
  );
}

function BurgerLayersImage({ size = "lg" }: { size: "lg" | "md" | "sm" }) {
  return size === "lg" ? (
    <>
      <div className="flex items-center">
        <img src={BurgerLayers} alt="burger_layers_im" />
      </div>
    </>
  ) : (
    <>
      <div className="w-full relative flex items-center">
        <div className=" absolute w-[240px] right-5">
          <img src={BurgerLayers} alt="burger_layers_im" />
        </div>
      </div>
    </>
  );
}

function CardList({ size = "lg" }: { size: "lg" | "md" | "sm" }) {
  return (
    <>
      {data.map((data) => {
        return (
          <Card
            size={size}
            key={data.key}
            image={data.image}
            title={data.title}
            text={data.text}
          />
        );
      })}
    </>
  );
}

{
  /* <div className="flex">
        <img src={BurgerLayers} alt="burger_layers_im" />
      </div> */
}

// {data.map((data) => {
//     return (
//       <Card
//         size="lg"
//         key={data.key}
//         image={data.image}
//         title={data.title}
//         text={data.text}
//       />
//     );
//   })}

export default function SectionTwo() {
  return (
    <>
      <Container size="lg" customStyles="px-3">
        <Title size="lg" />
        {/* <div className="grid grid-cols-2 mt-6">
          <div className="flex ">
            <img src={BurgerLayers} alt="burger_layers_im" />
          </div>
          <div className="flex flex-col py-2 justify-evenly">
            {data.map((data) => {
              return (
                <Card
                  size="lg"
                  key={data.key}
                  image={data.image}
                  title={data.title}
                  text={data.text}
                />
              );
            })}
          </div>
        </div> */}
        <Layout
          size="lg"
          cmp1={<BurgerLayersImage size="lg" />}
          cmp2={<CardList size="lg" />}
        />
      </Container>
      <Container size="sm">
        <Title size="sm" />

        {/* <div className="grid grid-cols-3 mt-6">
          <div className="flex col-span-1">
            <img src={BurgerLayers} alt="burger_layers_im" />
          </div>
          <div className="flex flex-col py-2 justify-evenly col-span-2">
            {data.map((data) => {
              return (
                <Card
                  key={data.key}
                  image={data.image}
                  title={data.title}
                  text={data.text}
                  size="sm"
                />
              );
            })}
          </div>
        </div> */}
        <Layout
          size="sm"
          cmp1={<BurgerLayersImage size="sm" />}
          cmp2={<CardList size="sm" />}
        />
      </Container>
    </>
  );
}
