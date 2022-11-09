import React from "react";
import style from "./style/Summary.module.css";
import defaultImage from "../assets/images/success.png";
import useFetch from "../HOOKS/useFetch";
import { useMemo } from "react";

const Summary = ({ score, numberOfQuestion }) => {
  const getKeyword = useMemo(() => {
    if ((score / (numberOfQuestion * 5)) * 100 < 50) {
      return "failed";
    } else if ((score / (numberOfQuestion * 5)) * 100 < 75) {
      return "good";
    } else if ((score / (numberOfQuestion * 5)) * 100 < 100) {
      return "very good";
    } else {
      return "excellent";
    }
  }, [score, numberOfQuestion]);

  const { loading, error, result } = useFetch(
    `https://api.pexels.com/v1/search?query=${getKeyword}&per_page=1`,
    "GET",
    {
      Authorization: process.env.REACT_APP_PEXELS_API_KEY,
    }
  );

  const image = result ? result?.photos[0].src.medium : defaultImage;

  return (
    <div className={style.summary}>
      <div className={style.point}>
        <p className={style.score}>
          Your score is <br />
          {score} out of {numberOfQuestion * 5}
        </p>
      </div>
      {loading && <div className={style.badge}>Loading...</div>}
      {error && <div className={style.badge}>Something Error Occourd!</div>}
      {!loading && !error && (
        <div className={style.badge}>
          <img src={image} alt="Success" />
        </div>
      )}
    </div>
  );
};

export default Summary;
