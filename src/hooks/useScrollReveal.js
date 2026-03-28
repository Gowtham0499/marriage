import { useEffect } from 'react'

export default function useScrollReveal(ref, options = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    stagger = false,
  } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Graceful degradation: if IntersectionObserver is unavailable, reveal immediately
    if (typeof IntersectionObserver === 'undefined') {
      reveal(el, stagger)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target, stagger)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
    }
  }, [ref, threshold, rootMargin, stagger])
}

function reveal(el, stagger) {
  el.classList.add('revealed')

  if (stagger) {
    const children = el.children
    for (let i = 0; i < children.length; i++) {
      children[i].style.transitionDelay = `${i * 120}ms`
    }
  }
}
