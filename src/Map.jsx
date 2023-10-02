
import { useEffect, useRef } from 'react';

export default function Map (props) {
  const mapElement = useRef(null);

  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const location = new naver.maps.LatLng(37.5076895, 127.0603667);
    const mapOptions = {
      center: location,
      zoom: 16,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_LEFT,
      },
    };
    const map = new naver.maps.Map(mapElement.current, mapOptions);
    new naver.maps.Marker({
      position: location,
      map,
    });
  }, []);

  function copyAddress () {
    navigator.clipboard.writeText('서울특별시 강남구 테헤란로 518')
    alert('복사되었습니다.')
  }

  return (
    <div>
      <h1 className="title serif">오시는길</h1>
      <div ref={mapElement} style={{ minHeight: '520px' }} className="map" />
      <div className="address">
        <span className="label">주소</span>
        <p>서울특별시 강남구 테헤란로 518 섬유센터 17층 섬유센터 스카이뷰컨벤션</p>
        <button type="button" className="btn" onClick={copyAddress}>주소복사</button>
      </div>
      <div className="address">
        <span className="label">길찾기</span>
        <div>
          <a href="https://apis.openapi.sk.com/tmap/app/routes?appKey=PnMBvauu664NsYeEQghyQ6wx02u2xeFe2729zlL3&name=스카이뷰컨벤션&lon=37.5076895&lat=127.0603667" className="navi tmap">T맵</a>
          <a href="https://map.kakao.com/link/to/스카이뷰컨벤션,37.5076895,127.0603667" className="navi kakao">카카오맵</a>
          <a href="http://app.map.naver.com/launchApp/?version=11&menu=navigation&elat=37.5076895&elng=127.0603667&etitle=스카이뷰컨벤션" className="navi naver">네이버맵</a>
        </div>
      </div>
      <div className="address">
        <span className="label">주차</span>
        <p>1시간 30분 무료 (지하 2층 ~ 지하 4층)</p>
      </div>
      <div className="address">
        <span className="label">대중교통</span>
        <p><i>2</i>호선 삼성역 4번출구 도보 3분</p>
      </div>
    </div>
  );
}
