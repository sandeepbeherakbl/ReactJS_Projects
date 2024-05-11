import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../App.css";
import "./Chapter.css"
import axios from "axios";

export const ChapterSlokas = ({ location }) => {
  const { chapterNumber, verses } = location.state;

  // console.log("chapter number ---- ", chapterNumber),
  // console.log("verses ---- ", verses)

  const [chapterDetails, setChapterDetails] = useState({});
  const [sloka, setSloka] = useState("");
  const [activeButton, setActiveButton] = useState(1);

  useEffect(() => {
    fetchChapterDetails();
    fetchSloka(chapterNumber, activeButton);
  }, []);

  const fetchChapterDetails = async () => {
    try {
      const response = await axios.get(
        `https://bhagavadgitaapi.in/chapter/${chapterNumber}`
      );
      console.log("chapter response :- ", response.data);
      setChapterDetails(response.data);
    } catch (error) {
      console.error("Error fetching chapter details: ", error);
    }
  };

  const fetchSloka = async (chapter, verse) => {
    try {
      const response = await axios.get(
        `https://bhagavadgitaapi.in/slok/${chapter}/${verse}`
      );
      // console.log("fetch response :- ", response);
      setSloka(response.data);
      setActiveButton(verse);
    } catch (error) {
      console.error("Error fetching sloka: ", error);
    }
  };

  return (
    <>
      <div className="slokacontainer">
        <div className="navbar">
          <h2>Chapter {chapterNumber}</h2>
          <div className="verse-buttons-container">
            <div className="verse-buttons">
              {Array.from({ length: verses }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => fetchSloka(chapterNumber, index + 1)}
                  className={activeButton === index + 1 ? "active" : ""}
                >
                  Verses {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="details-div">
          <div className="chapter-details-sloaks">
            <h2>Chapter {chapterNumber} Details</h2>
            <p>{chapterDetails.name}</p>

            {chapterDetails.meaning && (
              <>
                {chapterDetails.meaning.hi && (
                  <p>Meaning (Hindi): {chapterDetails.meaning.hi}</p>
                )}
                {chapterDetails.meaning.en && (
                  <p>Meaning (English): {chapterDetails.meaning.en}</p>
                )}
              </>
            )}
            {chapterDetails.summary && (
              <>
                {chapterDetails.summary.hi && (
                  <p>Summary (Hindi): {chapterDetails.summary.hi}</p>
                )}
                {chapterDetails.summary.en && (
                  <p>Summary (English): {chapterDetails.summary.en}</p>
                )}
              </>
            )}

            {/* {chapterDetails.summary && chapterDetails.summary.en && (
              <p>Summary: {chapterDetails.summary.en}</p>
            )} */}
            <p>{chapterDetails.translation}</p>
            <p>{chapterDetails.transliteration}</p>
            <p>{chapterDetails.verses_count}</p>
          </div>
          <div className="sloka-container">
            <h2>Sloka {activeButton} :</h2>
            <p>{sloka.slok}</p>
            <p>{sloka.transliteration}</p>
          </div>
        </div>
      </div>
    </>
  );
};

ChapterSlokas.propTypes = {
  chapterNumber: PropTypes.number.isRequired,
  verses: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};
