import "./style.css"
import ConnectWalletBt from "../ConnectWallletBt";

const Pool = () => {
  return (
    <section>
        <article className="pool_article">
          <p className="inner_title">My Liquidity Positions</p>
          
          <ConnectWalletBt fullWidth/>
        </article>
    </section>
  );
};

export default Pool;