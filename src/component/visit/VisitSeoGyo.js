import VisitSideMenu from "./VisitSideMenu";
import "./visitSeoGyo.css";

const VisitSeoGyo = () => {
  return (
    <>
      <div className="seogyo-title">VENUS SEOGYO</div>
      <div className="seogyo-content">
        서울 망원동 오래된 저택이었던 이곳은 결을 만드는 소리로만 채워집니다.
        바람과 바람 사이에 어떤 시간이 지나가는지 긴 창을 통해 볼 수 있고,
        커피를 만들어내는 몇몇 소리들만 존재합니다. 기계적 소음을 덜어내고
        적당한 빛만 담아놓습니다. 우리는 10년이 지나도 이 공간이 시대의 흐름에
        자연스럽게 이곳의 색을 유지하길 바랍니다. 시간이 축적된 결과의 산물을
        위해 정원을 가꾸고, 한 잔의 커피에 움직임을 더하는 적요한 공간입니다.
      </div>
      <div className="shop-info">
        <p>서울시 마포구 월드컵로12길 11 T. 02-336-7650 </p>
        <p>월요일 - 일요일 9:00 - 23:00</p>
      </div>
      <div className="seogyo-img-wrap">
        <div className="seogyo-img1">
          <img id="img1" src="/img/visit/seogyo1.jpg"></img>
        </div>
        <div className="seogyo-img2">
          <img id="img2" src="/img/visit/seogyo2.jpg"></img>
        </div>
      </div>
      <div className="seogyo-img3">
        <img id="img3" src="/img/visit/seogyo3.jpg"></img>
      </div>
      <div className="seogyo-img-wrap">
        <div className="seogyo-img1">
          <img id="img4" src="/img/visit/seogyo4.jpg"></img>
        </div>
        <div className="seogyo-img2">
          <img id="img5" src="/img/visit/seogyo5.jpg"></img>
        </div>
        <div className="seogyo-img2">
          <img id="img6" src="/img/visit/seogyo6.jpg"></img>
        </div>
      </div>
    </>
  );
};
export default VisitSeoGyo;
