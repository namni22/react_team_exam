import "./about.css";

const About = () => {
  const about2Img = [
    "/img/about/1.jpg",
    "/img/about/2.jpg",
    "/img/about/3.jpg",
    "/img/about/4.jpg",
    "/img/about/5.jpg",
    "/img/about/6.jpg",
    "/img/about/7.jpg",
    "/img/about/8.jpg",
  ];
  return (
    <div className="about-wrap">
      <div className="about1">
        <div className="about-text">
          <p>
            2017년 9월 서교점을 시작으로 처음 문을 연 가배도는 서교, 한남,
            제주한림 지점을 운영하고 있습니다.
            <br></br>
            새로운 라이프스타일을 즐기던 날선 감각은 현재에 이르러 많은 사람들이
            향유하는 커피의 식문화, 카페의 살롱정서 안에 살아 숨쉬고 있습니다.
            나무 창살 너머로 빛과 바람이 들어서듯 바스락거리는 대나무숲, 그윽한
            커피내음과 공간을 넓게 관조하는 공간, VENUS는 근대로부터 전해온 우리
            고유의 살롱정서를 통해 커피문화, 나아가 아름다움과 여유가 있는
            생활을 이야기하고자 합니다.
          </p>
        </div>
        <div>
          <img src="/img/about/0-g.jpg"></img>
        </div>
      </div>
      <About2 about2Img={about2Img} />
    </div>
  );
};

const About2 = (props) => {
  const about2Img = props.about2Img;
  return (
    <div className="about2">
      <div className="about-text">
        <p>
          VENUS는 구조적으로 아름다움을 되찾은 소통의 공간이며 커피 공장으로
          재탄생되었습니다.
          <br></br>
          멈춰진 공간에 ‘시간’을 넣고, 그 변화와 축적을 공유하는 것. 낯설지만
          모두에게 닿을 수 있는 부분을 찾고자 합니다. 우리의 이러한 맥락은
          서교점을 시작으로 제주 한림, 서울 한남까지 꾸준히 이어지게 되었습니다.
          우리가 만드는 공간들은 새롭고 낯선 시간의 직접적 경험을 제공할 수 있고
          모두의 작업실이자 영감의 요소가 되길 바랍니다.
        </p>
      </div>

      <div className="about2-img-box">
        {about2Img.map((img, index) => {
          return <About2ImgList key={"img" + index} img={img} />;
        })}
      </div>
    </div>
  );
};

const About2ImgList = (props) => {
  const img = props.img;

  return (
    <div>
      <img className="img" src={img}></img>
    </div>
  );
};

export default About;
