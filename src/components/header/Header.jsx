import "../../styles/Header.css";
import ButtonSavePDF from "./ButtonSavePDF";

function Header() {
  return (
    <div className="container header">
      <h1>CVForge</h1>
      <ButtonSavePDF />
    </div>
  );
}

export default Header;
