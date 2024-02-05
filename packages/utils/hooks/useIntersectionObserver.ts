import { RefObject, useCallback, useLayoutEffect } from 'react'

const useIntersectionObserver = (
  ref: RefObject<HTMLElement>,
  // eslint-disable-next-line no-unused-vars
  callback?: (entry: IntersectionObserverEntry) => void,
  threshold?: number | number[],
) => {
  const handleIntersection: IntersectionObserverCallback = useCallback(
    entries => {
      const entry = entries[0]
      callback?.(entry)
    },
    [callback],
  )
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: threshold ?? 1,
  })

  useLayoutEffect(() => {
    if (ref.current == null) return
    observer.observe(ref.current)
    return () => {
      observer.disconnect()
    }
  }, [ref])

  return observer
}

export default useIntersectionObserver
