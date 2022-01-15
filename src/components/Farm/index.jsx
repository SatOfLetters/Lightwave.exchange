import "./style.css";

import LiquidityColumns from "../LiquidityColumns";

import data from "../../assets/JSON/liquidities.json";

import FarmTicker from "../FarmTicker";

const Farm = () => {
  console.log(data[0].token1)
  return (
    <>
    <section>
        <h2><b>Farm: </b>Stake liquidity pool tokens to earn rewards in LWAVE.</h2>

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
    </section>

    <FarmTicker/>
    
    </>


  );
};

export default Farm;
