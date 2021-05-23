export default function RunicKey({ rune, letter, callback }) {
  return (
    <button
      onClick={() => callback(letter)}
    >
      {rune}
    </button>
  )
}
