import "./coffeeBeans.css";
import { useState } from "react";
const CoffeeBeans = () => {
  const [product, setProduct] = useState([
    {
      productNo: 1,
      img: "/img/beans/coffee.png",
      productName: "브라질 산티 알리나 Brazil Fazenda Santa Alina",
      productNote: "노트 :  Roasted Peanut, Biscuit,Balanced,Pistachio",
      productPrice: 15000,
    },
    {
      productNo: 2,
      img: "/img/beans/coffee.png",
      productName: "케냐 AA Top 키리아이니 kenya AA Top Kiriaini",
      productNote: "노트 :  Grapefruit, Pecan, Maplesyrup, Creamy",
      productPrice: 17000,
    },
    {
      productNo: 3,
      img: "/img/beans/coffee.png",
      productName: "에티오피아 부쿠아벨 내츄럴 Ethiopia Bukualbel Natural",
      productNote: "노트 :  Blueberry, Citrus, Sweet",
      productPrice: 17000,
    },
    {
      productNo: 4,
      img: "/img/beans/coffee.png",
      productName: "에티오피아 벤사 내츄럴 Ethiopia Bensa Natural",
      productNote: "노트 :  Bergamot, Sweet, Clean",
      productPrice: 15000,
    },
    {
      productNo: 5,
      img: "/img/beans/coffee.png",
      productName: "에티오피아 짐마 디카페인 Ethiopia Djimmah Decaffeine",
      productNote:
        "노트 :  Pumpkin Yeot, Green Tangerine, Maplesyrup, Long Aftertaste",
      productPrice: 17000,
    },
    {
      productNo: 6,
      img: "/img/beans/coffee.png",
      productName: "콜롬비아 후일라 디카페인 Colombia Huila Decaffeine",
      productNote: "노트 : Cinnamon, Sweet, Cocoa, Good-Balance, Chocolate",
      productPrice: 17000,
    },
    {
      productNo: 7,
      img: "/img/beans/coffee.png",
      productName: "파블로 네루다 Pablo Neruda",
      productNote:
        "노트 : 파블로 네루다는 독특한 캐릭터를 갖춘 단맛이 좋은 커피입니다. 베리류와 헤즐넛, 브라운 슈가의 플래이버가 특징으로, 화려한 향미와 균형 잡힌 단맛 뒤에 주스와 와인의 여운을 남김니다.",
      productPrice: 16000,
    },
    {
      productNo: 8,
      img: "/img/beans/coffee.png",
      productName: "버터 펫 트리오 Butter Fat Trio",
      productNote:
        "노트 : 버터 팻 트리오는 균형잡힌 진한 커피를 지향합니다. 단단하면서도 묵직한 풍미는 스파이시한 다크 초콜렛의 여운으로 완성됩니다.",
      productPrice: 13000,
    },
    {
      productNo: 9,
      img: "/img/beans/coffee.png",
      productName: "페루 도밍고 아기레 Peru Domingo Aguirre",
      productNote:
        "노트 : 쫀득하고 달콤한 누가 한 조각이 입안에 머무릅니다. 실바람처럼 부드러운 밀크 초콜릿과 고소한 피칸 파이 향이 더해집니다.",
      productPrice: 16000,
    },
  ]);
  return (
    <div className="main-wrap">
      <div className="title">CoFFee</div>
      <div className="product-list">
        {product.map((bean, index) => {
          return (
            <div key={"product" + index} className="product">
              <div className="product-img">
                <img src={bean.img}></img>
              </div>
              <div className="product-info">
                <div className="product-title">{bean.productName}</div>
                <div className="product-price">{bean.productPrice}원</div>
              </div>
            </div>
          );
        })}
        ;
      </div>
    </div>
  );
};

export default CoffeeBeans;
