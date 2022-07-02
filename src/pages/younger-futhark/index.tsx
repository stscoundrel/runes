// Libs.
import youngerFuthark from 'younger-futhark'

// Components.
import Layout from 'components/Layout'
import RunicKeyboard from 'components/RunicKeyboard'

export default function YoungerFuthark() {
  return (
    <Layout>
      <RunicKeyboard dialect="Younger Futhark" runeSet={youngerFuthark.getRuneMapping()} />
    </Layout>
  )
}
