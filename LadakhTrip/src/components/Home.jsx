// src/components/HomePage.js
import "./Main.css";

const HomePage = () => {
  return (
    <div className="home">
      <div className="image-gallery">
        <h1>Leh</h1>
        <h1>Ladakh</h1>
      </div>
      <div className="itinerary-link">
        <div className="quotes">
          <p>Ladakh awaits</p>
          <p>
            let's{" "}
            <span style={{ color: "#783FEF", fontWeight: "bold" }}>
              explore
            </span>{" "}
            its majesty.
          </p>

          <div className="small-quotes">
            <p>
              it's is not just a place, it's a feeling – a feeling of
              tranquility, vastness, and timeless beauty.
            </p>
          </div>
        </div>
        <div className="link-btn">
          <a href="/itinerary">View Itinerary</a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
