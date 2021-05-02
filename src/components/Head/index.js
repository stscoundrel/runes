import NextHead from 'next/head'

export default function Head() {
  // Populate per site/page logic.
  const title = 'Runes'
  const description = 'Translate text to runic script'
  const canonicalUrl = 'https://runes.vercel.app'
  const siteName = 'Runes'

  return (
    <NextHead>
      <link rel='icon' href='/favicon.ico' />
        <title>{title}</title>
        <link rel='icon' type='image/png' sizes='48x48' href='/icon-72x72.png' />
        <link rel="apple-touch-icon" href="/icon-96x96.png"></link>
        <meta
          name='description'
          content={description}
        />
        <meta name='og:title' content={title} />
        <meta
          name='og:description'
          content={description}
        />
        <meta
          property='og:site_name'
          content={siteName}
        />
        <meta
            property='og:url'
            content={canonicalUrl}
          />
        <meta
          property='og:locale'
          content='en'
        />
        <meta
          property='og:type'
          content='website'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={title} />
        <meta
          name='twitter:description'
          content={description}
        />

        <link rel="canonical" href={canonicalUrl} />

        <meta name="theme-color" content="#3b4f68" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </NextHead>
  )
}
