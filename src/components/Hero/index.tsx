import Container from "../Containers/Container";
import heroImage from "../../assets/images/hero_image.png";
import Button from "../common/Button";
import FrenchFriesIcon from "../common/FrenchFriesIcon";

function Title({ size = "lg" }: { size: "lg" | "md" | "sm" }) {
  const fontTextSize = size === "lg" ? "text-heroTitle" : "text-[75px]";
  return (
    <div className={`font-baseFont font-normal ${fontTextSize}`}>
      <h3>Love Every</h3>
      <h3 className="-mt-12">Burger</h3>
    </div>
  );
}

function MainText({ size = "lg" }: { size: "lg" | "md" | "sm" }) {
  const fontSizeStyle = size === "lg" ? "text-2xl" : "text-xl";
  return (
    <p className={`font-subTitleFont  text-mainFontLight ${fontSizeStyle}`}>
      We serve the best burgers on the planet, paving the way for cooking and
      preparing hot, delicious burgers.
    </p>
  );
}

function ButtonAndIcon({ size = "lg" }: { size: "lg" | "md" | "sm" }) {
  const marginTop = size === "lg" ? "mt-7" : "mt-3";
  const marginLeft = size === "lg" ? "ml-[180px]" : "ml-0";
  const alignContents = size === "sm" ? "justify-center" : "";
  return (
    <div className={`flex items-end ${marginTop} ${alignContents}`}>
      <Button label="Bite Now" />
      <div className={`flex ${marginLeft}`}>
        <FrenchFriesIcon size={100} />
      </div>
    </div>
  );
}

function ImageOfBurger() {
  return (
    <div className="flex-col flex items-center justify-center">
      <img src={heroImage} />
    </div>
  );
}

export default function Hero() {
  return (
    <>
      <Container size="lg" customStyles="z-0">
        <div className="h-screen">
          <div className=" grid grid-cols-2  relative h-[calc(100%-52px)] mt-[52px] ">
            <div className="text-left justify-center flex flex-col">
              <Title size="lg" />
              <MainText size="lg" />
              <ButtonAndIcon size="lg" />
            </div>
            <ImageOfBurger />
          </div>
        </div>
      </Container>
      <Container size="sm" customStyles="px-10">
        <Title size="sm" />
        <MainText size="sm" />
        <ButtonAndIcon size="sm" />
        <ImageOfBurger />
      </Container>
    </>
  );
}
