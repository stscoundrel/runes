import { useState } from 'react'

// Rune adapters.
import youngerFuthark from 'younger-futhark'
import elderFuthark from 'elder-futhark'
import futhorc from 'futhorc'
import futhork from 'futhork'
import stavelessFuthark from 'staveless-futhark'

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
      <textarea id="transcribe" value={content} onChange={(e) => setContent(e.target.value)} />

      <p>Younger Futhark</p>
      <small>Long branch</small>
      <p className={styles.runic}>{youngerFuthark.lettersToLongBranchRunes(content)}</p>

      <small>Short twig</small>
      <p className={styles.runic}>{youngerFuthark.lettersToShortTwigRunes(content)}</p>

      <p>Elder Futhark</p>
      <p className={styles.runic}>{elderFuthark.lettersToRunes(content)}</p>

      <p>Futhorc</p>
      <p className={styles.runic}>{futhorc.lettersToRunes(content)}</p>

      <p>Futhork</p>
      <p className={styles.runic}>{futhork.lettersToRunes(content)}</p>

      <p>Staveless Futhark</p>
      <p className={styles.runic}>{stavelessFuthark.lettersToRunes(content)}</p>

    </section>
  )
}
