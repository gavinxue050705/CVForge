import "../../styles/Header.css";
import ButtonGithub from "./ButtonGithub";
import ButtonSavePDF from "./ButtonSavePDF";

function Header() {
  return (
    <div className="container">
      <div className="row-header">
        <h1>
          <span>CV</span>Forge
        </h1>
        <img src="/public/anvil.png" alt="anvil" />
      </div>
      <ButtonSavePDF />
      <ButtonGithub />
    </div>
  );
}

export default Header;
