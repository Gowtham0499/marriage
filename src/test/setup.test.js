import { describe, it, expect } from 'vitest'

describe('Vitest setup', () => {
  it('has jsdom environment', () => {
    expect(document).toBeDefined()
    expect(window).toBeDefined()
  })

  it('has jest-dom matchers available', () => {
    const div = document.createElement('div')
    div.textContent = 'hello'
    document.body.appendChild(div)
    expect(div).toBeInTheDocument()
    document.body.removeChild(div)
  })
})
