import ReactDOM from 'react-dom'
import YoungerFuthark from 'pages/younger-futhark'
import renderer from 'react-test-renderer'

describe('Younger Futhark runic keyboard page', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    ReactDOM.render(<YoungerFuthark />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<YoungerFuthark />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
