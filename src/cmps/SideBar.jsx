import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListOfPlaylist } from './ListOfPlaylist'
import { loadPlaylist } from '../store/board.action'


export const SideBar = ({ createPL }) => {
    const { playList } = useSelector(state => state.boardModule)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(loadPlaylist())

    }, [])

    return (
        <div className="sidebar-container">
            <Link to='/'><div className='side-nav-logo'>
                <img className='img-logo' src="imgs/icon/melody.png" alt="" style={{ width: "200%" }} />
            </div></Link>
            <Link to='/audiofyapp'><div className="side-nav">
                <img className="img-nav" src="imgs/icon/home-icon.png" />
                Home
            </div></Link>
            <Link to='./Search'> <div className="side-nav">
                    <img className="img-nav" src="imgs/icon/search-icon.png" />
                    Search
                </div> </Link>
            <div className="side-nav">
                <img className="img-nav" src="imgs/icon/library-icon.png" />
                Your Library
            </div>
            <div className="side-nav" onClick={createPL}>
                <img className="img-nav" src="imgs/icon/create-icon.png" />
                Create Playlist
            </div>
            <div className="side-nav">
                <img className="img-nav" src="imgs/icon/liked-icon.png" />
                Liked Songs
            </div>

            {playList && <ListOfPlaylist playList={playList} />}

        </div >
    )
}