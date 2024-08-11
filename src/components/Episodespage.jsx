import { useContext, useState, useRef } from 'react';
import { DataApi } from '../data/contextApi';
import ReactPlayer from 'react-player';

const Episodespage = () => {
  const { itemvalue } = useContext(DataApi);
  const [playingIndex, setPlayingIndex] = useState(null);
  const playerRef = useRef(null);

  const handleThumbnailClick = (index) => {
    setPlayingIndex(index);
    setTimeout(() => {
      if (playerRef.current) {
        const playerElement = playerRef.current.wrapper;
        if (playerElement.requestFullscreen) {
          playerElement.requestFullscreen();
        } else if (playerElement.mozRequestFullScreen) { /* Firefox */
          playerElement.mozRequestFullScreen();
        } else if (playerElement.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
          playerElement.webkitRequestFullscreen();
        } else if (playerElement.msRequestFullscreen) { /* IE/Edge */
          playerElement.msRequestFullscreen();
        }
      }
    }, 100); // A small delay to ensure the video starts playing before going fullscreen
  };

  return (
    <div className="w-[100vw] flex overflow-y-auto flex-wrap">
      {itemvalue.episodescomponents.map((data, index) => (
        <div key={index} className="cursor-pointer w-[90vw] ml-[5vw] mt-24 max-w-[800px] mb-8">
          {playingIndex === index ? (
            <ReactPlayer
              ref={playerRef}
              url={data.episodeurl}
              width="100%"
              height="480px"
              controls
              playing={true}
            />
          ) : (
            <img
              src={data.thumbnail}
              alt="Video Thumbnail"
              style={{ cursor: 'pointer', width: '100%' }}
              onClick={() => handleThumbnailClick(index)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Episodespage;