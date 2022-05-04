/* eslint-disable @next/next/no-img-element */
import { CSSProperties } from 'react'

import { useOverlay } from '@components/contexts/overlayWallet'
import { GhostSettings } from '@lib/ghost'
import { getLang, get } from '@utils/use-lang'
import { siteIcon } from '@meta/siteDefaults'

import { ConnectWallet } from "./ConnectWallet"

export const WalletOverlay = ({ settings }: { settings: GhostSettings }) => {
  const text = get(getLang(settings.lang))
  const { isOpen, handleClose } = useOverlay()

  const title = text(`SITE_TITLE`, settings.title)
  const siteLogo = settings.logo || siteIcon
  const openingStyle: CSSProperties = { opacity: 1, pointerEvents: `auto` }
  const closingStyle: CSSProperties = { opacity: 0, pointerEvents: `none` }

  return (
    <div className="subscribe-overlay" style={isOpen ? openingStyle : closingStyle}>
      <a className="subscribe-close-overlay" onClick={handleClose}></a>
      <a className="subscribe-close-button" onClick={handleClose}></a>
      <div className="subscribe-overlay-content">
        {siteLogo && <img className="subscribe-overlay-logo" src={siteLogo} alt={title} />}
        <div className="subscribe-form">
          <ConnectWallet />
        </div>
      </div>
    </div>
  )
}
