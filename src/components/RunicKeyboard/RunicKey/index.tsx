import styles from './RunicKey.module.scss'

interface RunicKeyCallback {
  (param: unknown): void
}

interface RunicKeyProps {
  rune: string
  letter: string
  callback: RunicKeyCallback
}

export default function RunicKey({ rune, letter, callback }: RunicKeyProps) {
  return (
    <button
      title={`Runic key ${rune}, meaning letter ${letter}`}
      className={styles.key}
      aria-label={`Runic key ${rune}, meaning letter ${letter}`}
      onClick={() => callback(letter)}
    >
      {rune}
    </button>
  )
}
