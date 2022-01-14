import "./style.css";

import LiquidityColumns from "../LiquidityColumns";

import data from "../../assets/JSON/liquidities.json";

const Stake = () => {
  console.log(data[0].token1)
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

        <div className="liq_rows">
          <div role="button" className='stake_wrapped stake_columns'>
            <div className="stake_col">
              
            </div>

            <div className="tvl_col">

            </div>

            <div className="rewards_col">

            </div>

            <div className="apr_col">
                423%
                <sub>annualized</sub>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Stake;
