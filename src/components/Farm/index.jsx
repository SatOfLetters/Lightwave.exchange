import "./style.css";

import LiquidityColumns from "../LiquidityColumns";

import data from "../../assets/JSON/liquidities.json";

const Farm = () => {
  console.log(data[0].token1)
  return (
    <section>
      {/* <article className="info_box">
        <h1>Farms</h1>
        <h2>Stake liquidity pool tokens to earn rewards in TOKEN.</h2>

        <div className="info_ctnr">
          <span>Total Value Locked</span>
          <p>$58.391.058</p>
        </div>

        <div className="info_ctnr">
          <span>Farms TVL</span>
          <p>$54.132.112</p>
        </div>

        <div className="info_ctnr">
          <span>My Holdings</span>
          <p>$0.00</p>
        </div>
      </article> */}
      
      <h1>FARMS</h1>
      <h2>Stake liquidity pool tokens to earn rewards in TOKEN.</h2>

      <article className="wide_article">
        <div className="info_columns farm_columns">
          <div className="col1">Liquidity</div>
          <div className="col2">TVL</div>
          <div className="col3">APR</div>
        </div>

        <div className="liq_rows farm_columns">
          {data.map((item) => (
            <LiquidityColumns key={item.ID} token1={item.token1} token2={item.token2} tvl="$7,947,274" apr="184%"/>
          ))}
        </div>
      </article>

      <footer>
        <div>TVL <b>$58.391.058</b></div>
        <div>FARMS TVL <b>$54.132.112</b></div>
        <div>YOUR HOLDINGS <b>$00.00</b></div>
      </footer>
    </section>
  );
};

export default Farm;
