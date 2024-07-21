// src/components/PlacesToVisitPage.js
import "./Main.css";

const placesToVisit = [
  {
    name: "Leh Palace",
    description: "A former royal palace overlooking Leh.",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/15/b8/b0/75/img-20180929-134346-largejpg.jpg", 
  },
  {
    name: "Shanti Stupa",
    description: "A Buddhist white-domed stupa on a hilltop in Chanspa.",
    image: "https://www.holidify.com/images/cmsuploads/compressed/Shanti_Stupa,_Leh,_Ladakh_20180305180249.jpg", // Add image URL or path
  },
  {
    name: "Thiksey Monastery",
    description: "A Tibetan Buddhist monastery of the Yellow Hat sect.",
    image: "https://miro.medium.com/v2/resize:fit:3264/1*rdbbFXJ3R-ZtoMrpm8GbQg.jpeg", // Add image URL or path
  },
  {
    name: "Pangong Lake",
    description: "A high altitude lake known for its stunning blue waters.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/00/2f/67/img-20180620-wa0007-largejpg.jpg?w=1200&h=1200&s=1", // Add image URL or path
  },
  {
    name: "Kargil War Memorial",
    description: "A memorial dedicated to the soldiers of the Kargil War.",
    image: "https://www.makemytrip.com/travel-guide/media/dg_image/kargil/Drass-War-Memorial-in-Kargil-Ladakh-Mail2arunjith-wikimedia.jpg", // Add image URL or path
  },
  {
    name: "Diskit Monastery",
    description: "A prominent Buddhist monastery in the Nubra Valley.",
    image: "https://www.ladakh-tourism.net/wp-content/uploads/2022/02/Diskit-7-1024x538.jpeg", // Add image URL or path
  },
  {
    name: "Hunder Sand Dunes",
    description: "Famous for its sand dunes and double-humped camel rides.",
    image: "https://www.hlimg.com/images/things2do/738X538/p_1523265193t.jpg", // Add image URL or path
  },
  {
    name: "Hanle",
    description: "A remote village known for its star-gazing opportunities.",
    image: "https://images.livemint.com/img/2023/08/12/1200x900/At_Hanle_1691822841857_1691822861790.jpg", // Add image URL or path
  },
  {
    name: "Tso Moriri Lake",
    description: "A high-altitude lake and conservation reserve.",
    image: "https://www.ekashmirtourism.com/leh-ladakh-packages/wp-content/uploads/2023/01/image-7.jpg", // Add image URL or path
  },
  {
    name: "Chumathang Hot Springs",
    description: "Hot springs known for their medicinal properties.",
    image: "https://www.thestatesman.com/wp-content/uploads/2023/12/Untitled-design-2023-12-12T200820.478.jpg", // Add image URL or path
  },
  {
    name: "Shey Palace",
    description: "A historic palace known for its architecture and views.",
    image: "https://indotoursadventures.com/public/storage/blogs/db9d06763eb1eb02138f891f42d5a5cf.jpeg", // Add image URL or path
  },
  {
    name: "3 Idiots School",
    description: "The school featured in the movie '3 Idiots'.",
    image: "https://discoverlehladakh.in/wp-content/uploads/2020/11/Rancho-school-wall-at-Shey-in-Leh-Ladakh-1130x530.jpg", // Add image URL or path
  },
];

const PlacesToVisitPage = () => {
  return (
    <>
      <div className="place-main">
        <div className="places-to-visit">
          <h2>Places to Visit</h2>
          {placesToVisit.map((place, index) => (
            <div key={index} className="place">
              <div className="descrip">
                <h3>{place.name}</h3>
                <p>{place.description}</p>
              </div>
              <div className="images">
                <img src={place.image} alt={place.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PlacesToVisitPage;
