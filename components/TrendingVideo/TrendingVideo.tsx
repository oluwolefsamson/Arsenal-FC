

import React from 'react';
import './TrendingVideo.css'

function TrendingVideo() {
  const videoData = [
    {
      id: 1,
      src: 'vid1.mp4',
      title: 'Video 1',
      description: 'Heighlights / Declan Rice goal against Sheffield.',
    },
    {
      id: 2,
      src: 'vid2.mp4',
      title: 'Video 2',
      description: 'UCL Heighlights / Trossard goal against Porto.',
    },

    {
        id: 3,
        src: 'vid3.mp4',
        title: 'Video 2',
        description: 'Gabriel Jesus doing the Gabriel Jesus thing.',
      },

    {
        id: 4,
        src: 'vid4.mp4',
        title: 'Video 2',
        description: 'Odegard with the assist. Trossard with the finish.',
      },
    // Add more video objects as needed
  ];

  return (
    <section className='video-wrapper'>
        <h2>LATEST VIDEO</h2>
          <div className="video-con">
      {videoData.map(video => (
        <div key={video.id} className="video-card">
          <video controls className="video">
            <source src={video.src} type="video/mp4" className='vid'/>
            Your browser does not support the video tag.
          </video>
          <div className="video-info">
            {/* <h3 className="video-title">{video.title}</h3> */}
            <p className="video-description">{video.description}</p>
          </div>
        </div>
      ))}
    </div>
    </section>
  
  );
}

export default TrendingVideo;
