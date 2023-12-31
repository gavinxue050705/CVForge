import "../../styles/Header.css";
import ButtonGithub from "./ButtonGithub";
import ButtonSavePDF from "./ButtonSavePDF";

function Header() {
  return (
    <div className="container header">
      <h1>CVForge</h1>
      <ButtonSavePDF />
      <ButtonGithub />
    </div>
  );
}

export default Header;
