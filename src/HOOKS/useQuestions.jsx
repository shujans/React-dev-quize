import { useEffect, useState } from "react";

import { get, getDatabase, orderByKey, query, ref } from "firebase/database";

export default function useQuestions(videoID) {
  const [loding, setLoding] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      // database related Works
      const db = getDatabase();
      const quizeref = ref(db, "quiz/" + videoID + "/questions"); //Node Name
      const quizeQuery = query(quizeref, orderByKey());

      try {
        setError(false);
        setLoding(true);
        // request firebase Database
        const snapshot = await get(quizeQuery);
        setLoding(false);

        if (snapshot.exists()) {
          setQuestions((prevQuestions) => {
            return [...prevQuestions, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setLoding(false);
        setError(true);
      }
    }

    fetchQuestions();
  }, [videoID]);

  return {
    loding,
    error,
    questions,
  };
}
