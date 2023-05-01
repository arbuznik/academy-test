import { useEffect } from 'react'
import { useRef }    from 'react'

const useRandomColor = () => {
  const node = useRef<HTMLElement>(null)
  const { random, floor } = Math
  const colors: ['red', 'green', 'blue']  = ['red', 'green', 'blue']

  useEffect(() => {
    if (!node.current) {
      return
    }

    node.current.style.color = colors[floor(random() * 3)]
  }, [])

  return node
}

export { useRandomColor }
