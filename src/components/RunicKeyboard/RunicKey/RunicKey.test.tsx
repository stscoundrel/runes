import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import RunicKey from './index'

describe('RunicKey component', () => {
  test('Does not crash', () => {
    const mockCallBack = jest.fn()
    const div = document.createElement('div')
    ReactDOM.render(<RunicKey rune="ᚠ" letter="f" callback={mockCallBack} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('Matches snapshot', () => {
    const mockCallBack = jest.fn()
    const tree = renderer.create(<RunicKey rune="ᚠ" letter="f" callback={mockCallBack} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Has correct text', () => {
    const mockCallBack = jest.fn()
    const tree = renderer.create(<RunicKey rune="ᚠ" letter="f" callback={mockCallBack} />)
    const { root } = tree

    expect(root.findByType('button').children).toEqual(['ᚠ'])
  })

  test('Triggers callback when clicked', async () => {
    const mockCallBack = jest.fn()
    let tree

    expect(mockCallBack).not.toHaveBeenCalled()

    await renderer.act(async () => {
      tree = renderer.create(<RunicKey rune="ᚠ" letter="f" callback={mockCallBack} />)
    })

    await renderer.act(async () => {
      await tree.root.findByType('button').props.onClick()
    })

    expect(mockCallBack).toHaveBeenCalled()
  })
})
