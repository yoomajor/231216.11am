import { useEffect, useState } from "react"
import dayjs from "dayjs"

const Intro = (props) => {
	const today = dayjs()
  const expired = '2023-12-16'
  const diff = dayjs(expired).diff(today, 'day', true)
  const dday = Math.floor(diff)

  function createSnow () {
    const snow = document.createElement('i')
    snow.classList.add('snow')
    snow.style.left = Math.random() * window.innerWidth + 'px'
    snow.style.animationDirection = Math.random() * 3 + 3 + 's'
    snow.style.opacity = (Math.random() * 0.7) + 0.3
    snow.style.fontSize = Math.random() * 10 + 5 + 'px'
    document.querySelector('.snowFall').appendChild(snow)
    setTimeout(() => {
        snow.remove()
    }, 10000)
  }

  setInterval(createSnow, 100)

	return (
		<header className="serif">
			<h1>결혼합니다</h1>
			<div className="dday">D-{dday}</div>
			<div className="visual">
				<div className="snowFall"></div>
				<div className="layer layer1"></div>
				<div className="layer layer2"></div>
				<div className="layer layer3"></div>
				<div className="layer layer4"></div>
			</div>
			<h2>원동민 · 유주아</h2>
			<div className="info">
				2023.12.16 11:00<br />스카이뷰섬유센터 17F
			</div>
		</header>
	)
}

export default Intro