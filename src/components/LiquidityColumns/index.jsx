import './style.css'
import { useState } from 'react';

function LiquidityColumns({token1, token2, tvl, apr}) {

    const [toggle, setToggle] = useState(false)

    return(
      <>
        <div role="button" className='liquidity_wrapped' onClick={() => setToggle(!toggle)}>
          <div className="liquidity_col">
            <img src={token1.thumb}/>
            <img src={token2.thumb}/>
            <div>
              <span>{token1.name}</span>
              <span>{token2.name}</span>
            </div>
          </div>

          <div className="tvl_col">
            {tvl}
          </div>

          <div className="apr_col">
              {apr}
              <sub>annualized</sub>
          </div>
        </div>

        {toggle && <div className='submission_area'>
            <input type="number" placeholder='0.0'/>
            <button className='approve'>Approve</button>
            <input type="number" placeholder='0.0'/>
            <button className='unable_bt'>Unstake</button>
        </div>}
      </>
    )
}


export default LiquidityColumns;