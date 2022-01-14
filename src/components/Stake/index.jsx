import "./style.css";
import data from "../../assets/JSON/stakes.json";

import tok1 from "../../assets/TOK1.png"
import tok2 from "../../assets/TOK2.png"
import StakeColumn from "../StakeColumn";

const Stake = () => {
  
  return (
    <section>
      <article className="info_box">
        <h1>Stake</h1>
        <h2>Lock TOKEN to receive sTOKEN token, the longer you lock the more sTOKEN you will receive.</h2>

        <div className="info_ctnr">
          <span>Total TOKEN Locked</span>
          <p>947.283</p>
        </div>

        <div className="info_ctnr">
          <span>Total sTOKEN Minted</span>
          <p>193.457</p>
        </div>

        <div className="info_ctnr">
          <span>Total sTOKEN Staked</span>
          <p>294.323</p>
        </div>
      </article>

      <article className="wide_article">
        <div className="info_columns stake_columns">
          <div className="col1">Stake</div>
          <div className="col2">TVL</div>
          <div className="col3">Rewards</div>
          <div className="col4">APR</div>
        </div>

        {
          data.map((item) => (<StakeColumn key={item.ID} token1={item.token1} token2={item.token2} apr={423}/>))
        }
      </article>
    </section>
  );
};

export default Stake;
