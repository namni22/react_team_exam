import "./class.css";
const Class = () => {
  return (
    <div className="main-wrap">
      <div className="title">class</div>
      <div className="content">
        <div className="class-img">
          <img src="/img/class/course.jpg"></img>
        </div>
        <div className="class-wrap">
          <div className="info-title">
            연남점 홈 바리스타 코스 HOME BRISTA COURSE
          </div>
          <div className="info-content">
            <div>홈 바리스타 코스 베이직 Home Barista Course Basic</div>
            <div>
              직접 커피를 만드는 ‘홈 바리스타’를 위한 수업입니다. 집과 작업실
              어디에서든 커피가 필요한 분들에게 조금 더 완성도 있는 추출에
              도달할 수 있도록 도와드립니다. 커피에 대한 올바른 정보와 커피를
              대하는 방법에 대해 자유롭게 소통할 수 있습니다.
            </div>
          </div>
          <div className="info-course">
            <div className="week1">
              <div>1주차</div>
              <br></br>
              <div>'커피를 알다'</div>
              <br></br>
              <div>
                커피 원두는 각기 다른 특색을 지녔으며 아주 다양한 종류가
                있습니다. 원두가 어떤 가공 및 로스팅을 통해 완성되는지 알아보는
                가장 기본적인 시간이며, 커피와 제대로 마주해볼 수 있습니다.
              </div>
              <br></br>
              <div>'이해할수록 더 깊은 커피'</div>
              <br></br>
              <div>
                커피에 있는 수 십 가지의 향미와 맛을 찾아내는 커핑(Cupping)을
                통해 그 관능적 특징을 이해하는 것이 중요합니다. 관능적인
                커피(Sensory coffee)는 각 원두가 갖고 있는 향미의 특성을 정확히
                인지하여 설명할 수 있는 부분을 말합니다. 이 과정을 통해 다양한
                원두를 체험하고 좋은 커피를 이해하며 표현해낼 수 있습니다.
              </div>
            </div>
            <br></br>
            <div className="week2">
              <div>2주차</div>
              <br></br>
              <div>'추출에 대한 이해'</div>
              <br></br>
              <div>
                다양한 커피 추출도구의 목적을 이해하고 개념을 배우는 시간입니다.
                바리스타처럼 만들어보았으나, 생각했던 것과는 다른 맛이 느껴질
                수도 있습니다. 우리는 먼저, 다양한 커피 추출도구의 목적을
                이해하고 개념을 배웁니다. 숙련된 바리스타의 시연을 통해 직접
                보고 맛 볼 수 있습니다.
              </div>
              <br></br>
              <div>'내가 만드는 커피'</div>
              <br></br>
              <div>
                직접 해보는 것은 더 많은 경험을 만들어냅니다. 바리스타처럼
                만들어보았으나, 생각했던 것과는 다른 맛이 느껴질 수도 있습니다.
                우리는 그동안의 체험을 바탕으로 직접 추출도구를 선정하여
                레시피를 만들고, 커피를 내려봅니다. 바리스타와 의견을 교류하면서
                교정 작업을 거치며 좀 더 섬세한 방법으로 자신이 생각했던 커피를
                구현해냅니다.
              </div>
            </div>
          </div>
          <div className="info-price">
            <div>비용 80,000</div>
            <div>수업은 연남점에서만 진행합니다.</div>
            <div>수업시간은 1시간 30분이며, 2주간 진행됩니다.</div>
            <div>
              2주차의 경우 1주차 진행 후 1주 뒤 같은 요일 같은 시간에
              진행됩니다.
            </div>
          </div>
          <div className="info-book">
            <div>예약문의</div>
            <div>TEL 070-1212-0909</div>
            <div>MAIL VENUS.COFFEE@VENUS.COM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Class;
