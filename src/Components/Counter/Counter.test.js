import { fireEvent, render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
    test('renders correctly', () => {
        render(<Counter />)
        const countElement = screen.getByRole('heading')
        expect(countElement).toBeInTheDocument()

        const incrementButton = screen.getByRole('button', { name: 'Increment' })
        expect(incrementButton).toBeInTheDocument()

        const amountInput = screen.getByRole('spinbutton')
        expect(amountInput).toBeInTheDocument()

        const setButton = screen.getByRole('button', { name: 'Set' })
        expect(setButton).toBeInTheDocument()
    })

    test('renders a count of 0', () => {
        render(<Counter />)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('0')
    })

    test('renders a count of 1 after clicking the increment button', async () => {
        render(<Counter />)
        const incrementButton = screen.getByRole('button', { name: 'Increment' })
        fireEvent.click(incrementButton)

        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('1')
    })

    test('renders a count of 2 after clicking the increment button twice', async () => {
        render(<Counter />)
        const incrementButton = screen.getByRole('button', { name: 'Increment' })
        fireEvent.click(incrementButton)
        fireEvent.click(incrementButton)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('2')
    })

    test('rendres a count of 10 after clicking the set button', async () => {
        render(<Counter />)
        const amountInput = screen.getByRole('spinbutton')
        fireEvent.change(amountInput, { target: { value: '10' } })
        expect(amountInput).toHaveValue(10)

        const setButton = screen.getByRole('button', { name: 'Set' })
        fireEvent.click(setButton)

        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('10')
    })

    // test('elements are focused in the right order', async () => {
    //     render(<Counter />)
    //     const amountInput = screen.getByRole('spinbutton')
    //     const setButton = screen.getByRole('button', { name: 'Set' })
    //     const incrementButton = screen.getByRole('button', { name: 'Increment' })
    //     fireEvent.keyDown(amountInput, { key: 'Tab' });
    //     expect(incrementButton).toHaveFocus()

    //     fireEvent.keyDown(setButton, { key: 'Tab' });
    //     expect(amountInput).toHaveFocus()

    //     fireEvent.keyDown(incrementButton, { key: 'Tab' });
    //     expect(setButton).toHaveFocus()
    // })
})