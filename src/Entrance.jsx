import { useLayoutEffect, useRef, useState } from "react"
import { useScroll } from "./useScroll"
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

	useLayoutEffect(() => {
		setHeight(ref.current.offsetHeight)
	}, [])

	return (
		<div ref={ref} className={'inner serif ' + bgClass}>
			<div className="bg">
				<div className="with"></div>
			</div>
			<div className="messageBox">
				<div className="message1">
					<div className="date">2023. 12. 16</div>
					<div className="date">오전 11시</div>
					<div className="messageUnit">원동민 · 유주아</div>
				</div>
				<div className="message2">
					<div className="messageUnit">
						<span className="messageBlock">결혼합니다</span>
					</div>
					<div className="dday"><span className="messageBlock">D {dday > 0 ? '+' : '-'}{dday}</span></div>
				</div>
			</div>
		</div>
	)
}

export default Entrance