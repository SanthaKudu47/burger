import ChickenBurger from "../../../assets/images/chicken_burger.png";
import PurchaseIcon from "../PurchaseIcon";

export default function BurgerCard({
  image = ChickenBurger,
  type = "Chicken",
  price = 6,
}: {
  image?: string;
  type: string;
  price: number;
}) {
  return (
    <div className="w-[245px] h-[280px] bg-mainYellowLight rounded-2xl border-4 border-white relative">
      <div className="w-[170px] h-[120px]  mx-auto -mt-10">
        <img src={image} alt="burger_image" />
      </div>
      <div className="grid grid-cols-3 px-3 absolute bottom-0 left-0 right-0 my-5">
        <div className="col-span-2 text-left font-baseFont text-[25px]">
          <p>{type}</p>
          <p>Burger</p>
          <p>${price}</p>
        </div>
        <div className="col-span-1 flex justify-center items-end">
          <PurchaseIcon />
        </div>
      </div>
    </div>
  );
}
