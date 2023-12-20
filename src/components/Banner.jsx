import PS5 from "../images/ps5banner.jpg";
import "../styles/components/banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-desc">
        <h1 className="text-thin">
          <strong>Quick&apos;n&apos;Easy</strong>
          &nbsp;PS5&nbsp;
          <strong>Marketplace</strong>
        </h1>
        <p>
          The best place to buy your own PS5 games, safely, easily and quickly
        </p>
        <br />
      </div>
      <div className="banner-img">
        <img src={PS5} alt="" />
        <div className="overlay"></div>
      </div>
    </div>
  );
};

export default Banner;
