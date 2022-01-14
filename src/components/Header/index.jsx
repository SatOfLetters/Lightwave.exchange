import "./style.css";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useMediaQuery } from 'react-responsive'
import token1Thumb from "../../assets/TOK1.png"
import ConnectWalletBt from "../ConnectWallletBt";

const Header = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 900px)'
      })
    const buttonRef = useRef(null)
    const [ menu, setMenu ] = useState(false)
    
    const validation = isDesktopOrLaptop && !menu ? true : !isDesktopOrLaptop && menu ? true : false

  return (
    <header>
        <div className="flex_header">
            <img src={Logo} className="logo" />

            <button className="hambt" onClick={() => setMenu(!menu)} ref={buttonRef}>
                <div></div>
                <div></div>
                <div></div>
            </button>
        </div>

      {validation && <nav>
        <Link to="/">Swap</Link>
        <Link to="/pool">Pool</Link>
        <Link to="/farm">Farm</Link>
        <Link to="/stake">Stake</Link>
      </nav>}
      
      <div className="connect_wallet">
        <div className="token_price">
          <img src={token1Thumb}/>
          <span>$0.00</span>
        </div>
        <ConnectWalletBt/>
      </div>
    </header>
  );
};

export default Header;
