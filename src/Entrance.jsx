import { useLayoutEffect, useRef, useState } from "react"
import { useScroll } from "./useScroll"
import { useScrollRef } from "./useScrollRef"
import dayjs from "dayjs"

const Entrance = (props) => {
	const winHeight = window.innerHeight
	const ref = useRef(null)
	const [height, setHeight] = useState(0)
	const { scrollY } = useScroll()

	const today = dayjs()
  const expired = '2023-12-16'
  const diff = dayjs(expired).diff(today, 'day', true)
  const dday = Math.floor(diff)

	const objPos = {
		// position: height - scrollY <= winHeight ? 'absolute' : 'fixed',
		// top: height - scrollY <= winHeight ? 'auto' : 0,
		// bottom: height - scrollY <= winHeight ? 0 : 'auto'
	}

	const animatedItem = {
		date: useScrollRef('up', 1, 0),
		message: useScrollRef('up', 1, 0.2),
		line: useScrollRef('up', 1, 0.2),
		dday: useScrollRef('up', 1, 0.2)
	}


	useLayoutEffect(() => {
		setHeight(ref.current.offsetHeight)
	}, [])

	return (
		<div ref={ref} className="inner serif">
			<div className="test1">
				{winHeight}, {height}, {scrollY}
			</div>
			<div className="bg" style={objPos}></div>
			<div className="messageBox">
				<div className="message1">
					<div className="messageUnit">원동민</div>
					<div>유주아</div>
				</div>
				<div className="message2">
					<div {...animatedItem.date}>2023년 12월 16일</div>
				</div>
				<div className="message3">
					<div className="messageUnit" {...animatedItem.message}>결혼합니다</div>
					<div className="line" {...animatedItem.line}></div>
					<div {...animatedItem.dday}>D-{dday}</div>
				</div>
			</div>
		</div>
	)
}

export default Entrance