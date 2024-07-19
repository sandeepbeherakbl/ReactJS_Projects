// src/components/ItineraryPage.js
import { ArrowLeft, Bike, Calendar, CalendarDays, LandPlot, MapPinnedIcon, StickyNote } from "lucide-react";
import "./Main.css";
import { useState } from "react";
import PlacesToVisitPage from "./Places";

const itinerary = [
  {
    date: "21 Sept",
    day: "Saturday",
    details:
      "Reach Leh by taking morning early flight. Take rest in the hotel. Evening Visit to Leh Palace, Santi Stupa and Leh Market.",
    link: "https://www.google.com/travel/flights/booking?tfs=CBwQAho_EgoyMDI0LTA5LTIxIh8KA0RFTBIKMjAyNC0wOS0yMRoDSVhMKgJBSTIDNDQ1agcIARIDREVMcgcIARIDSVhMQAFIAXABggELCP___________wGYAQI&tfu=CmhDalJJV25waVdIVk5UR1J6UTFWQlExWkZkVUZDUnkwdExTMHRMUzB0ZEdKaWRHRXlNMEZCUVVGQlIyRlhURTFqU2twd1ZYTkJFZ1ZCU1RRME5Sb0tDTzhkRUFBYUEwbE9VamdjY040ahICCAAiAA&hl=en&gl=in&client=firefox-b-e&curr=INR",
    distance: "",
    time: "",
  },
  {
    date: "22 Sept",
    day: "Sunday",
    details:
      "Bike ride to Thiksey and Sangam. Visit Thiksey Monastery, Spituk Monastery, Gurudwara Pathar Sahib, Magnetic Hill, Sangam Point and Hall of fame.",
    link: "https://maps.app.goo.gl/ESAnRAZ5fGW4ZoTv8",
    distance: "100 KM",
    time: "2 hr 30 min",
  },
  {
    date: "23 Sept",
    day: "Monday",
    details:
      "Leh-Kargil. On the way to Kargil, visit Lamayuru 'The Moon Land of Ladhak'. Spend the night in Kargil.",
    link: "https://maps.app.goo.gl/26Fs4PeZdjVHgPaNA",
    distance: "210 KM",
    time: "4 hr 40 min",
  },
  {
    date: "24 Sept",
    day: "Tuesday",
    details:
      "Early morning ride to Dras to see the Kargil War Memorial. On the way back, visit the LOC point from Hundurmaan. Lunch at Kargil and then drive back to Leh.",
    link: "https://maps.app.goo.gl/hqUyqyKZaZEXXap76",
    distance: "330 KM",
    time: "7 hr 30 min",
  },
  {
    date: "25 Sept",
    day: "Wednesday",
    details:
      "Ride to Nubra Valley via Khardungla Pass. Visit Diskit Monastery and Hunder Sand Dunes.",
    link: "https://maps.app.goo.gl/J3zPUYdmVssWVARH8",
    distance: "116 KM",
    time: "3 hr 30 min",
  },
  {
    date: "26 Sept",
    day: "Thursday",
    details:
      "Ride to Pangong Lake. Enjoy the scenic beauty and spend the night near the lake.",
    link: "https://maps.app.goo.gl/1pArSmCT3Dcfk9gC8",
    distance: "181 KM",
    time: "4 hr 40 min",
  },
  {
    date: "27 Sept",
    day: "Friday",
    details:
      "Ride to Tsomori. Enjoy the beautiful landscapes and spend the night at Tsomori.",
    link: "https://maps.app.goo.gl/ytabUFgi5ayDdniJ9",
    distance: "161 KM",
    time: "4 hr 50 min",
  },
  {
    date: "28 Sept",
    day: "Saturday",
    details:
      "Ride back to Leh. Enjoy the last day in Leh with some local sightseeing.",
    link: "https://maps.app.goo.gl/gE357i7N7TaBkz7j6",
    distance: "220 KM",
    time: "5 hr",
  },
  {
    date: "29 Sept",
    day: "Sunday",
    details: "Check out from the hotel and take the flight back to Delhi.",
    link: "https://www.google.com/travel/flights/booking?tfs=CBwQAhpAEgoyMDI0LTA5LTI5IiAKA0lYTBIKMjAyNC0wOS0yORoDREVMKgI2RTIEMjU4NGoHCAESA0lYTHIHCAESA0RFTEABSAFwAYIBCwj___________8BmAEC&tfu=CmxDalJJZFZoSGNHSk5WelpqZUUxQlExTkhXV2RDUnkwdExTMHRMUzB0ZEdKaWNXY3hNRUZCUVVGQlIyRlhUSFJqVEcwNFpHdEJFZ1kyUlRJMU9EUWFDZ2lOTHhBQUdnTkpUbEk0SEhDdE9BPT0SAggAIgMKATA&hl=en&gl=in&client=firefox-b-e&curr=INR",
    distance: "",
    time: "",
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
          <p style={{backgroundColor: "#F8BBD0", border: "#D81B60", color: "#D81B60" }}><span><Calendar width={12} color="#D81B60"/></span> {startDate} - {endDate}</p>
          <p style={{backgroundColor: "#B3E5FC", border: "#03A9F4", color: "#03A9F4" }}><Bike width={12}/>{totalDistance} KM</p>
          <p style={{backgroundColor: "#FFF9C4", border: "#FBC02D", color: "#FBC02D" }}><CalendarDays width={12}/>{totalDays} Days</p>
        </div>

        <div className="tab-container">
          <div
            onClick={() => handleTabClick("itinerary")}
            className={selectedTab === "itinerary" ? "active" : ""}
          >
            <StickyNote color="#DC7327"/>
            Itinerary
          </div>
          <div
            onClick={() => handleTabClick("places")}
            className={selectedTab === "places" ? "active" : ""}
          >
            <LandPlot color="#2874AB"/>
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
                        <h2>{day.date}</h2>
                        <h2>{day.day}</h2>
                      </div>
                      <div className="itidetails">
                          <p>{day.details}</p>
                        </div>
                      <div className="details-div">
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
                      </div>
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
