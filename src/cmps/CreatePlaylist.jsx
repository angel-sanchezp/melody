import React, { useState } from 'react'
import { useDispatch,} from 'react-redux'
import { addPlaylistToList} from '../store/board.action'
import { useHistory } from "react-router-dom";


export const CreatePlaylist = ({createPL}) => {
    const [namePlaylist, setNamePlaylist] = useState({ text: '' })
    const dispatch = useDispatch()

    const onNamePlaylist = ({ target }) => {
        const field = target.name
        const value = target.value
        setNamePlaylist(prevNamePlaylist => ({ ...prevNamePlaylist, [field]: value }))
    }


    const addPlayList=(e)=>{
        if (e) e.preventDefault();
        dispatch(addPlaylistToList(namePlaylist))
        createPL()
    }

    return (
        <section className="create-pl-modal">
            <form className="create-input-container" onSubmit={addPlayList}>
                <button className='btn-close-createpl' onClick={createPL}>x</button>
                <input onChange={onNamePlaylist} name="text" type="text" className="playlist-input" placeholder='playlist name'/>
                <button className='btn-createpl'>Create</button>
            </form>
        </section>
    )
}