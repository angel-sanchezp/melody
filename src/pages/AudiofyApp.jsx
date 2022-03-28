import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import { HomeBoard } from '../cmps/HomeBoard'
import { SideBar } from '../cmps/SideBar'
import { loadData, loadRecentSongs } from '../store/board.action'
import { CreatePlaylist } from '../cmps/CreatePlaylist'



export const AudiofyApp = (props) => {
    const { data } = useSelector(state => state.boardModule)
    const { recentSongs } = useSelector(state => state.boardModule)
    const [shownCreatePl, setShownCreatePl] = useState(false)


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadData())
        dispatch(loadRecentSongs())
    }, [])

    const createPL = () => {
        setShownCreatePl(!shownCreatePl);
    }


    return (
        <section className="audiofy-app-container">
            <SideBar createPL={createPL} />
            {data && recentSongs && <HomeBoard data={data} recentSongs={recentSongs} />}
            {shownCreatePl && (<CreatePlaylist createPL={createPL} />)}


        </section>
    )
}


