// App.js
import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";
import GalaxyBackground from "./StarBackground";
import { Header } from "./Header";

export const Home = () => {
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://bhagavadgitaapi.in/chapters/");
      //   console.log("response", response);
      setChapters(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div className="home-page">
      <Header />
      <div className="container">
        <GalaxyBackground />
        <h1 className="head-title">Chapters</h1>
        <div className="card-container">
          <div className="sub-container">
            {chapters.map((chapter) => (
              <>
                <input
                  type="radio"
                  name="slide"
                  id={`c${chapter.chapter_number}`}
                />

                <label htmlFor={`c${chapter.chapter_number}`} className="card">
                  <div key={chapter.chapter_number} className="cards">
                    <div className="chapter-No">
                      <h1>{chapter.chapter_number}</h1>
                    </div>
                    <div className="chapter-details">
                      <h3>{chapter.name}</h3>
                      <p>{chapter.meaning.en}</p>
                      <Link
                        to={{
                          pathname: "/ChapterSlokas",
                          state: {
                            chapterNumber: chapter.chapter_number,
                            verses: chapter.verses_count,
                          },
                        }}
                        className="view-chapter-button"
                      >
                        View Chapter
                      </Link>
                    </div>
                  </div>
                </label>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
