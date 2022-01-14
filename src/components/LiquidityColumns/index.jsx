import './style.css'

function LiquidityColumns({token1, token2, tvl, apr}) {
    return(
        <div role="button" className='liquidity_wrapped'>
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
    )
}


export default LiquidityColumns;