import { useEffect, useState } from "react";

import { get, getDatabase, orderByKey, query, ref } from "firebase/database";

export default function useAnswers(videoID) {
  const [loding, setLoding] = useState(true);
  const [error, setError] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    async function fetchAnswers() {
      // database related Works
      const db = getDatabase();
      const answersref = ref(db, "answers/" + videoID + "/questions"); //Node Name
      const answerQuery = query(answersref, orderByKey());

      try {
        setError(false);
        setLoding(true);
        // request firebase Database
        const snapshot = await get(answerQuery);
        setLoding(false);

        if (snapshot.exists()) {
          setAnswers((prevAnswers) => {
            return [...prevAnswers, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setLoding(false);
        setError(true);
      }
    }

    fetchAnswers();
  }, [videoID]);

  return {
    loding,
    error,
    answers,
  };
}
