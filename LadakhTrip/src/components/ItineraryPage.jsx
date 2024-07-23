// src/components/ItineraryPage.js
import {
  ArrowLeft,
  Bike,
  Calendar,
  CalendarDays,
  LandPlot,
  StickyNote,
} from "lucide-react";
import "./Main.css";
import { useState } from "react";
import PlacesToVisitPage from "./Places";

const itinerary = [
  {
    date: "21 Sept",
    day: "Saturday",
    title: "Leh arrival",
    description: [
      "Welcome at KUSHOK BAKULA RINPOCHE AIRPORT LEH rest the whole day and let your body acclimatize at Hotel. Overnight Stay at The Leh Hotel.",
    ],
  },
  {
    date: "22 Sept",
    day: "Sunday",
    title: "Leh to Kargil",
    description: [
      "Today the road offers much Breathtaking Landscape; we’ll feel Magnetic Hill today & take blesses of Gurudwara Pathar Sahib Sangam View. Moondland. Reach Kargil in the evening Overnight stay.",
    ],
  },
  {
    date: "23 Sept",
    day: "Monday",
    title: "Kargil to Leh",
    description: [
      "After breakfast drive towards Kargil War Memorial. We will halt at Drass and pay homage to our War heroes at Kargil War Memorial, situated at Drass sector, Where 1999 war was fought. Visit Dah and Hanu Villages, the two “Aryan” Villages of Ladakh Reach Leh in the evening.",
    ],
  },
  {
    date: "24 Sept",
    day: "Tuesday",
    title: "Leh – Khardung La – Nubra Valley",
    description: [
      "Start the journey to Khardung -La passes 18380 Ft. The highest motor-able road in The World. Further, continue the journey toward Nubra Valley. Enjoy the scenic beauty and reach Camp Site by evening.",
    ],
  },
  {
    date: "25 Sept",
    day: "Wednesday",
    title: "Nubra Valley – Pangong TSO",
    description: [
      "We’ll see dunes in no-man land, enjoy camel ride & photoshoot. The route is less travelled, but the most adventures one. Be ready to test your riding skill. Reach Pangong Lake by afternoon. Spend the evening in Camps at lake. Enjoy dinner and overnight stay in camp. ",
    ],
  },
  {
    date: "26 Sept",
    day: "Thursday",
    title: "Pangong TSO –Hanle",
    description: [
      "The real beauty of Pangong Lake you will observe on this day. ",
      "In chushul, we will visit Rezang La war memorial.",
      "Hanle has a lovely Monastery offering some great aerial views of the whole village that is a home of about 1000 people with altitude of 4500 Mtrs. ",
      "The Hanle Observatory is operated by the Indian Institute of Astrophysics, Bengaluru and currently the second highest optical observatory in the world, with an installed telescope of about 2.01 meters (6.5 feet) diameter.Overnight stay at Hanle.",
    ],
  },
  {
    date: "27 Sept",
    day: "Friday",
    title: " Hanle to Tso Moriri",
    description: [
      "After breakfast travel to Tso-Moriri the route is less travelled and very scenic and confusing as there are hardly any markers for roads. Later after the photoshoot continue journey toward Tso Moriri. Another beautiful Lake famous for sky blue water. Reach karzok in the evening. Overnight stay at Tso Moriri.Overnight stay at a hotel in Leh.",
    ],
  },
  {
    date: "28 Sept",
    day: "Saturday",
    title: " Tso Moriri to Leh",
    description: [
      "After breakfast start the journey toward Leh. On the way we will witness 2 beautiful lakes, Tso Moriri and Tso Kar. Enjoy the most beautiful sights that will take your breath away but a mix of good and bad roads await us on our way to Leh. We will cross the Tanglangla Pass. Reach Leh in the evening, and enjoy an overnight stay in camps with Dinner.",
    ],
  },
  {
    date: "29 Sept",
    day: "Sunday",
    title: "Departure from Leh",
    description: [
      "Today is the last day of this adventurous trip. You can leave back for your home today, but you won’t be going alone. You will be taking lots of fun memories, which you will cherish for a long time.",
    ],
  },
];

const totalDistance = itinerary.reduce((total, day) => {
  const distance = parseInt(day.distance);
  return total + (isNaN(distance) ? 0 : distance);
}, 0);

const startDate = itinerary[0].date;
const endDate = itinerary[itinerary.length - 1].date;
const totalDays = itinerary.length;

const ItineraryPage = () => {
  const [selectedTab, setSelectedTab] = useState("itinerary");
  const [selectedDate, setSelectedDate] = useState(itinerary[0].date);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <div className="itinerary-page">
        <div className="iti-header">
          <a href="/">
            <ArrowLeft height={25} width={25} color="#783FEF" />
          </a>
          <h2>
            <span style={{ fontWeight: 900 }}>Trip</span> Itinerary
          </h2>
        </div>

        <div className="details-trip">
          <p
            style={{
              backgroundColor: "#F8BBD0",
              border: "#D81B60",
              color: "#D81B60",
            }}
          >
            <span>
              <Calendar width={12} color="#D81B60" />
            </span>{" "}
            {startDate} - {endDate}
          </p>
          <p
            style={{
              backgroundColor: "#B3E5FC",
              border: "#03A9F4",
              color: "#03A9F4",
            }}
          >
            <Bike width={12} />
            1300+ KM
          </p>
          <p
            style={{
              backgroundColor: "#FFF9C4",
              border: "#FBC02D",
              color: "#FBC02D",
            }}
          >
            <CalendarDays width={12} />
            {totalDays} Days
          </p>
        </div>

        <div className="tab-container">
          <div
            onClick={() => handleTabClick("itinerary")}
            className={selectedTab === "itinerary" ? "active" : ""}
          >
            <StickyNote color="#DC7327" />
            Itinerary
          </div>
          <div
            onClick={() => handleTabClick("places")}
            className={selectedTab === "places" ? "active" : ""}
          >
            <LandPlot color="#2874AB" />
            Places to Visit
          </div>
        </div>

        {selectedTab === "itinerary" && (
          <>
            <div className="itinerary-main">
              <div className="date-tabs">
                {itinerary.map((day, index) => (
                  <div
                    key={index}
                    onClick={() => handleDateClick(day.date)}
                    className={selectedDate === day.date ? "active" : ""}
                  >
                    {day.date}
                  </div>
                ))}
              </div>
              <div className="itinerary-details">
                {itinerary
                  .filter((day) => day.date === selectedDate)
                  .map((day, index) => (
                    <div key={index} className="itinerary-day">
                      <div className="date-day">
                        <h2>
                          {day.date} {day.day}
                        </h2>
                        <h3>{day.title}</h3>
                      </div>
                      <div className="itidetails">
                        <ul>
                          {day.description.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      {/* <div className="details-div">
                        <div className="distance-map">
                          <div className="distancee">
                            {day.distance && (
                              <p>
                                <strong>Distance:</strong> {day.distance}
                              </p>
                            )}
                            {day.time && (
                              <p>
                                <strong>Time:</strong> {day.time}
                              </p>
                            )}
                          </div>
                          <div className="mapp">
                            <a
                              href={day.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <MapPinnedIcon color="#3939FF" />
                            </a>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  ))}
              </div>
            </div>
          </>
        )}

        {selectedTab === "places" && <PlacesToVisitPage />}
      </div>
    </>
  );
};

export default ItineraryPage;
