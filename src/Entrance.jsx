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
	const bgClass = height - scrollY <= winHeight * 1.5 ? 'scene2' : 'scene1'

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
			<div className={'bg ' + bgClass}></div>
			<div className="messageBox">
				<div className="message1">
					<div className="date">2023년 12월 16일</div>
					<div className="messageUnit">원동민 · 유주아</div>
				</div>
				<div className="message2">
					<div className="messageUnit" {...animatedItem.message}>
						<div className="pyro">
							<div className="before"></div>
							<div className="after"></div>
						</div>
						결혼합니다
					</div>
					<div className="line" {...animatedItem.line}></div>
					<div {...animatedItem.dday}>D-{dday}</div>
				</div>
			</div>
		</div>
	)
}

export default Entrance