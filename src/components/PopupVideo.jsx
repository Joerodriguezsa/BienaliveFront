import React from "react";

const PopupVideo = ({ videoSrc, onClose }) => {
  return (
    <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready">
      <div className="mfp-container mfp-s-ready mfp-iframe-holder">
        <button
          onClick={onClose}
          className="mfp-close"
          aria-label="Close"
        >
          &times;
        </button>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            title="Video Player"
            className="mfp-iframe"
            src={videoSrc}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default PopupVideo;