import { useState, useEffect } from 'react'

const pad = (n) => String(n).padStart(2, '0')

function computeCountdown(targetDate) {
  const diff = Math.max(0, targetDate - new Date())
  const isComplete = diff === 0

  const days = Math.floor(diff / 864e5)
  const hours = Math.floor((diff % 864e5) / 36e5)
  const minutes = Math.floor((diff % 36e5) / 6e4)
  const seconds = Math.floor((diff % 6e4) / 1e3)

  return {
    days: pad(days),
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
    isComplete,
  }
}

export { computeCountdown }

export default function useCountdown(targetDate) {
  const [countdown, setCountdown] = useState(() => computeCountdown(targetDate))

  useEffect(() => {
    const tick = () => {
      const next = computeCountdown(targetDate)
      setCountdown(next)
      if (next.isComplete) {
        clearInterval(id)
      }
    }

    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [targetDate])

  return countdown
}
