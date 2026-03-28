import { renderHook } from '@testing-library/react'
import { useRef } from 'react'
import useScrollReveal from './useScrollReveal'

// Helper to create a mock element with children
function createMockElement(childCount = 0) {
  const el = document.createElement('div')
  el.setAttribute('data-reveal', 'up')
  for (let i = 0; i < childCount; i++) {
    el.appendChild(document.createElement('div'))
  }
  return el
}

describe('useScrollReveal', () => {
  let observeMock, unobserveMock, disconnectMock, intersectionCallback

  beforeEach(() => {
    observeMock = vi.fn()
    unobserveMock = vi.fn()
    disconnectMock = vi.fn()

    global.IntersectionObserver = vi.fn((callback) => {
      intersectionCallback = callback
      return {
        observe: observeMock,
        unobserve: unobserveMock,
        disconnect: disconnectMock,
      }
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('observes the referenced element', () => {
    const el = createMockElement()
    renderHook(() => {
      const ref = useRef(el)
      useScrollReveal(ref)
    })

    expect(observeMock).toHaveBeenCalledWith(el)
  })

  it('uses default threshold and rootMargin', () => {
    const el = createMockElement()
    renderHook(() => {
      const ref = useRef(el)
      useScrollReveal(ref)
    })

    expect(IntersectionObserver).toHaveBeenCalledWith(expect.any(Function), {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    })
  })

  it('adds "revealed" class when element intersects', () => {
    const el = createMockElement()
    renderHook(() => {
      const ref = useRef(el)
      useScrollReveal(ref)
    })

    intersectionCallback([{ isIntersecting: true, target: el }])
    expect(el.classList.contains('revealed')).toBe(true)
  })

  it('does not add "revealed" class when element is not intersecting', () => {
    const el = createMockElement()
    renderHook(() => {
      const ref = useRef(el)
      useScrollReveal(ref)
    })

    intersectionCallback([{ isIntersecting: false, target: el }])
    expect(el.classList.contains('revealed')).toBe(false)
  })

  it('unobserves element after reveal', () => {
    const el = createMockElement()
    renderHook(() => {
      const ref = useRef(el)
      useScrollReveal(ref)
    })

    intersectionCallback([{ isIntersecting: true, target: el }])
    expect(unobserveMock).toHaveBeenCalledWith(el)
  })

  it('staggers children with 120ms delay when stagger is true', () => {
    const el = createMockElement(4)
    renderHook(() => {
      const ref = useRef(el)
      useScrollReveal(ref, { stagger: true })
    })

    intersectionCallback([{ isIntersecting: true, target: el }])

    expect(el.children[0].style.transitionDelay).toBe('0ms')
    expect(el.children[1].style.transitionDelay).toBe('120ms')
    expect(el.children[2].style.transitionDelay).toBe('240ms')
    expect(el.children[3].style.transitionDelay).toBe('360ms')
  })

  it('does not set transitionDelay when stagger is false', () => {
    const el = createMockElement(3)
    renderHook(() => {
      const ref = useRef(el)
      useScrollReveal(ref, { stagger: false })
    })

    intersectionCallback([{ isIntersecting: true, target: el }])

    expect(el.children[0].style.transitionDelay).toBe('')
    expect(el.children[1].style.transitionDelay).toBe('')
    expect(el.children[2].style.transitionDelay).toBe('')
  })

  it('gracefully degrades when IntersectionObserver is unavailable', () => {
    delete global.IntersectionObserver

    const el = createMockElement()
    renderHook(() => {
      const ref = useRef(el)
      useScrollReveal(ref)
    })

    expect(el.classList.contains('revealed')).toBe(true)
  })

  it('disconnects observer on unmount', () => {
    const el = createMockElement()
    const { unmount } = renderHook(() => {
      const ref = useRef(el)
      useScrollReveal(ref)
    })

    unmount()
    expect(disconnectMock).toHaveBeenCalled()
  })

  it('accepts custom threshold and rootMargin', () => {
    const el = createMockElement()
    renderHook(() => {
      const ref = useRef(el)
      useScrollReveal(ref, { threshold: 0.5, rootMargin: '10px' })
    })

    expect(IntersectionObserver).toHaveBeenCalledWith(expect.any(Function), {
      threshold: 0.5,
      rootMargin: '10px',
    })
  })

  it('does nothing when ref.current is null', () => {
    renderHook(() => {
      const ref = useRef(null)
      useScrollReveal(ref)
    })

    expect(observeMock).not.toHaveBeenCalled()
  })
})
