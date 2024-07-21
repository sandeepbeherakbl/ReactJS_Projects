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
      "Arrive in Leh and get transported to the hotel where you will be welcomed traditionally.",
      "Relax in the day for acclimatization.",
      "Later, visit LEH\u2019s market and explore it completely.",
      "Enjoy the Dinner and overnight stay at Hotel.",
    ],
  },
  {
    date: "22 Sept",
    day: "Sunday",
    title: "Leh to Kargil",
    description: [
      "Wake up & post breakfast depart for Kargil.",
      "Enroute you can cover Magnetic Hills, Gurudwara Pathir Sahib and Confluence of river.",
      "From Leh, Lamayuru is approximately 125km that passes through Nimmu and Hangroo Loops.",
      "Drive from Lamayuru to Kargil via Fotu La, Namika La and Mulbek.",
      "Reach Kargil by evening & check in to the hotel.",
      "Dinner & Sleep Overnight.",
    ],
  },
  {
    date: "23 Sept",
    day: "Monday",
    title: "Kargil to Leh",
    description: [
      "Wake up early morning and post breakfast cover Kargil War memorial & drass, the Coldest inhabited place in India & often called as the gateway to Ladakh.",
      "Reach leh, checkin the hotel, overnight stay in leh.",
    ],
  },
  {
    date: "24 Sept",
    day: "Tuesday",
    title: "Leh to Nubra valley via Khardungla pass",
    description: [
      "Khardung La Pass;",
      "Diskit Monastery",
      "Hundar Sand dunes and Enjoy a double-humped Camel ride in the cold desert",
      "Enjoy your dinner and stay overnight in Hunder.",
    ],
  },
  {
    date: "25 Sept",
    day: "Wednesday",
    title: "Nubra valley To Pangong Lake via Shyok",
    description: [
      "This morning after breakfast, drive to Pangong Lake on the Indo China border.",
      "Rides via shayok River route.",
      "Dinner and overnight stay at Wooden cottage.",
      "At midnight enjoy the Galaxy views from your cottage.",
    ],
  },
  {
    date: "26 Sept",
    day: "Thursday",
    title: "Pangong Lake to Hanle via Tsaga pass",
    description: [
      "Distance - Pangong Lake to hanle (280km) with landscape view and later enjoy the star gazing at hanle.",
    ],
  },
  {
    date: "27 Sept",
    day: "Friday",
    title: "Hanle - Nurbula pass - Umlingla pass - Hanle - Tsomoriri Lake",
    description: [
      "Umlung La is the highest paved road and mountain pass in the world, located in Ladakh, India, on the ridgeline between Koyul Lungpa and the Indus River near Demchok. At an elevation of 19,024 feet (5,799 m).",
      "Tso Moriri or Lake Moriri is a lake in the Changthang Plateau in Ladakh in Northern India. The lake and surrounding area are protected as the Tso Moriri Wetland Conservation Reserve.",
      "Later, Dinner and overnight stay in Tsomoriri Lake.",
    ],
  },
  {
    date: "28 Sept",
    day: "Saturday",
    title: "Tsomoriri to Leh",
    description: [
      "After breakfast, embark your journey back to Leh.",
      "Ride back through route passing chumathang hot spring and visit Thiksey gompa, Shey Gompa, and palace en-route.",
      "Visit the actual 3-idiots Movie school.",
      "Chumathang Famous for its hot spring which attracts many tourists all over the world, even the local people come every year to take the medicinal benefits from the hot spring.",
    ],
  },
  {
    date: "29 Sept",
    day: "Sunday",
    title: "Departure from Leh",
    description: [
      "Post breakfast, depart from Leh for your onward journey.",
      "We will drop you to the airport.",
      "End your Leh Ladakh tour package with a bag full of memories.",
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
            {totalDistance} KM
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
                        <h2>{day.date} {day.day}</h2>
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
