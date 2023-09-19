import { Carousel } from "antd";
import banner from "../../assets/banner.jpg";

const Banner = () => {
  const contentStyle = {
    height: "700px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <Carousel effect='fade' autoplay>
      <div>
        <h3 style={contentStyle}>
          <img src={banner} alt='Banner Image' />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src={banner} alt='Banner Image' />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src={banner} alt='Banner Image' />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src={banner} alt='Banner Image' />
        </h3>
      </div>
    </Carousel>
  );
};

export default Banner;
