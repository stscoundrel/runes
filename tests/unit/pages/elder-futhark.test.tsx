import ReactDOM from 'react-dom'
import ElderFuthark from 'pages/elder-futhark'
import renderer from 'react-test-renderer'

describe('Elder Futhark runic keyboard page', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ElderFuthark />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<ElderFuthark />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
