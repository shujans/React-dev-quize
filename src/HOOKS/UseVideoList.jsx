import { useEffect, useState } from "react";

import {
  get,
  getDatabase,
  orderByKey,
  query,
  ref,
  startAt,
  limitToFirst,
} from "firebase/database";

export default function UseVideoList(page) {
  const [loding, setLoding] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMre] = useState(true);

  useEffect(() => {
    async function fatchVideo() {
      // database related Works
      const db = getDatabase();
      const videosRef = ref(db, "videos"); //Node Name
      const videoQueary = query(
        videosRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(8)
      );

      try {
        setError(false);
        setLoding(true);
        // request firebase Database
        const snapshot = await get(videoQueary);
        setLoding(false);

        if (snapshot.exists()) {
          setVideos((prevVideos) => {
            return [...prevVideos, ...Object.values(snapshot.val())];
          });
        } else {
          setHasMre(false);
        }
      } catch (err) {
        console.log(err);
        setLoding(false);
        setError(true);
      }
    }

    fatchVideo();
  }, [page]);

  return {
    loding,
    error,
    videos,
    hasMore,
  };
}
