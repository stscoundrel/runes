// Libs.
import futhorc from 'futhorc'

// Components.
import Layout from 'components/Layout'
import RunicKeyboard from 'components/RunicKeyboard'

export default function Futhork() {
  return (
    <Layout>
      <RunicKeyboard dialect="Futhorc" runeSet={futhorc.getRuneMapping()} />
    </Layout>
  )
}
