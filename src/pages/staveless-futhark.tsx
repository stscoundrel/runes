// Libs.
import stavelessFuthark from 'staveless-futhark'

// Components.
import Layout from 'components/Layout'
import RunicKeyboard from 'components/RunicKeyboard'

export default function StavelessFuthark() {
  return (
    <Layout>
      <RunicKeyboard dialect="Staveless Futhark" runeSet={stavelessFuthark.getRuneMapping()} />
    </Layout>
  )
}
