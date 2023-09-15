import { useNavigate, Link } from "react-router-dom";
import "./coffeeBeans.css";
import { useState } from "react";
const CoffeeBeans = () => {
  const [product, setProduct] = useState([
    {
      productNo: 1,
      img: "/img/beans/coffee.png",
      productName: "브라질 산티 알리나 Brazil Fazenda Santa Alina",
      productNote: "노트 :  Roasted Peanut, Biscuit,Balanced,Pistachio",
      Area: "지역 : Brazil Santa Alina",
      Roasting: "로스팅레벨 : Medium",
      type: "품종 : Yellow Bourbon",
      process: "가공방식 : Pulped Natural",
      productPrice: 15000,
    },
    {
      productNo: 2,
      img: "/img/beans/coffee.png",
      productName: "케냐 AA Top 키리아이니 kenya AA Top Kiriaini",
      productNote: "노트 :  Grapefruit, Pecan, Maplesyrup, Creamy",
      Area: "지역 : Kikuyu",
      Roasting: "로스팅레벨 : Light Medium",
      type: "품종 : SL34, SL28",
      process: "가공방식 : Washed",
      productPrice: 17000,
    },
    {
      productNo: 3,
      img: "/img/beans/coffee.png",
      productName: "에티오피아 부쿠아벨 내츄럴 Ethiopia Bukualbel Natural",
      productNote: "노트 :  Blueberry, Citrus, Sweet",
      Area: "지역 : Ethiopia Sidamo",
      Roasting: "로스팅레벨 :  Light Medium",
      type: "품종 : Heirloom",
      process: "가공방식 : Natural",
      productPrice: 17000,
    },
    {
      productNo: 4,
      img: "/img/beans/coffee.png",
      productName: "에티오피아 벤사 내츄럴 Ethiopia Bensa Natural",
      productNote: "노트 :  Bergamot, Sweet, Clean",
      Area: "지역 : Ethiopia Sidamo",
      Roasting: "로스팅레벨 :  Light Medium",
      type: "품종 : Heirloom",
      process: "가공방식 : Natural",
      productPrice: 15000,
    },
    {
      productNo: 5,
      img: "/img/beans/coffee.png",
      productName: "에티오피아 짐마 디카페인 Ethiopia Djimmah Decaffeine",
      productNote:
        "노트 :  Pumpkin Yeot, Green Tangerine, Maplesyrup, Long Aftertaste",
      Area: "지역 : Djimmah",
      Roasting: "로스팅레벨 : Medium",
      type: "품종 : Heirloom",
      process: "가공방식 : Mountain Water Process Washed",
      productPrice: 17000,
    },
    {
      productNo: 6,
      img: "/img/beans/coffee.png",
      productName: "콜롬비아 후일라 디카페인 Colombia Huila Decaffeine",
      productNote: "노트 : Cinnamon, Sweet, Cocoa, Good-Balance, Chocolate",
      Area: "지역 : Colombia Huila",
      Roasting: "로스팅레벨 : Medium",
      type: "품종 : Castillo, Caturra, Typica",
      process: "가공방식 : Fully Washed",
      productPrice: 17000,
    },
    {
      productNo: 7,
      img: "/img/beans/coffee.png",
      productName: "파블로 네루다 Pablo Neruda",
      productNote:
        "노트 : 파블로 네루다는 독특한 캐릭터를 갖춘 단맛이 좋은 커피입니다. 베리류와 헤즐넛, 브라운 슈가의 플래이버가 특징으로, 화려한 향미와 균형 잡힌 단맛 뒤에 주스와 와인의 여운을 남김니다.",
      Area: "지역 : Guatemala / Ethiopia",
      Roasting: "로스팅 레벨 : Medium Light",
      type: "",
      process: "",
      productPrice: 16000,
    },
    {
      productNo: 8,
      img: "/img/beans/coffee.png",
      productName: "버터 펫 트리오 Butter Fat Trio",
      productNote:
        "노트 : 버터 팻 트리오는 균형잡힌 진한 커피를 지향합니다. 단단하면서도 묵직한 풍미는 스파이시한 다크 초콜렛의 여운으로 완성됩니다.",
      Area: "지역 : Brazil /Ethiopia /Colombia /Guatemala /Indonesia",
      Roasting: "로스팅레벨 : Medium Dark",
      type: "",
      process: "",
      productPrice: 13000,
    },
    {
      productNo: 9,
      img: "/img/beans/coffee.png",
      productName: "페루 도밍고 아기레 Peru Domingo Aguirre",
      productNote:
        "노트 : Nougat, Milk Chocolate, Pecan Pie. 쫀득하고 달콤한 누가 한 조각이 입안에 머무릅니다. 실바람처럼 부드러운 밀크 초콜릿과 고소한 피칸 파이 향이 더해집니다.",
      Area: "지역 :	Cajamarca, Peru",
      Roasting: "로스팅레벨 : Medium",
      type: "품종 : Caturra",
      process: "가공방식 : Natural",
      productPrice: 16000,
    },
    {
      productNo: 10,
      img: "/img/beans/coffee.png",
      productName: "윌리엄 블레이크 William Blake",
      productNote:
        "노트 : 윌리엄 블레이크는 다크로스팅에서도 즐길 수 있는 다양한 플래이버와 진하고 묵직한 단맛을 표현합니다. 절인 대추야자와 블랙커런트의 독특한 향미에 카카오닙을 맛보는 듯한 여운을 남깁니다.",
      Area: "지역 : Kenya / Guatemala / Ethiopia",
      Roasting: "로스팅레벨 : Dark",
      type: "",
      process: "",
      productPrice: 16000,
    },
    {
      productNo: 11,
      img: "/img/beans/coffee.png",
      productName: "자바 프린자 내추럴 Java Frinsa Natural",
      productNote:
        "노트 : Rose, Raspberry, Grape. 장미처럼 고혹적이면서 향기롭습니다. 장미 향이 옅어질 때쯤 달콤하고 싱그러운 라즈베리 향이 이어집니다.",
      Area: "지역 : West Java, Indonesia",
      Roasting: "로스팅레벨 : Medium",
      type: "품종 : Borbor, Lini S, Ateng super, Timor, Sigarar Utang, P88",
      process: "가공방식 : Natural",
      productPrice: 16000,
    },
    {
      productNo: 12,
      img: "/img/beans/coffee.png",
      productName: "멕시코 카바노크 디카페인 Mexico CABONOCH Decaffeine",
      productNote:
        "노트 : Maplesyrup, Cacao. MWP 공정을 거친 디카페인 특유의 달콤한 향과 견과 노트, 숙면이 소중한 당신에게 소개하고 싶은 커피입니다.",
      Area: "지역 : Chiapas, Mexico",
      Roasting: "로스팅레벨 : Medium",
      type: "품종 : Typica, Bourbon, Caturra, Mundo Novo, Catimor, Sarchimor",
      process: "가공방식 :Washed | MWP",
      productPrice: 16000,
    },
  ]);
  return (
    <div className="main-wrap">
      <div className="title">CoFFee Beans</div>
      <div className="product-list">
        {product.map((bean, index) => {
          return (
            <Link to="/beanDetail" state={{ b: bean }}>
              <div key={"product" + index} className="product">
                <div className="product-img">
                  <img src={bean.img}></img>
                </div>
                <div className="product-info">
                  <div className="product-title">{bean.productName}</div>
                  <div className="product-price">{bean.productPrice}원</div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CoffeeBeans;
