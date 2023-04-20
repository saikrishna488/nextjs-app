"use client";
import React, { useState, useEffect } from "react";
import Loading from "./loading";

const page = () => {
  const [word, setWord] = useState(null);
  const [meaning, setMeaning] = useState("Enter Word To search");
  const [loading, setLoading] = useState(false);
  const fetchData = async (word) => {
    setLoading(true);
    let res = await fetch(
      `https://dictionary-api-chi.vercel.app/dict/${word}`,
      {
        cache: "no-cache",
      }
    );
    let data = await res.json();
    setMeaning(data.meaning ? data.meaning : data.msg);
    setLoading(false);
  };

  const onClick = (word) => {
    if (word == null) {
      setMeaning("Enter Word To search");
    } else {
      fetchData(word);
    }
  };

  return (
    <div className="container">
      {!loading ? (
        <>
          <div className="input-con">
            <input
              type="text"
              className="input"
              onChange={(e) => setWord(e.target.value)}
            />
            <button id="btn" onClick={() => onClick(word)}>
              Get Meaning
            </button>
          </div>
          <h3>{meaning}</h3>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default page;
