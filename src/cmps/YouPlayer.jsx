import React from 'react';
import YouTube from 'react-youtube';


export const YouPlayer = (props) => {
    const onReady = event => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
  

    const opts = {
        height: '100',
        width: '1000',
        playerVars: {
            autoplay: 1,
            playing:true,
            // https://developers.google.com/youtube/player_parameters
        },
    };

    return (
        <YouTube videoId={props.videoId} opts={opts} onReady={onReady} />
    )
}