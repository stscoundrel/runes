import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Runes from './index'

describe('Runes component', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Runes />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<Runes />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
