// images
import logo from "../../assets/logo.png";
import Container from "../common/Container";

function Footer() {
  return (
    <section className="flex justify-center items-center mt-12 mb-12 relative border-t-[1px] border-t-gray-200">
      <Container>
        <div className="flex flex-col gap-8 mt-6 items-center">
          <img src={logo} alt="Logo" className="w-36" />
          <div className="flex flex-col sm:flex-row gap-8">
            <p>SpaceX @2023</p>
            <a href="#">Privacy Policy</a>
            <a href="#">Suppliers</a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Footer;
