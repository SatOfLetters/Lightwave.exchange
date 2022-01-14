import './style.css'


function ConnectWalletBt({fullWidth}) {
    return(
        <button className={`button ${fullWidth?"button_alt":""}`}>Connect to a wallet</button>
    )
}

export default ConnectWalletBt