// Libs.
import futhork from 'futhork'

// Components.
import Layout from 'components/Layout'
import RunicKeyboard from 'components/RunicKeyboard'

export default function Futhork() {
  return (
    <Layout>
      <RunicKeyboard dialect="Futhork" runeSet={futhork.getRuneMapping()} />
    </Layout>
  )
}
