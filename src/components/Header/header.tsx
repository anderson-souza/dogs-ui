import * as React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Header: React.SFC = () => {
  return (
    <header>
      <h2>Dogs UI</h2>
      <p>Informações de Dogs</p>
      <nav>
        <Link to='/' className='header-link'>
          Home Page
        </Link>
      </nav>
    </header>
  );
};

export default Header;
