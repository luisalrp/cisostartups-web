import {
    useMetamask,
    useWalletConnect,
    useCoinbaseWallet,
    useNetwork,
    useAddress,
    useDisconnect,
    useToken,
  } from '@thirdweb-dev/react';
  import { useOverlay } from '@components/contexts/overlayProvider'
  import { useRouter } from 'next/router';
  import { useState } from 'react';
  
  import { ghostAPIUrl, tokenAddress } from '@lib/processEnv'

  export const ConnectWallet = (chainid) => {
    const router = useRouter()
    const connectWithCoinbaseWallet = useCoinbaseWallet();
    const connectWithMetamask = useMetamask();
    const connectWithWalletConnect = useWalletConnect();
    const disconnectWallet = useDisconnect();
    const address = useAddress();
    const network = useNetwork();
    const token = useToken()
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log('Sending')

      let data = {
          email
      }

      fetch('/api/v1/email', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
          console.log('Response received')
          if (res.status === 200) {
              console.log('Response succeeded!')
              setSubmitted(true) 
              setEmail('')
          }
      })
    }

    const connect = async() => {
      const provider = new WalletConnectProvider({
          rpc: {
            44787: "https://alfajores-forno.celo-testnet.org",
            42220: "https://forno.celo.org",
          },
        });
        
        await provider.enable()
        const web3 = new Web3(provider);
        let kit = newKitFromWeb3(web3)
        
        kit.defaultAccount = provider.accounts[0]
        
        provider.on("accountsChanged", (accounts) => {
          console.log(accounts);
        });
        
        this.setState({provider, kit})
      }
      
      const subscribe = async () => {
        try {
          const result = await fetch(
            `${ ghostAPIUrl }/members/api/send-magic-link/`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({ email: email, emailType: `subscribe` })
            }
          );
    
          const r = await result();
    
          console.log(r)
          }
        catch {
          console.error()
        }
      };
      
      // If a wallet is connected, show address, chainId and disconnect button
      if (address) {
        const chainid = network[0].data.chain.id
        subscribe()
        async function balance() {
          const balance = await token.balance()
          return balance
        }
        // if (network[0].data.chain.id === 42220) {          
        // }
        return (
          <div style={{ backgroundColor: "rgba(0, 0, 0, 1)", color: "white", zIndex: "10", borderRadius: 11, padding: 28, maxWidth: "45%" }} >
            <p style={{  }}>Address: {address}</p>
            <br />
            Chain ID: {network[0].data.chain && network[0].data.chain.id}
            <br />
            Name: {network[0].data.chain.name}
            <br />
            Quantity: {balance}
            <button style={{ borderRadius: 11, backgroundColor: 'black', color: "white", padding: 11 }} onClick={disconnectWallet}>Desconectar</button>
          </div>
        );
    }
  
    // If no wallet is connected, show connect wallet options
    return (
        <>
            <br />

            <div style={{ margin: "auto", color: "white", zIndex: "10" }} >
              <form action='/api/v1/email'>
                <input style={{ padding: 11, backgroundColor: "white", borderColor: "black", border: 1, borderRadius: 11, color: "black" }} type='email' onChange={(e)=>{setEmail(e.target.value)}} />
                <br />
                <button style={{ justifyContent: "center", borderRadius: 20, marginLeft: 5, marginRight: 5, backgroundColor: "black", color: "white", padding: "5px 28px 5px 28px", marginBottom: 5 }} onClick={(e) => {connectWithCoinbaseWallet(), handleSubmit(e)}}>
                Connect Coinbase Wallet
                </button>
                <button style={{ justifyContent: "center", borderRadius: 20, marginLeft: 5, marginRight: 5, backgroundColor: "black", color: "white", padding: "5px 28px 5px 28px", marginBottom: 5 }} onClick={(e) => {connectWithMetamask(), handleSubmit(e)}}>Connect MetaMask</button>
                <button style={{ justifyContent: "center", borderRadius: 20, marginLeft: 5, marginRight: 5, backgroundColor: "black", color: "white", padding: "5px 28px 5px 28px", marginBottom: 5 }} onClick={(e) => {connectWithWalletConnect(), handleSubmit(e)}}>
                Connect WalletConnect
                </button>
              </form>
            </div>
        </>
    );
  };