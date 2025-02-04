// import "./Background.css";
import video from "../../assets/video.mp4";
import image1 from "../../assets/hero_1.jpg";
import image2 from "../../assets/hero_2.jpg";
import image3 from "../../assets/hero_3.jpg";

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <div className="w-full h-screen -z-1">
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    );
  } else if (heroCount === 0) {
    return (
      <div className="w-[100%] h-[100%] fixed top-0 bottom-0 right-0 left-0 -z-1 ">
        <img src={image1} alt="hero1" className="w-full h-full   object-cover" />
      </div>
    );
  } else if (heroCount === 1) {
    return (
      <div className="w-[100%] h-[100%] fixed top-0 bottom-0 right-0 left-0 -z-1 ">
        <img src={image2} alt="hero2" className="w-full h-full    object-cover" />
      </div>
    );
  } else if (heroCount === 2) {
    return (
      <div className="w-[100%] h-[100%] fixed top-0 bottom-0 right-0 left-0 -z-1 ">
        <img src={image3} alt="hero3" className="w-full h-full  object-cover" />
      </div>
    );
  }
};

export default Background;
