import "./style.css";
import { useState } from "react";

const StakeColumn = ({token1, token2, apr}) => {

    const [toggle, setToggle] = useState(false)

    const tvl = Intl.NumberFormat('en-us', {style:'currency', currency:'usd'}).format(token1.tvl)

  return (
    <>
      <div
        role="button"
        className="liquidity_wrapped"
        onClick={() => setToggle(!toggle)}
        className="stake_wrapped stake_columns">
        <div className="stake_col">
          <img src={token1.thumb} />
          {token1.name}
        </div>

        <div className="tvl_col">{Intl.NumberFormat('en-us', {style:'currency', currency:'usd'}).format(token1.TVL)}</div>

        <div className="rewards_col">
          <img src={token2.thumb} />
          {`${token2.rewards} ${token2.name} / DAY`}
        </div>

        <div className="apr_col">
          {apr}%
          <sub>annualized</sub>
        </div>
      </div>

      {toggle && (
        <div className="submission_area">
          <input type="number" placeholder="0.0" />
          <button className="approve">Approve</button>
          <input type="number" placeholder="0.0" />
          <button className="unable_bt">Unstake</button>
        </div>
      )}
    </>
  );
};

export default StakeColumn;
