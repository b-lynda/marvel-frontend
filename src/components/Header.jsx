import { Link } from "react-router-dom";
import Logo from "../img/logomarvel.png";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <>
      <section className="container">
        <div className="header">
          <div>
            <Link to="/">
              <img src={Logo} alt="logo marvel" />
            </Link>
          </div>
          <div className="menu">
            <div>
              <Link to="/comics">Comics</Link>
            </div>
            <div>
              <Link to="/favoris">Favoris</Link>
            </div>
            <div>
              <input type="text" placeholder="Rechercher" />
            </div>
          </div>
          <div className="login">
            <Link to="/login">Se Connecter</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
