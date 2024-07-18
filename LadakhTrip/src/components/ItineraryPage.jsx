// src/components/ItineraryPage.js
import { ArrowLeft, MapPinned } from "lucide-react";
import "./Main.css";

const itinerary = [
  {
    date: "21-09-2024",
    day: "Saturday",
    details:
      "Reach Leh by taking morning early flight. Take rest in the hotel. Evening Visit to Leh Palace, Santi Stupa and Leh Market.",
    link: "https://www.google.com/travel/flights/booking?tfs=CBwQAho_EgoyMDI0LTA5LTIxIh8KA0RFTBIKMjAyNC0wOS0yMRoDSVhMKgJBSTIDNDQ1agcIARIDREVMcgcIARIDSVhMQAFIAXABggELCP___________wGYAQI&tfu=CmhDalJJV25waVdIVk5UR1J6UTFWQlExWkZkVUZDUnkwdExTMHRMUzB0ZEdKaWRHRXlNMEZCUVVGQlIyRlhURTFqU2twd1ZYTkJFZ1ZCU1RRME5Sb0tDTzhkRUFBYUEwbE9VamdjY040ahICCAAiAA&hl=en&gl=in&client=firefox-b-e&curr=INR",
    distance: "",
    time: "",
  },
  {
    date: "22-09-2024",
    day: "Sunday",
    details:
      "Bike ride to Thiksey and Sangam. Visit Thiksey Monastery, Spituk Monastery, Gurudwara Pathar Sahib, Magnetic Hill, Sangam Point and Hall of fame.",
    link: "https://maps.app.goo.gl/ESAnRAZ5fGW4ZoTv8",
    distance: "100 KM",
    time: "2 hr 30 min",
  },
  {
    date: "23-09-2024",
    day: "Monday",
    details:
      "Leh-Kargil. On the way to Kargil, visit Lamayuru 'The Moon Land of Ladhak'. Spend the night in Kargil.",
    link: "https://maps.app.goo.gl/26Fs4PeZdjVHgPaNA",
    distance: "210 KM",
    time: "4 hr 40 min",
  },
  {
    date: "24-09-2024",
    day: "Tuesday",
    details:
      "Early morning ride to Dras to see the Kargil War Memorial. On the way back, visit the LOC point from Hundurmaan. Lunch at Kargil and then drive back to Leh.",
    link: "https://maps.app.goo.gl/hqUyqyKZaZEXXap76",
    distance: "330 KM",
    time: "7 hr 30 min",
  },
  {
    date: "25-09-2024",
    day: "Wednesday",
    details:
      "Ride to Nubra Valley via Khardungla Pass. Visit Diskit Monastery and Hunder Sand Dunes.",
    link: "https://maps.app.goo.gl/J3zPUYdmVssWVARH8",
    distance: "116 KM",
    time: "3 hr 30 min",
  },
  {
    date: "26-09-2024",
    day: "Thursday",
    details:
      "Ride to Pangong Lake. Enjoy the scenic beauty and spend the night near the lake.",
    link: "https://maps.app.goo.gl/1pArSmCT3Dcfk9gC8",
    distance: "181 KM",
    time: "4 hr 40 min",
  },
  {
    date: "27-09-2024",
    day: "Friday",
    details:
      "Ride to Tsomori. Enjoy the beautiful landscapes and spend the night at Tsomori.",
    link: "https://maps.app.goo.gl/ytabUFgi5ayDdniJ9",
    distance: "161 KM",
    time: "4 hr 50 min",
  },
  {
    date: "28-09-2024",
    day: "Saturday",
    details:
      "Ride back to Leh. Enjoy the last day in Leh with some local sightseeing.",
    link: "https://maps.app.goo.gl/gE357i7N7TaBkz7j6",
    distance: "220 KM",
    time: "5 hr",
  },
  {
    date: "29-09-2024",
    day: "Sunday",
    details: "Check out from the hotel and take the flight back to Delhi.",
    link: "https://www.google.com/travel/flights/booking?tfs=CBwQAhpAEgoyMDI0LTA5LTI5IiAKA0lYTBIKMjAyNC0wOS0yORoDREVMKgI2RTIEMjU4NGoHCAESA0lYTHIHCAESA0RFTEABSAFwAYIBCwj___________8BmAEC&tfu=CmxDalJJZFZoSGNHSk5WelpqZUUxQlExTkhXV2RDUnkwdExTMHRMUzB0ZEdKaWNXY3hNRUZCUVVGQlIyRlhUSFJqVEcwNFpHdEJFZ1kyUlRJMU9EUWFDZ2lOTHhBQUdnTkpUbEk0SEhDdE9BPT0SAggAIgMKATA&hl=en&gl=in&client=firefox-b-e&curr=INR",
    distance: "",
    time: "",
  },
];

const ItineraryPage = () => {
  return (
    <>
      <div className="iti-main-div">
        <div className="iti-sub-div">
          <div className="itinerary">
            <div className="iti-title">
              <a href="/">
                <ArrowLeft height={30} width={30} />
              </a>
              <h1>Trip Itinerary</h1>
            </div>

            {itinerary.map((day, index) => (
              <div key={index} className="itinerary-day">
                <h2>
                  {day.date} - {day.day}
                </h2>
                <p className="detILS">{day.details}</p>

                <div className="distance-map">
                  <div className="distance">
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
                      <MapPinned />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItineraryPage;
