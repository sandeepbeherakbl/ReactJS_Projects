import "../App.css";
import HeadImg from "../assets/Head.jpg";

export const Header = () => {
  return (
    <>
      <div className="main-div">
        <img src={HeadImg} alt="" />
        <div className="text-area">
            <h1>Bhagavad Gita</h1>
            <h3>The Devine Song of God.</h3>
            <p>
            Timeless Wisdom for Life's Journey. A profound Hindu scripture, it offers philosophical insights and spiritual guidance through a dialogue between Lord Krishna and Prince Arjuna on duty, righteousness, and the path to liberation. Its teachings resonate across cultures, illuminating the essence of existence and human purpose.
            </p>
        </div>
      </div>
    </>
  );
};
