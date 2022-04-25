import {
    useMetamask,
    useWalletConnect,
    useCoinbaseWallet,
    useNetwork,
    useAddress,
    useDisconnect,
  } from '@thirdweb-dev/react';
  import { useOverlay } from '@components/contexts/overlayProvider'
  import { useRouter } from 'next/router';

  
  export const ConnectWallet = (chainid) => {
    const router = useRouter()
    const connectWithCoinbaseWallet = useCoinbaseWallet();
    const connectWithMetamask = useMetamask();
    const connectWithWalletConnect = useWalletConnect();
    const disconnectWallet = useDisconnect();
    const address = useAddress();
    const network = useNetwork();

    const { handleOpen } = useOverlay()
    
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

      
      // If a wallet is connected, show address, chainId and disconnect button
      if (address) {
        const chainid = network[0].data.chain.id
        if (network[0].data.chain.id === 42220) {          
            router.push("http://82.223.128.82:3003/members/?token=4qWeuJynRxAPEllEIIg0Tm6im02SyQQR&action=signin")
        }
        return (
          <div style={{ color: "white", zIndex: "10" }} >
            Direccion: {address}
            <br />
            Chain ID: {network[0].data.chain && network[0].data.chain.id}
            <br />
            <button onClick={disconnectWallet}>Desconectar</button>
          </div>
        );
    }
  
    // If no wallet is connected, show connect wallet options
    return (
        <>
            <br />
            <div style={{ borderRadius: 11, justifyContent: "center", marginLeft: "10px", marginBottom: "16px", backgroundColor: "#000", padding: "11px 20px 11px 20px", margin: "auto", color: "white", zIndex: "10" }} > 
                <h4 style={{ textAlign: "center", justifyContent: "center", fontFamily: "Montserrat Light", paddingTop: "11px" }}>Buy my <a href='https://beta.talentprotocol.com/u/luisalrp?tab=overview' target={"blank"}><span style={{ color: "#fcba03", fontFamily: "Montserrat Medium" }}>personal token</span></a> to support our research activities and access to exclusive perks! <br /><br /><a href='https://beta.talentprotocol.com/sign_up?code=SUP-e17b4e7309f3eff0' target={"blank"}><span style={{ color: "#fcba03", fontFamily: "Montserrat Medium" }}>Sign up</span></a> for the talent protocol private beta</h4>
                <br />
                <button style={{ justifyContent: "center", borderRadius: 11, backgroundColor: "black", color: "white", padding: "45px", marginRight: 11 }} onClick={() => connectWithCoinbaseWallet()}>
                Connect Coinbase Wallet
                </button>
                <button style={{ justifyContent: "center", borderRadius: 11, backgroundColor: "black", color: "white", padding: "45px", marginRight: 11 }} onClick={() => connectWithMetamask()}>Connect MetaMask</button>
                <button style={{ justifyContent: "center", borderRadius: 11, backgroundColor: "black", color: "white", padding: "45px", marginRight: 11 }} onClick={() => connectWithWalletConnect()}>
                Connect WalletConnect
                </button>
            </div>
        </>
    );
  };