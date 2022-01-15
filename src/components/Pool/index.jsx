import "./style.css"
import ConnectWalletBt from "../ConnectWallletBt";
import FarmTicker from "../FarmTicker";

const Pool = () => {
  return (
    <>
    <section>
        <article className="pool_article">
          <p className="inner_title">My Liquidity Positions</p>
          
          <ConnectWalletBt fullWidth/>
        </article>
    </section>

    <FarmTicker/>
    </>
  );
};

export default Pool;