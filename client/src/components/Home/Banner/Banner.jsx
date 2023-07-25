import "./Banner.scss";

import Bannerimg from "../../../assets/banner-img.png";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>Sales</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium illum, possimus repellendus repellat exercitationem
            itaque aperiam nemo.
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Know</div>
          </div>
        </div>
        <img src={Bannerimg} alt=""  className="banner-img"/>
      </div>
    </div>
  );
};

export default Banner;
