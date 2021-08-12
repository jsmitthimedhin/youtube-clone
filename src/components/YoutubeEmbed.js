import React from "react";
import PropTypes from "prop-types";
import './YoutubeEmbed.css';

const YoutubeEmbed = ({ embedId }) => {
  if(!embedId) {
    return <div></div>
  }
  return(
    <div className="ui segment">
      <div className="video-responsive">
        <iframe
          width="100%"
          height="auto"
          src={`https://www.youtube.com/embed/${embedId.id.videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </div>
  )
}

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;