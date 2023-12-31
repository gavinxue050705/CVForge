import "../../styles/Header.css";
import ButtonSavePDF from "./ButtonSavePDF";

function Header() {
  return (
    <div className="container header">
      <h1>CVForge</h1>
      <ButtonSavePDF />
      <button className="button-github">
        <i className="fa-brands fa-github"></i> gavin xue
      </button>
    </div>
  );
}

export default Header;
