import { render, screen } from "@testing-library/react"
import { Application } from "./m"

describe('application', () => {
    test('render correctly', () => {
        render(<Application />)

        const h1 = screen.getByRole('heading', {
            level: 1
        })
        expect(h1).toBeInTheDocument()

        const h2 = screen.getByRole('heading', {
            level: 2
        })
        expect(h2).toBeInTheDocument()

        const paragraph=screen.getByText('All fields are mandatory')
        expect(paragraph).toBeInTheDocument()

        const title=screen.getByTitle('close')
        expect(title).toBeInTheDocument()

        const image=screen.getByAltText('a person with a laptop')
        expect(image).toBeInTheDocument()

        const testid=screen.getByTestId('custom-element')
        expect(testid).toBeInTheDocument()

        const input = screen.getByRole('textbox', {
            name: 'Name'
        })
        expect(input).toBeInTheDocument()

        const placeholder = screen.getByPlaceholderText('Fullname')
        expect(placeholder).toBeInTheDocument()

        const label = screen.getByLabelText('Name')
        expect(label).toBeInTheDocument()

        const displayValue=screen.getByDisplayValue('Sabari')
        expect(displayValue).toBeInTheDocument()

        const bio = screen.getByRole('textbox', {
            name: 'Bio'
        })
        expect(bio).toBeInTheDocument()

        const select = screen.getByRole('combobox')
        expect(select).toBeInTheDocument()

        const checkbox = screen.getByRole('checkbox')
        expect(checkbox).toBeInTheDocument()

        const Submit = screen.getByRole('button')
        expect(Submit).toBeInTheDocument()
    })
})