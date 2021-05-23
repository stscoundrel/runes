import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

// Rune adapters.
import youngerFuthark from 'younger-futhark'
import elderFuthark from 'elder-futhark'
import futhorc from 'futhorc'

// Components.
import RunicKeyboard from './index'

describe('RunicKey component', () => {
  const elderFutharkRuneSet = elderFuthark.getRuneMapping()
  const youngerFutharkRuneSet = youngerFuthark.getRuneMapping()
  const futhorcRuneSet = futhorc.getRuneMapping()

  test('Does not crash', () => {
    const div = document.createElement('div')
    ReactDOM.render(<RunicKeyboard dialect="Some runic dialect" runeSet={futhorcRuneSet}/>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('Matches snapshot: Elder Futhark', () => {
    const tree = renderer.create(<RunicKeyboard dialect="Elder Futhark" runeSet={elderFutharkRuneSet}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Matches snapshot: Younger Futhark', () => {
    const tree = renderer.create(<RunicKeyboard dialect="Younger Futhark" runeSet={youngerFutharkRuneSet}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Matches snapshot: Futhorc', () => {
    const tree = renderer.create(<RunicKeyboard dialect="Futhorc" runeSet={futhorcRuneSet}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
