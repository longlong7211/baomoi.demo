import { IoMdSearch } from "react-icons/io";
import './HomeHeader.css';
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import CategoryWithNoti from "./CategoryWithNoti";
import Hagtag from "./Hagtag";


export default function HomeHeader() {
  return <div className="header-root">
    <div className="container d-flex justify-content-between">
      <div>
        <img src="/assets/logo/logo.jpg" alt="" height={70} />
      </div>
      <div className="search-container d-flex align-items-center" >
        <div className="d-flex search-input">
          <input type="text" style={{ border: 'none' }} />
          <IoMdSearch size={30} />
        </div>
      </div>
      <div className="d-flex align-items-center">
        <BsFillMenuButtonWideFill size={30} />
      </div>
    </div>
    <div className="" style={{ background: "#30A1B4" }}>
      <div className="container d-flex align-items-center">
        <CategoryWithNoti title={"Nóng"} notiNumber={0} />
        <CategoryWithNoti title={"Mới"} notiNumber={3} />
        <CategoryWithNoti title={"Video"} notiNumber={0} />
        <CategoryWithNoti title={"Chủ đề"} notiNumber={0} />
        <Hagtag title='Năng lượng tích cực' />
        <Hagtag title='Khám phá Việt Nam' />
        <Hagtag title='Khám phá thế giới' />
      </div>
    </div>
  </div>
}