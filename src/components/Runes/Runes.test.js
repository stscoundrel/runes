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

  test('Typing text to input produces transcriptions', async () => {
    let tree

    await renderer.act(async () => {
      tree = renderer.create(
        <Runes />,
      )
    })

    /**
     * Assert content is empty at start
     */
    expect(tree.root.findByType('textarea').children).toEqual([])

    /**
     * Trigger event to input field.
     */
    await renderer.act(async () => {
      const mockEvent = jest.fn()
      mockEvent.target = { value: 'Some text' }
      await tree.root.findByType('textarea').props.onChange(mockEvent)
    })

    /**
     * Assert content was changed
     */
    expect(JSON.stringify(tree)).toContain('Some text')

    /**
     * Assert transcriptions were provided
     */
    expect(JSON.stringify(tree)).toContain('ᛋᚢᛘᛁ:ᛏᛁᛋᛏ') // Younger futhark
    expect(JSON.stringify(tree)).toContain('ᛋᛟᛗᛖ:ᛏᛖᛋᛏ') // Elder futhark
    expect(JSON.stringify(tree)).toContain('ᛋᚩᛗᛖ:ᛏᛖᛉᛏ') // Futhorc
  })
})
