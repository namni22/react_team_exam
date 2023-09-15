import { useLocation } from "react-router-dom";
import "./beanDetail.css";
const BeanDetail = () => {
  const location = useLocation();
  const bean = location.state.b;
  return (
    <div className="main-wrap">
      <div className="detail-content">
        <div className="bean-img">
          <img src={bean.img}></img>
        </div>
        <div className="bean">
          <div className="bean-title">
            <div className="bean-name">{bean.productName}</div>
            <div className="bean-price">{bean.productPrice}원</div>
          </div>
          <div className="bean-content">
            <div className="bean-area">{bean.Area}</div>
            <div className="bean-roast">{bean.Roasting}</div>
            <div className="bean-note">{bean.productNote}</div>
            <div className="bean-type">{bean.type}</div>
            <div className="bean-process">{bean.process}</div>
          </div>
        </div>
      </div>
      <div id="detail-info">
        <div>주문은 전화로만 받습니다</div>
        <div className="deliver">
          <p>배송안내</p>
          <div>
            배송 방법 : 택배<br></br>배송 지역 : 전국<br></br>배송 비용 : 조건부
            무료. 주문 금액 30,000 미만일 때 배송비 2,500을 추가합니다.
            <br></br>
            배송 기간 : 3일 ~ 7일
            <br></br>
            배송 안내 : 산간벽지나 도서지방은 별도의 추가금액을 지불하셔야 하는
            경우가 있습니다.
          </div>
        </div>
        <div className="exchange">
          <p>교환/반품안내</p>
          <div>
            교환 및 반품이 가능한 경우
            <br></br>- 상품을 공급 받으신 날로부터 7일이내. 단, 포장을
            개봉하였거나 포장이 훼손되어 상품가치가 상실된 경우에는 교환/반품이
            불가능합니다.
            <br></br>- 공급받으신 상품 및 용역의 내용이 표시. 광고 내용과
            다르거나 다르게 이행된 경우에는 공급받은 날로부터 3일 이내, 그사실을
            알게 된 날로부터 30일이내
          </div>
          <div>
            교환 및 반품이 불가능한 경우
            <br></br>- 고객님의 책임 있는 사유로 상품등이 멸실 또는 훼손된 경우.
            단, 상품의 내용을 확인하기 위하여 포장 등을 훼손한 경우는 제외
            <br></br>- 포장을 개봉하였거나 포장이 훼손되어 상품가치가 상실된
            경우
            <br></br>- 고객님의 사용 또는 일부 소비에 의하여 상품의 가치가
            현저히 감소한 경우
            <br></br>- 시간의 경과에 의하여 재판매가 곤란할 정도로 상품등의
            가치가 현저히 감소한 경우
          </div>
        </div>
        <div className="refund">
          <p>환불안내</p>
          <div>
            환불시 반품 확인여부를 확인한 후 3 영업일 이내에 결제 금액을 환불해
            드립니다.
            <br></br>
            신용카드로 결제하신 경우는 신용카드 승인을 취소하여 결제 대금이
            청구되지 않게 합니다. (단, 신용카드 결제일자에 맞추어 대금이 청구
            될수 있으면 이경우 익월 신용카드 대금청구시 카드사에서 환급처리
            됩니다.)
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeanDetail;
