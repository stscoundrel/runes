import { useState } from 'react'

// Rune adapters.
import youngerFuthark from 'younger-futhark'
import elderFuthark from 'elder-futhark'

import styles from './Runes.module.scss'

export default function Runes() {
  const [content, setContent] = useState('')

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h1>Runes</h1>
        <p>Translate text to runic script</p>
      </header>

      <label htmlFor="transcribe">Text to transcribe</label>
      <textarea name="transcribe" value={content} onChange={(e) => setContent(e.target.value)} />

      <p>Younger Futhark</p>
      <p className={styles.runic}>{youngerFuthark.lettersToRunes(content)}</p>

      <p>Elder Futhark</p>
      <p className={styles.runic}>{elderFuthark.lettersToRunes(content)}</p>

    </section>
  )
}
