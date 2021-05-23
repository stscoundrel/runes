// Libs.
import elderFuthark from 'elder-futhark'

// Components.
import Layout from 'components/Layout'
import RunicKeyboard from 'components/RunicKeyboard'

export default function ElderFuthark() {
  return (
    <Layout>
      <RunicKeyboard dialect="Elder Futhark" runeSet={elderFuthark.getRuneMapping()} />
    </Layout>
  )
}
