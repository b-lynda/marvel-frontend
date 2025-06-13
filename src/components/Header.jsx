import { Link } from "react-router-dom";
import Logo from "../img/logomarvel.png";

const Header = () => {
  return (
    <section className="container">
      <div className="header">
        <div>
          <Link to="/">
            <img src={Logo} alt="logo marvel" />
          </Link>
        </div>
        <div className="menu">
          <div>
            <Link to="/personnages">Personnages</Link>
          </div>
          <div>
            <Link to="/comics">Comics</Link>
          </div>
          <div>
            <Link to="/favoris">Favoris</Link>
          </div>
        </div>
        <div className="login">
          <Link to="/login">Se Connecter</Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
