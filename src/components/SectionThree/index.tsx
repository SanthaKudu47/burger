import BurgerCard from "../common/BurgerCard";
import Container from "../Containers/Container";
import { data } from "./data";

export default function SectionThree() {
  return (
    <Container size="lg" customStyles="my-5 bg-mainBaseDark">
      <h4 className="font-baseFont text-[75px] text-center">Most Devoured</h4>
      <h4 className="font-baseFont text-[75px] text-center">Burgers</h4>
      <div className="flex flex-row flex-wrap gap-x-20 justify-center my-16">
        {data.map((burger) => {
          return (
            <BurgerCard
              key={burger.id}
              image={burger.image}
              price={burger.price}
              type={burger.name}
            />
          );
        })}
      </div>
      <div className="flex flex-row flex-wrap gap-x-20 justify-center my-16">
        {data.map((burger) => {
          return (
            <BurgerCard
              key={burger.id}
              image={burger.image}
              price={burger.price}
              type={burger.name}
            />
          );
        })}
      </div>
    </Container>
  );
}
