import { useState } from 'react'
import RunicKey from 'components/RunicKeyboard/RunicKey'

export default function RunicKeyboard({ dialect, runeSet }) {
  const [text, setText] = useState('')

  const appendLetter = (letter) => {
    setText(`${text}${letter}`)
  }

  return (
    <section>
      <header>
        <h1>{dialect}</h1>
        <p>Translate runes to text</p>
      </header>

      <p>{text}</p>

      {Array.from(runeSet).map(([rune, letter]) => (
        <RunicKey key={rune} rune={rune} letter={letter} callback={appendLetter} />
      ))}

    </section>
  )
}
