import { Mui } from './Mui'
import { render, screen } from '../../test-utils'

describe('Mui', () => {
  test('renders text correctly', () => {
    render(<Mui />)
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveTextContent('dark mode')
  })

  test('renders text in white color for dark mode', () => {
    render(<Mui />)
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveStyle({ color: "'rgb(255, 255, 255)'" })
  })
})