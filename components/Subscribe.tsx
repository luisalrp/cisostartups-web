import { GhostSettings } from '@lib/ghost'
import { getLang, get } from '@utils/use-lang'
import SubscribeForm from '@components/suscribe/SubscribeForm'

export const Subscribe = ({ settings }: { settings: GhostSettings }) => {
  const text = get(getLang(settings.lang))
  const title = text(`SITE_TITLE`, settings.title)

  return (
    <section className="subscribe-form">
      <h3 className="subscribe-form-title">
        {text(`SUBSCRIBE_TO`)} {title}
      </h3>
      <p className="subscribe-form-description">{text(`SUBSCRIBE_SECTION`)}</p>
      <SubscribeForm />
    </section>
  )
}