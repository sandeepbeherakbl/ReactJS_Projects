import "../App.css";
import HeadImg from "../assets/Head.jpg";

export const Header = () => {
  return (
    <>
      <div className="main-div">
        <img src={HeadImg} alt="" />
        <div className="text-area">
            <h1>Titel</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia enim voluptatem, delectus corrupti eum culpa ipsa placeat vel quisquam accusantium? Soluta, rerum eveniet.
            </p>
        </div>
      </div>
    </>
  );
};
