import { useState, useEffect } from "react"
import { useSelector } from 'react-redux'

import { SideBar } from "../cmps/SideBar"
import { YouPlayer } from '../cmps/YouPlayer';
import { CreatePlaylist } from '../cmps/CreatePlaylist'



import { searchService } from '../services/spotyfi.conection.js'
import { boardService } from "../services/board.service"

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'he'


export const Search = ({ props }) => {
    const { playList } = useSelector(state => state.boardModule)
    const [searchBy, setSearchBy] = useState({ text: '' })
    const [videos, setVideos] = useState([])
    const [isListening, setIsListening] = useState(false)
    const [islngChange, setIsLNGChange] = useState(false)
    const [showingModal, setShownModal] = useState(false)
    const [selectedVideo, setSelectedVideo] = useState(null)
    const [shownPlayer, setShownPlayer] = useState(false)
    const [videoId, setVideoId] = useState(null)
    const [shownCreatePl, setShownCreatePl] = useState(false)


    useEffect(() => {
        handleListen()
        lngua()
    }, [isListening], islngChange)

    const onSearchSong = ({ target }) => {
        const field = target.name
        const value = target.value
        setSearchBy(prevSearchBy => ({ ...prevSearchBy, [field]: value }))
    }

    const lngua = () => {
        if (islngChange) {
            console.log(mic.lang);
            mic.lang = (mic.lang == 'en-US') ? 'he' : 'en-US'
        }

        console.log(mic.lang);
    }

    const createPL = () => {
        setShownCreatePl(!shownCreatePl);
    }


    const getVideos = async (e) => {
        if (e) e.preventDefault();
        const videos = await searchService.getVideos(searchBy)
        setVideos(videos)
    }
    const selectedSong = async (song) => {
        setSelectedVideo(song);
        shownModal()
    }

    const shownModal = async () => {
        setShownModal(!showingModal)
    }

    const addToPlayList = async (toPlayList) => {
        boardService.addPlayList(selectedVideo, toPlayList)
    }

    const playVideo = videoId => {
        setVideoId(videoId)
        setShownPlayer(true)
    }

    const handleListen = () => {
        if (isListening) {
            mic.start()
            mic.onend = () => {
                console.log('continue..')
                mic.start()
            }
        } else {
            mic.stop()
            mic.onend = () => {
                console.log('Stopped Mic on Click')
            }
        }
        mic.onstart = () => {
            console.log('Mics on')
        }

        mic.onresult = event => {
            const transcript = Array.from(event.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('')
            console.log(transcript)
            setSearchBy(prevSearchBy => ({ ...prevSearchBy, ['text']: transcript }))
            mic.onerror = event => {
                console.log(event.error)
            }
        }
    }

    return (
        <div className="search-container">
            <SideBar />
            <form className="search-input flex" onSubmit={getVideos}>
                <button onClick={() => setIsLNGChange(prevState => !prevState)}>🌐</button>
                <button onClick={() => setIsListening(prevState => !prevState)}>🎙️</button>
                <input type="text" onChange={onSearchSong} value={searchBy.text} name="text" className="input-search" placeholder="songs, artist" />
                <div className="div-svg">
                    <span className="span-svg">
                        <svg role="img" height="24" width="24" class="Svg-sc-1bi12j5-0 hDgDGI mOLTJ2mxkzHJj6Y9_na_" aria-hidden="true" viewBox="0 0 24 24">
                            <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z">
                            </path>
                        </svg>
                    </span>
                </div>
                <button className="btn-search">search</button>
            </form>

            <div className="list-cards">
                {videos.length && videos.map((video, index) => (
                    <div className="song-container" key={index}>
                        <div className="img-container" style={{ width: "100%", height: "80%" }} onClick={() => playVideo(video.videoId)}>
                            <img src={video.img.url} style={{ width: "100%", height: "188px" }} alt="" />
                        </div>
                        <div className="img-title flex">
                            <p>{video.title}</p>
                            <button onClick={() => selectedSong(video)}><img src="imgs/icon/create-icon.png" style={{ width: "20px", height: "20px" }} /></button>
                        </div>
                    </div>
                ))}
            </div>

            {showingModal && <div className="modal-option">
                <button className="exit-btn" onClick={shownModal}>x</button>
                <h3>Choose Playlist:</h3>
                <ul className="clean-list">
                    {playList.map((li) => (
                        <li key={li} onClick={() => addToPlayList(li.name)}>{li.name}</li>
                    ))}
                </ul>
                <button onClick={createPL}><img className="img-nav" src="imgs/icon/create-icon.png" style={{ width: " 50%" }} /></button>

            </div>}

            <div className="player-song" style={{ marginLeft: "22%" }}>
                {shownPlayer && <YouPlayer videoId={videoId} />}
            </div>

            {shownCreatePl && (<CreatePlaylist createPL={createPL} />)}


        </div>
    )
}

// style={{ marginLeft: "576px", marginTop:"-591px"}}