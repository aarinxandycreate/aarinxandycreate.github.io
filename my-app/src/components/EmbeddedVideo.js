import React from "react";
import PropTypes from "prop-types";
import './EmbeddedVideo.css'

const YoutubeEmbed = ({ embedId }) => (
//   <div className="video-responsive">
    <div className="video">
        <div className="video-container">
            <iframe
            width="560" height="315"
            src={`https://www.youtube.com/embed/${embedId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            />
        </div>
    </div>
    
//   </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;