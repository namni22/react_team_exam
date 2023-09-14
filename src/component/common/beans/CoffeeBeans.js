import "./coffeeBeans.css";
import { useState } from "react";
const CoffeeBeans = () => {
  const [product, setProduct] = useState([
    {
      productNo: 1,
      img: "/img/beans/coffee.png",
      productName: "브라질 산티 알리나 Brazil Fazenda Santa Alina",
      productPrice: 15000,
    },
    {
      productNo: 2,
      img: "/img/beans/coffee.png",
      productName: "케냐 AA Top 키리아이니 kenya AA Top Kiriaini",
      productPrice: 17000,
    },
    {
      productNo: 3,
      img: "/img/beans/coffee.png",
      productName: "에티오피아 부쿠아벨 내츄럴 Ethiopia Bukualbel Natural",
      productPrice: 17000,
    },
    {
      productNo: 4,
      img: "/img/beans/coffee.png",
      productName: "에티오피아 벤사 내츄럴 Ethiopia Bensa Natural",
      productPrice: 15000,
    },
    {
      productNo: 5,
      img: "/img/beans/coffee.png",
      productName: "에티오피아 짐마 디카페인 Ethiopia Djimmah Decaffeine",
      productPrice: 17000,
    },
    {
      productNo: 6,
      img: "/img/beans/coffee.png",
      productName: "콜롬비아 후일라 디카페인 Colombia Huila Decaffeine",
      productPrice: 17000,
    },
    {
      productNo: 7,
      img: "/img/beans/coffee.png",
      productName: "파블로 네루다 Pablo Neruda",
      productPrice: 16000,
    },
    {
      productNo: 8,
      img: "/img/beans/coffee.png",
      productName: "버터 펫 트리오 Butter Fat Trio",
      productPrice: 13000,
    },
    {
      productNo: 9,
      img: "/img/beans/coffee.png",
      productName: "페루 도밍고 아기레 Peru Domingo Aguirre",
      productPrice: 16000,
    },
  ]);
  return (
    <div className="content-wrap">
      <div className="main-wrap">
        <div className="product-list">
          <div className="product">
            <div className="product-img">
              <img></img>
            </div>
            <div className="product-info">
              <div className="product-title">어쩌구</div>
              <div className="product-price">저쩌구</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeBeans;
