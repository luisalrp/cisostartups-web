import { ConnectWallet } from './ConnectWallet'
import WalletEmailForm from './WalletEmailForm'
  
  export default function WalletButton() {
    return (
        <>
        <div style={{ zIndex: 54 }} className="dropdown_2">
            <input type="checkbox" id="dropdown" />

                <label className="dropdown__face_2" htmlFor="dropdown">
                <div style={{ color: "black" }} className="dropdown__text_2">Connect your wallet</div>

                <div className="dropdown__arrow_2"></div>
            </label>

            <ul className="dropdown__items_2">
                <li>
                    <WalletEmailForm />    
                </li>
                <li>
                    <ConnectWallet />    
                </li>
            </ul>
            </div>

            <svg>
            <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                <feBlend in="SourceGraphic" in2="goo" />
            </filter>
            </svg>
        </>
    )
    }
// export const WalletButton = () => {
//     const { handleOpen } = useOverlay()

//     return(
//       <a className="subscribe-button" onClick={handleOpen}>
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