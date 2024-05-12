<div>
      <div className="sloka-main-div">
        <div className="slokacontainer">
          <div className="details-div">
            <div className="chapter-details-sloaks">
              <div className="details">
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
              <div className="chapter-headImg">
                <img src={ChapterHead} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sloka-child-div">
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
        <div className="sloka-container">
          <h2>Sloka {activeButton} :</h2>
          <p>{sloka.slok}</p>
          <p>{sloka.transliteration}</p>
        </div>
      </div>
    </div>