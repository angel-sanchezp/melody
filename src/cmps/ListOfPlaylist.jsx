import { useDispatch,} from 'react-redux'
import { setCurrItem, } from '../store/board.action'
import { useHistory } from "react-router-dom";




export const ListOfPlaylist = (props) => {
    const dispatch = useDispatch()
    let history = useHistory();


    const playListName = item => {
        dispatch(setCurrItem(item))
        history.push("/audiofyapp");
    }
    
    return (
        <div className="sidebar-playlist-container">
            {props.playList.length && props.playList.map((item) => (
                <div className="list-name" key={item} onClick={() => playListName(item)}>
                    <p>{item.name}</p>
                </div>
            ))}
        </div>
    )
}