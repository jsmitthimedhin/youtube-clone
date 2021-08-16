import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import youtube from '../api/youtube';
import YoutubeEmbed from './YoutubeEmbed';
import useVideos from '../hook/useVideos';
import 'semantic-ui-css/semantic.min.css';
import '../style.css';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('buildings');
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
      <div className="ui container">
        <SearchBar onFormSubmit={search}/>
        <div className="ui grid">
            <div className="ui row">
                <div className="eleven wide column">
                  <YoutubeEmbed embedId={selectedVideo} />
                  <VideoDetail video={selectedVideo} />
                </div>
                <div className="five wide column">
                  <VideoList onVideoSelect={setSelectedVideo} videos={videos}/>
                </div>
            </div>
        </div>
      </div>
    )
  }

export default App;