import Image from 'next/image'
import Link from 'next/link'

import { SiteNav } from '@components/SiteNav'
import { HeaderBackground } from '@components/HeaderBackground'
import { getLang, get } from '@utils/use-lang'
import { GhostSettings, NextImage } from '@lib/ghost'

import { ConnectWallet } from "./ConnectWallet"
import { useState } from 'react'
import { memberSubscriptions } from '@appConfig'
import { connect } from 'http2'

import { ConnectUser } from './ConnectUser'

import Video from 'next'

interface HeaderIndexProps {
  settings: GhostSettings
}

export const HeaderIndex = ({ settings }: HeaderIndexProps) => {

  const [ coinsMember, setCoinsMember] = useState(false)
  
  const text = get(getLang(settings.lang))
  const site = settings
  const siteLogo = site.logoImage
  const coverImg = site.cover_image || ''
  const title = text(`SITE_TITLE`, site.title)
  
  const { processEnv } = settings
  const { siteUrl, nextImages } = processEnv
  const { feature: nextFeatureImages, quality: imageQuality } = nextImages
  
  // targetHeight is coming from style .site-logo
  const targetHeight = 100
  const calcSiteLogoWidth = (image: NextImage, targetHeight: number) => {
    const { width, height } = image.dimensions
    return (targetHeight * width) / height
  }


  // // Create a token without the client
  // const jwt = require('jsonwebtoken');
  // const axios = require('axios');

  // // Admin API key goes here
  // const key = '623ca36ec956250001663e8e:2b908355d73ba49dd775d7b5465fe6a8df5c59ee253daab36dc58d7e64e62fd7';

  // // Split the key into ID and SECRET
  // const [id, secret] = key.split(':');

  // // Create the token (including decoding secret)
  // const token = jwt.sign({}, Buffer.from(secret, 'hex'), {
  //     keyid: id,
  //     algorithm: 'HS256',
  //     expiresIn: '5m',
  //     audience: `/canary/admin/`
  // });

  // // Make an authenticated request to create a post
  // const url = 'http://ciiserver.metodociimas.com:3003/ghost/api/canary/admin/members/625ffb8dc956250001663eb0/signin_urls/';
  // const headers = { Authorization: `Ghost ${token}` };
  // axios(url, { headers })
  //     .then((response: any) => console.log(response))
  //     .catch((error: any) => console.error(error));


  return (
    <header className="site-home-header">
      <HeaderBackground srcImg={""}>
        <div className="inner">
          <SiteNav className="site-nav" {...{ siteUrl, settings }} />
          <div className="site-header-content">
            <div style={{ marginTop: 200, zIndex: 64 }}>
              <br></br>
              <br></br>
              <h1 className="site-description">Build securely with us</h1>
              <h1 className="site-description__text">We’re a boutique cyber security firm of experts.
  Born and bred to help Startups protect their business and their customer's information.</h1>
              <button className='boton-twitter' style={{ width: "50%", opacity:30, marginLeft: "25%", marginRight: "25%", zIndex: 100, textDecoration: "none", marginTop: 54, marginBottom: 20, backgroundColor: "rgba(196, 148, 12, 1)", borderRadius: 50, padding: "9px 20px 9px 20px" }}><a style={{ color: "white" }} href="https://twitter.com/messages/3192504664-1164983863736713216?recipient_id=1164983863736713216&text=Hi,%20I%20would%20like%20to%20know%20more" rel="noreferrer" target="_blank">DM us on Twitter</a></button>
              <br></br>
              <br />
              <ConnectWallet />
              { ConnectUser() }
              {/* <button style={{ zIndex: 100 }} onClick={() => {!memberSubscriptions} }>Hacerte miembro</button> */}
            </div>
            <video className='video-1' loop style={{ zIndex: 54, position: "absolute" }} autoPlay width={ "100%" } height={"auto"} src="/intro.mp4"></video>
          </div>
        </div>
      </HeaderBackground>
    </header>
  )
}
