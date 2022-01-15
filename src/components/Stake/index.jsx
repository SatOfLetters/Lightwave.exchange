import "./style.css";
import data from "../../assets/JSON/stakes.json";
import StakeColumn from "../StakeColumn";

const Stake = () => {
  
  return (
    <section>
        <h2><b>Stake:</b> Lock ATOM to receive LWAVE token. The longer you lock, the more LWAVE you will receive.</h2>

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
