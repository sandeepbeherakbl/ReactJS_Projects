// src/components/PlacesToVisitPage.js
import "./Main.css";

const placesToVisit = [
  {
    name: "Leh Palace",
    description: "A former royal palace overlooking Leh.",
  },
  {
    name: "Shanti Stupa",
    description: "A Buddhist white-domed stupa on a hilltop in Chanspa.",
  },
  {
    name: "Thiksey Monastery",
    description: "A Tibetan Buddhist monastery of the Yellow Hat sect.",
  },
  {
    name: "Pangong Lake",
    description: "A high altitude lake known for its stunning blue waters.",
  },
  // Add more places as needed...
];

const PlacesToVisitPage = () => {
  return (
    <>
      <div className="place-main">
        <div className="places-to-visit">
          <h2>Places to Visit</h2>
          {placesToVisit.map((place, index) => (
            <div key={index} className="place">
              <h3>{place.name}</h3>
              <p>{place.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PlacesToVisitPage;
