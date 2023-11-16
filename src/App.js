import { useEffect, useState } from 'react'
import {useRef} from 'react'
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
      width: 883,
      height: 1200,
    },
    {
      largeURL: require('./images/pic_2.png'),
      thumbnailURL: require('./images/thumb_2.png'),
      width: 800,
      height: 1200,
    },
    {
      largeURL: require('./images/pic_3.png'),
      thumbnailURL: require('./images/thumb_3.png'),
      width: 1200,
      height: 800,
    },
    {
      largeURL: require('./images/pic_4.png'),
      thumbnailURL: require('./images/thumb_4.png'),
      width: 876,
      height: 1200,
    },
    {
      largeURL: require('./images/pic_5.png'),
      thumbnailURL: require('./images/thumb_5.png'),
      width: 800,
      height: 1200,
    },
    {
      largeURL: require('./images/pic_6.png'),
      thumbnailURL: require('./images/thumb_6.png'),
      width: 800,
      height: 1200,
    },
    {
      largeURL: require('./images/pic_7.png'),
      thumbnailURL: require('./images/thumb_7.png'),
      width: 1200,
      height: 832,
    },
    {
      largeURL: require('./images/pic_8.png'),
      thumbnailURL: require('./images/thumb_8.png'),
      width: 800,
      height: 1200,
    },
    {
      largeURL: require('./images/pic_9.png'),
      thumbnailURL: require('./images/thumb_9.png'),
      width: 800,
      height: 1200,
    }
  ]
  const mapRef = useRef(null)
  const goMap = () => {
    mapRef.current?.scrollIntoView({behavior: 'smooth'})
  }

  const copyAccount = (account) => {
    navigator.clipboard.writeText(account)
    alert('복사되었습니다.')
  }

  return (
    <div className="App">
      <section className="section entrance">
        <Entrance />
      </section>
      <section className="section parent serif">
        <div className="row"><span className="name">원남식·이성자</span>의 장남 <span className="name">동민</span></div>
        <div><span className="name">유재철·김양식</span>의 장녀 <span className="name">주아</span></div>
      </section>
      <section className="section greeting serif">
        <h1 className="title">초대합니다</h1>
        <div className="poem">
          <p>함께 맞는 네 번째 겨울,<br />
          두 손 꼭 잡고 저희 두 사람<br />
          평생을 함께 하는<br />
          긴 여정을 시작합니다.<br /><br />
          따뜻한 격려로<br />
          함께 축복해 주시면<br />
          감사하겠습니다.<br />
          </p>
        </div>
      </section>
      <div className="contentWrap">
        <div className="weddingInfo" onClick={goMap}>2023년 12월 16일 오전 11시<br/>📌삼성역 섬유센터 17층 스카이뷰컨벤션</div>
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
        <section ref={mapRef} className="section mapInfo">
          <Map />
        </section>
        <section className="section account">
          <div className="box">
            <p className="label">신랑측 계좌번호</p>
            <p>(예금주: 이성자) 농협 3560571860473</p>
            <button type="button" className="btnCopy" onClick={() => copyAccount('농협 3560571860473')}>복사하기</button>
          </div>
          <div className="box">
            <p className="label">신부측 계좌번호</p>
            <p>(예금주: 유재철) 농협 15812148495</p>
            <button type="button" className="btnCopy" onClick={() => copyAccount('농협 15812148495')}>복사하기</button>
          </div>
          <p className="info">날씨가 춥우니 따뜻하게 입고 참석해주시기 바랍니다.</p>
          <p className="info">장소가 협소하여 화환은 정중히 사양합니다.<br/>마음만 감사히 받겠습니다.</p>
        </section>
      </div>
    </div>
  );
}

export default App;
