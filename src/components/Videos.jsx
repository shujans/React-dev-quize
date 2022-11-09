import React, { useState } from "react";
import { Link } from "react-router-dom";

import Video from "./Video";
import UseVideoList from "../HOOKS/UseVideoList";
import InfiniteScroll from "react-infinite-scroll-component";

const Videos = () => {
  const [page, setPage] = useState(1);
  const { loding, error, videos, hasMore } = UseVideoList(page);
  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          loader="Loding..."
          next={() => setPage(page + 8)}
        >
          {videos.map((video) => {
            const { youtubeID, title, noq } = video;
            return noq > 0 ? (
              <Link to={`/quize/${youtubeID}`} state={title} key={youtubeID}>
                <Video title={title} id={youtubeID} noq={noq} />
              </Link>
            ) : (
              <Video title={title} key={youtubeID} id={youtubeID} noq={noq} />
            );
          })}
        </InfiniteScroll>
      )}

      {!loding && videos.length === 0 && <div>No Data Found</div>}
      {error && <div>There Was An Error</div>}
      {loding && (
        <div className="loding">
          <h1>Loding...</h1>
        </div>
      )}
    </div>
  );
};

export default Videos;
