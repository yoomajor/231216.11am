import { useEffect, useState } from "react"
import Entrance from './Entrance'
import Gallery from './Gallery'
import Calendar from './Calendar'
import Map from './Map'
import './App.scss'

function App() {
  const expired = '2023-12-16'

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
        <h1 className="title">Invitation</h1>
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
      <section className="section">
        <h1 className="title serif">Gallery</h1>
        <Gallery
          galleryID="my-test-gallery"
          images={[
            {
              largeURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg',
              thumbnailURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg',
              width: 1875,
              height: 2500,
            },
            {
              largeURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
              thumbnailURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg',
              width: 1669,
              height: 2500,
            },
            {
              largeURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
              thumbnailURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
              width: 2500,
              height: 1666,
            },
          ]}
        />
      </section>
      <section className="section dateInfo">
        <h1 className="title serif">Calendar</h1>
        <Calendar expired={expired} />
      </section>
      <section className="section mapInfo">
        <h1 className="title serif">Location</h1>
        <Map />
      </section>
    </div>
  );
}

export default App;
