import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removePlayList } from '../store/board.action'
import { useHistory } from "react-router-dom";
import { addRecentSong, setVideoToPlay} from '../store/board.action'

import { SideBar } from './SideBar';

export const AudioList = (props) => {
    const { currStation } = useSelector(state => state.boardModule)

    const dispatch = useDispatch()
    let history = useHistory();

    useEffect(() => {
        const videoIdList = currStation.songs.map(song => song.videoId)
        dispatch(setVideoToPlay(videoIdList))



    }, [currStation])


    const playVideo = video => {
        const list=[]
        list.push(video.videoId)
        dispatch(setVideoToPlay(list))
        dispatch(addRecentSong(video))
    }

    const removePlayListOfList = playlistId => {
        dispatch(removePlayList(playlistId))
        history.push("/audiofyapp");

    }

    return (
        <div className="list-container">
            <SideBar />

            <div className='hero-container flex' style={{ backgroundColor: currStation.bgColor }}>
                {currStation.imgUrl ? <img src={currStation.imgUrl} style={{ width: "50%", height: "400px" }} />
                    : <img src="https://res.cloudinary.com/angelsa/image/upload/v1647714950/audiofy/mix/Audiofly_header_rmycna.jpg" style={{ width: "50%", height: "400px" }} />}
                <div className="hero-details">
                    <h1>{currStation.name}</h1>
                    {currStation.singers ? <span>{currStation.singers}</span> : <span>your favorite songs</span>}
                    <p>{currStation.totalSongs}songs -audiofy</p>
                    <button className="delete-playList" onClick={() => removePlayListOfList(currStation._id)}>delete</button>
                </div>
            </div>
            {currStation.songs.map((song, index) => (
                <div className="song-container" key={index} onClick={() => playVideo(song)}>
                    <div className="song-details flex">
                        <p className="index">{index + 1}</p>
                        <div className="flex align-center">
                            <img src={song.imgUrl} className="song-img" />
                            <p className="song-title">{song.title}</p>
                        </div>
                        <p className="song-artist">{song.artist}</p>
                        <p className="song-time">{song.duration}</p>
                    </div>
                </div>
            ))}


        </div>
    )
}