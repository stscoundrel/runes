import ReactDOM from 'react-dom'
import Futhork from 'pages/futhork'
import renderer from 'react-test-renderer'

describe('Futhork runic keyboard page', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Futhork />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<Futhork />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
