import { useRef, useCallback, useEffect } from 'react'

// 스크롤하면 페이드인 하는 애니메이션
export const useScrollRef = (direction, duration, delay) => {
  // 해당 컴포넌트 가져오기
  const element = useRef()
  // direction 선택
  const handleDirection = (name) => {
    switch (name) {
      case 'up': return 'translate3d(0, 0, 0)'
      case 'down': return 'tranlate3d(0, 0, 0)'
      case 'left': return 'translate3d(0, 0, 0)'
      case 'right': return 'translate3d(0, 0, 0)'
      default:
      return
    }
  }

  // 설정해둔 컴포넌트를 만날때마다 함수가 재실행되도록 callback하기
  const onScroll = useCallback(([entry])=>{
    const { current } = element
    if(entry.isIntersecting) {
      current.style.tansitionProperty = 'all'
      current.style.transitionDuration = `${duration}s`
      current.style.transitionDelay = `${delay}s`
      current.style.transitionTimingFunction = 'ease-in'
      current.style.opacity = 1;
      current.style.tranform = 'translate3d(0, -100%, 0)'
    } else {
      current.style.tansitionProperty = 'all'
      current.style.transitionDuration = 0
      current.style.transitionTimingFunction = 'ease-out'
      current.style.opacity = 0;
      current.style.tranform = 'translate3d(0, 0, 0)'
    }
  }, [delay, duration])

  // intersection-observer로 컴포넌트 위치 observe하기
  useEffect(()=>{
    let observer
      if(element.current) {
        observer = new IntersectionObserver(onScroll, {threshold: 0.7})
        observer.observe(element.current)
      }
      return() => observer && observer.disconnect()
  }, [onScroll])

  return{ref: element, style: { opacity: 0, transform: handleDirection(direction) } }
}