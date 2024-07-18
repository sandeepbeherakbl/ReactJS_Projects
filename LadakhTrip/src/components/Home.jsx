// src/components/HomePage.js
import './Main.css';

const HomePage = () => {
  return (
    <div className="home">
      <h1>Welcome to Ladakh</h1>
      <div className="image-gallery">
        {/* <img src="/assets/image1.jpg" alt="Ladakh 1" />
        <img src="/assets/image2.jpg" alt="Ladakh 2" />
        <img src="/assets/image3.jpg" alt="Ladakh 3" /> */}
      </div>
      <div className="itinerary-link">
        <a href="/itinerary">View Itinerary</a>
      </div>
    </div>
  );
};

export default HomePage;
