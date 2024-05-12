import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Chapter.css";
import axios from "axios";
import ChapterHead from "../assets/Chapterpage.jpg";
import GalaxyBackground from "./StarBackground";
import { useLocation } from "react-router-dom";

export const ChapterSlokas = () => {
  const location = useLocation();
  const { chapterNumber, verses } = location.state;

  console.log("chapter number ---- ", chapterNumber),
  console.log("verses ---- ", verses)

  const [chapterDetails, setChapterDetails] = useState({});
  const [sloka, setSloka] = useState("");
  const [currentVerse, setCurrentVerse] = useState(1);
  const totalVerses = verses;

  useEffect(() => {
    fetchChapterDetails();
    fetchSloka(chapterNumber, currentVerse);
  }, []);

  const fetchChapterDetails = async () => {
    console.log("fetch details")
    try {
      console.log("fetch-details-response")
      const response = await axios.get(
        `/chapter/${chapterNumber}`
      );
      console.log("chapter response :- ", response.data);
      setChapterDetails(response.data);
    } catch (error) {
      console.error("Error fetching chapter details: ", error);
    }
  };

  const fetchSloka = async (chapter, verse) => {
    console.log("fetch sloka")
    try {
      console.log("fetch-sloka response")
      const response = await axios.get(
        `/slok/${chapter}/${verse}`
      );
      console.log("fetch response :- ", response.data);
      setSloka(response.data);
      setCurrentVerse(verse);
    } catch (error) {
      console.error("Error fetching sloka: ", error);
    }
  };

  const handleNextVerse = () => {
    console.log("Next Button Clicked");
    if (currentVerse < totalVerses) {
      const nextVerse = currentVerse + 1;
      fetchSloka(chapterNumber, nextVerse); 
    }
  };

  const handlePrevVerse = () => {
    if (currentVerse > 1) {
      const prevVerse = currentVerse - 1;
      fetchSloka(chapterNumber, prevVerse);
    }
  };

  return (
    <>
      <div className="chapter-sloka-main-div">
        <GalaxyBackground />
        <div className="chapter-header">
          <div className="chapter-main-div">
            <div className="chapter-text-area">
              <h2>Chapter {chapterNumber}.</h2>
              <p style={{marginBottom: "5px"}}>{chapterDetails.name}</p>

              {chapterDetails.meaning && (
                <>
                  {chapterDetails.meaning.hi && (
                    <p style={{display: "none"}} >Meaning (Hindi): {chapterDetails.meaning.hi}</p>
                  )}
                  {chapterDetails.meaning.en && (
                    <p style={{marginBottom: "20px"}}>{chapterDetails.meaning.en}</p>
                  )}
                </>
              )}

              <h3 style={{marginBottom: "10px", fontWeight: "normal"}}>Summary</h3>
              {chapterDetails.summary && (
                <>
                  {chapterDetails.summary.hi && (
                    <p style={{display: "none"}} >Summary (Hindi): {chapterDetails.summary.hi}</p>
                  )}
                  {chapterDetails.summary.en && (
                    <p className="text-summary">{chapterDetails.summary.en}</p>
                  )}
                </>
              )}
              {/* <p>{chapterDetails.translation}</p>
              <p>{chapterDetails.transliteration}</p> */}
              <p style={{marginTop: "20px"}}>Total Verses : {chapterDetails.verses_count}</p>
            </div>
            <div className="heade-img">
              <img src={ChapterHead} alt="" />
            </div>
          </div>
        </div>

        <div className="chapter-body">
          <div className="navbar">
            <h2>Chapter {chapterNumber}, Verses</h2>
            <div className="verse-buttons-container">
              <div className="verse-buttons">
                {Array.from({ length: verses }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => fetchSloka(chapterNumber, index + 1)}
                    className={currentVerse === index + 1 ? "active" : ""}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="navigation-sloka-div">
            <div className="sloka-container">
              <h2>Sloka {currentVerse} :</h2>
              <p>{sloka.slok}</p>
              <p>{sloka.transliteration}</p>
            </div>

            <div className="verse-navigation">
              <button
                onClick={handlePrevVerse}
                disabled={currentVerse === 1}
                className="next-button animate"
              >
                &laquo;{" "}
              </button>
              <div>
                Verse {currentVerse} / {totalVerses}
              </div>
              <button
                onClick={handleNextVerse}
                disabled={currentVerse === totalVerses}
                className="prev-button animate"
              >
                &raquo;
              </button>
            </div>
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
