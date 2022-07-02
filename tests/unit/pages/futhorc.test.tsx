import ReactDOM from 'react-dom'
import Futhorc from 'pages/futhorc'
import renderer from 'react-test-renderer'

describe('Futhorc runic keyboard page', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Futhorc />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<Futhorc />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
