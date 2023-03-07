import { useEffect, useState } from "react";
import axios from "axios";

function YoutubeVideosList() {
  const [videos, setVideos] = useState([]);
  const channelId = "UCX14SMYmqC1lQlxhe0gMQ3A";
  const YOUR_API_KEY = "AIzaSyCNcaZdotaXxEjXrGaeGwWhUkv5cBOTLmg";

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=50&key=${YOUR_API_KEY}`
      )
      .then((response) => {
        setVideos(response.data.items);
        console.log(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [channelId]);
  return (
    <div className="flex gap-6 my-auto">
      {videos.map((video, ind) => (
        <div key={ind}>
          <iframe
            width="270"
            height="170"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
}

export default YoutubeVideosList;
