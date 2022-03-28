import { useState, useEffect } from 'react'
import { YouPlayer } from './YouPlayer';
import { useDispatch, useSelector } from 'react-redux'
import { setCurrItem, addRecentSong } from '../store/board.action'
import { Link } from 'react-router-dom'


export const HomeBoard = (props) => {

    const [shownPlayer, setShownPlayer] = useState(false)
    const [videoId, setVideoId] = useState(null)
    const dispatch = useDispatch()

    const playVideo = video => {
        setVideoId(video.videoId)
        setShownPlayer(true)
        dispatch(addRecentSong(video))
    }
    
    const songsList = item => {
        dispatch(setCurrItem(item))
    }

    return (
        <div className="home-board-container">

            <div className="recntly-played">
                <h1>Recently played</h1>
                <div className="list-cards">
                {props.recentSongs.length && props.recentSongs.slice(0, 4).map((item) => (
                          <div className="song-container" key={item} onClick={() =>playVideo(item.videoId)} >
                            <div className="img-container" style={{ width: "100%", height: "80%" }}>
                                <img src={item.imgUrl} style={{ width: "100%", height: "188px" }} alt="" />
                            </div>
                            <div className="img-title">
                                <p>{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="top-mixes">
                <h1>top-mixes</h1>
                <div className="list-cards">
                 {props.data.length && props.data[3].mix.slice(0, 4).map((item) => (
                          <Link to ='./audiolist'> <div className="song-container" key={item} onClick={() => songsList(item)} >
                            <div className="img-container" style={{ width: "100%", height: "80%" }}>
                                <img src={item.imgUrl} style={{ width: "100%", height: "188px" }} alt="" />
                            </div>
                            <div className="img-title">
                                <p>{item.name}</p>
                            </div>
                        </div></Link>
                    ))}
                </div>
            </div>
            <div className="radio">
                <h1>Recommended radio</h1>
                <div className="list-cards">
                    {props.data.length && props.data[2].Artist.slice(0, 4).map((song) => (
                       <Link to ='./audiolist'> <div className="song-container" key={song}>
                            <div className="img-container" style={{ width: "100%", height: "80%" }}>
                                <img src={song.imgUrl} style={{ width: "100%", height: "188px" }} alt="" />
                            </div>
                            <div className="img-title">
                                <p>{song.name}</p>
                            </div>
                        </div></Link>
                    ))}
                </div>
            </div>
            <div className="hits">
                <h1>Biggest hits</h1>
                <div className="list-cards">
                    {props.data.length && props.data[0].songs.slice(0, 4).map((song) => (
                         <div className="song-container" key={song} onClick={() => playVideo(song)}>
                            <div className="img-container" style={{ width: "100%", height: "80%" }}>
                                <img src={song.imgUrl} style={{ width: "100%", height: "188px" }} alt="" />
                            </div>
                            <div className="img-title">
                                <p>{song.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="best-artists">
                <h1>Best artist</h1>
                <div className="list-cards">
                    {props.data.length && props.data[1].Artist.slice(0, 4).map((art) => (
                        <Link to ='./audiolist'> <div className="song-container" key={art}>
                            <div className="img-container">
                                <img src={art.imgUrl} style={{ width: "100%", height: "188px" }} alt="" />
                            </div>
                            <div className="img-title">
                                <p>{art.name}</p>
                            </div>
                        </div></Link>
                    ))}
                </div>
            </div>

            <div className="player-song" style={{marginLeft:"0%"}}>
                {shownPlayer && <YouPlayer videoId={videoId} />}
            </div>


        </div>
    )
}