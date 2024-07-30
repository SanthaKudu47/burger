import Container from "../Containers/Container";
import burgerPack from "../../assets/images/burger_box_image.png";
import drinkImage from "../../assets/images/drink.png";
import deliveryPerson from "../../assets/images/del_boy 1.png";
import Button from "../common/Button";
import FbIcon from "../common/FbIcon";
import WhatsAppWebIcon from "../common/WhatsAppIcon";
import TelegramIcon from "../common/TelegramIcon";

export default function SectionFour() {
  return (
    <Container size="lg">
      <div className="grid grid-cols-3">
        <div className="col-span-2  text-left">
          <h4 className="font-baseFont text-[45px]">Fast Delivery</h4>
          <p className="font-subTitleFont text-[25px] px-3 text-mainFontLight">
            Place your order for your favourite burger and we will deliver it to
            your door in minutes,get in touch and dont leave hungry.
          </p>
          <div className=" flex flex-row items-baseline justify-between w-1/2 my-10">
            <Button label="Contact Now" />
            <img src={drinkImage} alt="drink_image" width={55} />
          </div>
        </div>
        <div className="col-span-1 p-2">
          <img src={burgerPack} />
        </div>
      </div>
      <div className="my-20 w-3/4 mx-auto">
        <div className="bg-mainFontDark w-full rounded-2xl mx-auto">
          <h4 className="font-baseFont text-mainBaseLight text-[25px] ">
            Contact Now
          </h4>
          <div className="grid-cols-2 grid">
            <div className="col-span-1">
              <img src={deliveryPerson} alt="delivery_boy" />
            </div>
            <div className="col-span-1 text-left font-baseFont text-mainBaseLight text-[20px]  flex flex-col justify-end">
              <div className="grid grid-cols-2 my-10">
                <div className="col-span-1">
                  <h5>Write Us</h5>
                  <div className="flex flex-row gap-4">
                    <FbIcon />
                    <WhatsAppWebIcon />
                    <TelegramIcon />
                  </div>
                </div>
                <div className="col-span-1 font">
                  <h5>Contact Us And Order</h5>
                  <p className="text-contactNumber text-[15px] font-subTitleFont">
                    +00 985 8745 877
                  </p>
                  <p className="text-contactNumber text-[15px] font-subTitleFont">
                    +00 985 874
                  </p>
                </div>
              </div>
              <div>Find Us Here</div>
              <div className="my-10"></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
