import ReactDOM from 'react-dom'
import StavelessFuthark from 'pages/staveless-futhark'
import renderer from 'react-test-renderer'

describe('Staveless Futhark runic keyboard page', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    ReactDOM.render(<StavelessFuthark />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<StavelessFuthark />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
