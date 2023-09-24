import { useEffect, useState } from "react"
import Entrance from './Entrance'
import Gallery from './Gallery'
import Calendar from './Calendar'
import Map from './Map'
import './App.scss'

function App() {
  const expired = '2023-12-16'
  const images = [
    {
      largeURL: require('./images/pic_1.png'),
      thumbnailURL: require('./images/thumb_1.png'),
      width: 1920,
      height: 1280,
    },
    {
      largeURL: require('./images/pic_2.png'),
      thumbnailURL: require('./images/thumb_2.png'),
      width: 1280,
      height: 1920,
    },
    {
      largeURL: require('./images/pic_3.png'),
      thumbnailURL: require('./images/thumb_3.png'),
      width: 1280,
      height: 1920,
    },
    {
      largeURL: require('./images/pic_4.png'),
      thumbnailURL: require('./images/thumb_4.png'),
      width: 1280,
      height: 1920,
    },
    {
      largeURL: require('./images/pic_5.png'),
      thumbnailURL: require('./images/thumb_5.png'),
      width: 1280,
      height: 1920,
    },
    {
      largeURL: require('./images/pic_6.png'),
      thumbnailURL: require('./images/thumb_6.png'),
      width: 1280,
      height: 1920,
    },
    {
      largeURL: require('./images/pic_7.png'),
      thumbnailURL: require('./images/thumb_7.png'),
      width: 1280,
      height: 887,
    },
    {
      largeURL: require('./images/pic_8.png'),
      thumbnailURL: require('./images/thumb_8.png'),
      width: 853,
      height: 1280,
    },
    {
      largeURL: require('./images/pic_9.png'),
      thumbnailURL: require('./images/thumb_9.png'),
      width: 1401,
      height: 1920,
    }
  ]

  return (
    <div className="App">
      <section className="section entrance">
        <Entrance />
      </section>
      {/*
      <section className="section intro full">
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
      </section>
      */}
      <section className="section greeting serif">
        <h1 className="title">초대합니다</h1>
        <div className="poem">
          <p>함께 맞는 네 번째 겨울,<br />
          두 손 꼭 잡고 저희 두 사람<br />
          평생을 함께 하는<br />
          긴 여정을 시작합니다.<br /><br />
          따뜻한 격려로<br />
          함께 축복해 주시면 감사하겠습니다.<br />
          </p>
        </div>
      </section>
      <section className="section gallery">
        <h1 className="title serif">사진첩</h1>
        <Gallery
          galleryID="wedding-gallery"
          images={images}
        />
      </section>
      <section className="section dateInfo">
        <h1 className="title serif">달력</h1>
        <Calendar expired={expired} />
      </section>
      <section className="section mapInfo">
        <h1 className="title serif">오시는길</h1>
        <Map />
      </section>
    </div>
  );
}

export default App;
