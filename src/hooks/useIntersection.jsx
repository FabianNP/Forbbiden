import {useRef, useEffect, useState } from 'react'

const useIntersection = (props) => {
  const nodeRef = useRef()
  const { root, rootMargin = "0px", cb, threshold = 0 } = props
  const [isIntersecting, setIsIntersecting] = useState()


  useEffect(() => {
    const { current } = nodeRef
    if (!current) return undefined // wait for

    const handleIntersection = ([entry]) => { 
      setIsIntersecting(entry.isIntersecting)
      if (cb) cb(entry.isIntersecting)
    }

    const options = {
      root, 
      rootMargin,
      threshold
    }

    const  observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(current)

    return () => current && observer.unobserve(current)

  }, [nodeRef, root, rootMargin, threshold, cb])
  

  return [isIntersecting, nodeRef]

}


export default useIntersection