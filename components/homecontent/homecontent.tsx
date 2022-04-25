import Image from "next/image"
import { ConnectWallet } from '../ConnectWallet';

export const Claim = () => {
    return(
        <div style={{ marginTop: 20, margin: "auto" }} className="content">
            <div className="container">
                <div className="">
                    <h1 style={{ textAlign: "center", marginTop: 54 }} className="main-content_claim_section_2">About</h1>
                    <h2 style={{color: "white", textAlign: "center", fontWeight: 300 }} className="main-content_description_section_3">CISOStartups was founded by Luis Alberto Rodrigo,former PwC Business Security <br />Solutions Manager and current angel investor, to help entrepreneurs with their company security.</h2>
                </div>
                <br />
                {/* <ConnectWallet /> */}
                <div style={{ marginTop: 64 }} className="wrapper">
                    <h1 style={{ textAlign: "center" }} className="main-content_claim_section_2">Features</h1>   
                    <br />     
                    <div className="grid grid--3">
                        <div className="grid2__item">
                            <h1 style={{ textAlign: "left", padding: "45px 20px 11px 45px" }} className="main-content_claim_section_2">Expertise</h1>
                            <h2 style={ {color: "white", textAlign: "left", padding: "0px 28px 45px 45px", fontWeight: 300 }} className="main-content_description_section_3">While we advise CEOs and Boards of Directors on cyber risks in an easy to understand, business-oriented way. We also work with CIOs or CTOs to speak technically about cybersecurity best practises.</h2>
                        </div>
                        <div className="grid3__item">
                            <div style={{ padding: "20px 0px 0px 0px" }} className="grid grid--3">
                                <div className="grid grid--3 grid__item">
                                    <Image className="grid__item2" alt="Security Depth of Experience" width={64} height={64} layout={"fixed"} src={"/Experience.png"}></Image>
                                    <div className="grid__item3">
                                        <article style={{ color: "white", fontWeight: 500 }} className="card">Depth Of Experience</article>
                                        <article className="card">More than 10 years of experience in cybersecurity in multiple sectors, including finance and critical infrastructures.</article>
                                    </div>
                                </div>
                                <div className="grid grid--3 grid__item">
                                    <Image className="grid__item2" alt="Security Agile" width={64} height={64} layout={"fixed"} src={"/Salary.png"}></Image>
                                <div className="grid__item3">
                                    <article style={{ color: "white", fontWeight: 500 }} className="card">Service Instead Of Salary</article>
                                    <article className="card">A professional and service that, due to the level and associated cost, most company's could not access through a traditional employment contract.</article>
                                </div>
                                </div>
                                <div className="grid grid--3 grid__item">
                                    <Image className="grid__item2" alt="Security Agile" width={64} height={64} layout={"fixed"} src={"/Risk.png"}></Image>
                                    <div className="grid__item3">
                                        <article style={{ color: "white", fontWeight: 500 }} className="card">I Share Your Risk</article>
                                        <article className="card">Future rev-share models or stock options in case of startups that have not reached break-even.</article>
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginBottom: 10 }} className="wrapper">
                                <div className="grid grid--3">
                                    <div className="grid grid--3 grid__item">
                                    <Image className="grid__item2" alt="Security Agile" width={64} height={64} layout={"fixed"} src={"/agile.png"}></Image>
                                    <div className="grid__item3">
                                        <article style={{ color: "white", fontWeight: 500 }} className="card">Agile Strategy</article>
                                        <article className="card">Implementation of cybersecurity capabilities in an agile way, according to the moment of the company, technology and risks.</article>
                                    </div>
                                    </div>
                                    <div className="grid grid--3 grid__item">
                                        <Image className="grid__item2" alt="Security Agile" width={64} height={64} layout={"fixed"} src={"/Teach.png"}></Image>
                                    <div className="grid__item3">
                                        <article style={{ color: "white", fontWeight: 500 }} className="card">Awareness And Training</article>
                                        <article className="card">Transmission and education of privacy and security values to the entire company, from the Board and CEO to Support.</article>
                                    </div>
                                    </div>
                                    <div className="grid grid--3 grid__item">
                                        <Image className="grid__item2" alt="Security Agile" width={64} height={64} layout={"fixed"} src={"/Transition.png"}></Image>
                                        <div className="grid__item3">
                                            <article style={{ color: "white", fontWeight: 500 }} className="card">Transition To Full-Time</article>
                                            <article className="card">Possibility to extend functions, become CISO Full-Time or help in the search for the appropriate profile.</article>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                {/* <div className="columns column_2">
                    <div className="descriptions">
                        <i></i>
                        <h1 className="features">Depth Of Experience</h1>
                        <p className="column_1_description">More than 10 years of experience in cybersecurity in multiple sectors, including finance and critical infrastructures.</p>
                    </div>
                    <div className="descriptions">
                        <i></i>
                        <h1 className="features">Service Instead Of Salary</h1>
                        <p className="column_1_description">A professional and service that, due to the level and associated cost, most company's could not access through a traditional employment contract.</p>
                    </div>
                    <div className="descriptions">
                        <i></i>
                        <h1 className="features">I Share Your Risk</h1>
                        <p className="column_1_description">Future rev-share models or stock options in case of startups that have not reached break-even.</p>
                    </div>
                    <div className="descriptions">
                        <i></i>
                        <h1 className="features">Agile Strategy</h1>
                        <p className="column_1_description">Implementation of cybersecurity capabilities in an agile way, according to the moment of the company, technology and risks.</p>
                    </div>
                    <div className="descriptions">
                        <i></i>
                        <h1 className="features">Awareness And Training</h1>
                        <p className="column_1_description">Transmission and education of privacy and security values to the entire company, from the Board and CEO to Support.</p>
                    </div>
                    <div className="descriptions">
                        <i></i>
                        <h1 className="features">Transition To Full-Time</h1>
                        <p className="column_1_description">Possibility to extend functions, become CISO Full-Time or help in the search for the appropriate profile.</p>
                    </div>
                </div> */}
        </div>
    )
}