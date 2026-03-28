import { renderHook, act } from '@testing-library/react'
import useCountdown, { computeCountdown } from './useCountdown'

describe('computeCountdown', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('returns zero-padded values for a future date', () => {
    const now = new Date('2026-03-10T18:00:00+05:30')
    vi.setSystemTime(now)

    const target = new Date('2026-03-12T18:00:00+05:30')
    const result = computeCountdown(target)

    expect(result).toEqual({
      days: '02',
      hours: '00',
      minutes: '00',
      seconds: '00',
      isComplete: false,
    })
  })

  it('returns all zeros and isComplete true when past target', () => {
    const now = new Date('2026-03-13T00:00:00+05:30')
    vi.setSystemTime(now)

    const target = new Date('2026-03-12T18:00:00+05:30')
    const result = computeCountdown(target)

    expect(result).toEqual({
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
      isComplete: true,
    })
  })

  it('computes hours, minutes, and seconds correctly', () => {
    // 1 day, 5 hours, 30 minutes, 15 seconds before target
    const target = new Date('2026-03-12T18:00:00Z')
    const now = new Date(target.getTime() - (1 * 864e5 + 5 * 36e5 + 30 * 6e4 + 15 * 1e3))
    vi.setSystemTime(now)

    const result = computeCountdown(target)

    expect(result.days).toBe('01')
    expect(result.hours).toBe('05')
    expect(result.minutes).toBe('30')
    expect(result.seconds).toBe('15')
    expect(result.isComplete).toBe(false)
  })

  it('zero-pads single digit values', () => {
    const target = new Date('2026-03-12T18:00:00Z')
    // 3 hours, 7 minutes, 9 seconds before target
    const now = new Date(target.getTime() - (3 * 36e5 + 7 * 6e4 + 9 * 1e3))
    vi.setSystemTime(now)

    const result = computeCountdown(target)

    expect(result.days).toBe('00')
    expect(result.hours).toBe('03')
    expect(result.minutes).toBe('07')
    expect(result.seconds).toBe('09')
  })

  it('returns isComplete true when exactly at target', () => {
    const target = new Date('2026-03-12T18:00:00Z')
    vi.setSystemTime(target)

    const result = computeCountdown(target)

    expect(result.isComplete).toBe(true)
    expect(result.days).toBe('00')
    expect(result.hours).toBe('00')
    expect(result.minutes).toBe('00')
    expect(result.seconds).toBe('00')
  })
})

describe('useCountdown', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('returns initial countdown values', () => {
    const target = new Date('2026-03-12T18:00:00Z')
    vi.setSystemTime(new Date(target.getTime() - 5 * 864e5))

    const { result } = renderHook(() => useCountdown(target))

    expect(result.current.days).toBe('05')
    expect(result.current.hours).toBe('00')
    expect(result.current.minutes).toBe('00')
    expect(result.current.seconds).toBe('00')
    expect(result.current.isComplete).toBe(false)
  })

  it('updates every second', () => {
    const target = new Date('2026-03-12T18:00:00Z')
    vi.setSystemTime(new Date(target.getTime() - 3000)) // 3 seconds before

    const { result } = renderHook(() => useCountdown(target))

    expect(result.current.seconds).toBe('03')

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    expect(result.current.seconds).toBe('02')

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    expect(result.current.seconds).toBe('01')
  })

  it('stops updating when countdown is complete', () => {
    const target = new Date('2026-03-12T18:00:00Z')
    vi.setSystemTime(new Date(target.getTime() - 1000)) // 1 second before

    const { result } = renderHook(() => useCountdown(target))

    expect(result.current.isComplete).toBe(false)

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    expect(result.current.isComplete).toBe(true)
    expect(result.current.days).toBe('00')
    expect(result.current.hours).toBe('00')
    expect(result.current.minutes).toBe('00')
    expect(result.current.seconds).toBe('00')
  })

  it('clears interval on unmount', () => {
    const clearIntervalSpy = vi.spyOn(global, 'clearInterval')
    const target = new Date('2026-03-12T18:00:00Z')
    vi.setSystemTime(new Date(target.getTime() - 60000))

    const { unmount } = renderHook(() => useCountdown(target))

    unmount()

    expect(clearIntervalSpy).toHaveBeenCalled()
    clearIntervalSpy.mockRestore()
  })

  it('returns all zeros when target is already past', () => {
    const target = new Date('2020-01-01T00:00:00Z')
    vi.setSystemTime(new Date('2026-01-01T00:00:00Z'))

    const { result } = renderHook(() => useCountdown(target))

    expect(result.current).toEqual({
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
      isComplete: true,
    })
  })
})
