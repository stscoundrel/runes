import ReactDOM from 'react-dom'
import YoungerFuthark from 'pages/younger-futhark/index'
import ShortTwig from 'pages/younger-futhark/short-twig'
import LongBranch from 'pages/younger-futhark/long-branch'
import renderer from 'react-test-renderer'

describe('Younger Futhark: default runic keyboard page', () => {
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

describe('Younger Futhark: long branch runic keyboard page', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    ReactDOM.render(<LongBranch />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<LongBranch />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Younger Futhark: short twig runic keyboard page', () => {
  test('Does not crash', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ShortTwig />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('Matches snapshot', () => {
    const tree = renderer.create(<ShortTwig />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
