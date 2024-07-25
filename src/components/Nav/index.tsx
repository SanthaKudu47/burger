import Container from "../Containers/Container";
import DesktopNav from "./desktop";
import MobileNav from "./mobile";

export default function Nav() {
  return (
    <div className="sticky top-0 z-10">
      <div className="w-full shadow-md bg-mainBaseLight absolute ">
        <Container size="lg">
          <DesktopNav />
        </Container>
      </div>

      <Container size="sm">
        <div>
          <MobileNav />
        </div>
      </Container>
    </div>
  );
}
