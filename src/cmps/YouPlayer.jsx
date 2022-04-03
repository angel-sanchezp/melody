import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';


export const YouPlayer = (props) => {
    const [videoId, setvideoId] = useState(null)
    let i=0;

    useEffect(() => {
        console.log(props.videos[i]);
        setvideoId(props.videos[i])

    }, [props.videos])

    const onReady = event => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    const onEnd = () => {
        setvideoId(props.videos[++i]);
    }

    const opts = {
        height: '100',
        width: '1000',
        playerVars: {
            autoplay: 1,
            playing: true,
            // https://developers.google.com/youtube/player_parameters
        },
    };

    return (
        <YouTube videoId={videoId} opts={opts} onReady={onReady} onEnd={onEnd} />
    )
}