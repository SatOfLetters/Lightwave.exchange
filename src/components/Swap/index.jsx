import "./style.css"
import settingSvg from "../../assets/settings.svg"
import token1Thumb from "../../assets/ATOM.png"
import token2Thumb from "../../assets/LWAVE.png"
import invertSwap from "../../assets/invert_swap.svg"
import ConnectWalletBt from "../ConnectWallletBt";


const Swap = () => {
  return (
    <section>
        <article className="swap_article">
            <div className="swap_header">
              <span>Swap</span>

              <button>
                  <img src={settingSvg}/>
              </button>
            </div>

            <div>
              <div>
                <span>From</span>
                <div className="token_input">
                  <input type="number" placeholder="0.0" />
                  <button>
                    <img src={token1Thumb}/>
                    <p>ATOM</p>
                    <span></span>
                  </button>
                </div>
              </div>

              <button className="invert_swap">
                <img src={invertSwap}/>
              </button>

              <div>
                <span>To (est.)</span>
                <div className="token_input">
                  <input type="number" placeholder="0.0" />
                  <button>
                    <img src={token2Thumb}/>
                    <p>LWAVE</p>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>

            <ConnectWalletBt fullWidth/>
        </article>
    </section>
  );
};



export default Swap;