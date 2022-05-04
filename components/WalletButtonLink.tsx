import { ConnectWallet } from './ConnectWallet'
import WalletEmailForm from './WalletEmailForm'
  
  export default function WalletButtonLink() {
    return (
        <>
            <div className="box">
                <a className="button" href="#popup1">Connect your wallet</a>
            </div>

            <div id="popup1" className="overlay">
                <div className="popup">
                    <h2>Connect your wallet</h2>
                    <a className="close" href="#">&times;</a>
                    <div className="content">
                        <ConnectWallet />
                    </div>
                </div>
            </div>
        </>
    )
    }
// export const WalletButton = () => {
//     const { handleOpen } = useOverlay()

//     return(
//       <a classNameName="subscribe-button" onClick={handleOpen}>
//       Connect wallet to see my perks!
//       <style jsx>{`
//         a:hover {
//           text-decoration: none;
//           opacity: 1;
//           cursor: pointer;
//         }
//       `}</style>
//     </a>
//     )
// }