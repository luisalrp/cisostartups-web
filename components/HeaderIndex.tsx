import Image from 'next/image'
import Link from 'next/link'

import { SiteNav } from '@components/SiteNav'
import { HeaderBackground } from '@components/HeaderBackground'
import { getLang, get } from '@utils/use-lang'
import { GhostSettings, NextImage } from '@lib/ghost'

interface HeaderIndexProps {
  settings: GhostSettings
}

export const HeaderIndex = ({ settings }: HeaderIndexProps) => {
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

  return (
    <header className="site-home-header">
      <HeaderBackground srcImg={coverImg}>
        <div className="inner">
          <SiteNav className="site-nav" {...{ siteUrl, settings }} />
          <div className="site-header-content">
            <h1 className="site-title">
              {siteLogo && nextFeatureImages ? (
                <Link href="/">
                  <a>
                    <div
                      className="site-logo"
                      style={{
                        marginTop: '8px',
                        height: `${targetHeight}px`,
                        width: `${calcSiteLogoWidth(siteLogo, targetHeight)}px`,
                      }}
                    >
                      <img src={"/logocisostartupswhite.png"} alt={title} />
                    </div>
                  </a>
                </Link>
              ) : site.logo ? (
                <Link href="/">
                  <a>
                    {/* eslint-disable @next/next/no-img-element */}
                    <img className="site-logo" src={site.logo} alt={title} />
                  </a>
                </Link>
              ) : (
                title
              )}
            </h1>
            <br></br>
            <br></br>
            <h1 className="site-description">Build securely with us</h1>
            <br></br>
            <h1 className="site-description__text">We’re a boutique cyber security firm of experts.
Born and bred to help Startups protect their business and their customer's information.</h1>
            <button style={{ zIndex: 100, textDecoration: "none", marginTop: 50, backgroundColor: "#c4940c", borderRadius: 50, padding: "9px 20px 9px 20px" }}><a style={{ color: "white" }} href="https://twitter.com/messages/compose?recipient_id=1164983863736713216&text=Buenas,%20me%20gustaría%20saber%20más%20" rel="noreferrer" target="_blank">DM us on Twitter</a></button>
          </div>
        </div>
      </HeaderBackground>
    </header>
  )
}
