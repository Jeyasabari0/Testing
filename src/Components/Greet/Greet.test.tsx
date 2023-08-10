import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

describe('using describe', () => {
    
    test('Is HELLO present', () => {
        render(<Greet />)
        const Text = screen.getByText(/HELlo/i)
        expect(Text).toBeInTheDocument()
    })
    test('with name', () => {
        render(<Greet name='SABARI' />)
        const Text = screen.getByText('HELLO SABARI')
    })

})
