import { useLocation } from "react-router-dom";
import "./beanDetail.css";
const BeanDetail = () => {
  const location = useLocation();
  const bean = location.state.b;
  return <div className="main-wrap"></div>;
};

export default BeanDetail;
