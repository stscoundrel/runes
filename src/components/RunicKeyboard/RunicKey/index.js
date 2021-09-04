import styles from './RunicKey.module.scss'

export default function RunicKey({ rune, letter, callback }) {
  return (
    <button
      className={styles.key}
      aria-label={`Runic key ${rune}, meaning letter ${letter}`}
      onClick={() => callback(letter)}
    >
      {rune}
    </button>
  )
}
