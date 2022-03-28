const initialState = {
    data: [],
    currStation:null,
    playList:[],
    recentSongs:[],
    
};

export function boardReducer(state = initialState, action) {
    var newState = state;
    switch (action.type) {
        case 'SET_DATA':
            newState = { ...state, data: [...action.data] };
            break;
        case 'SET_PLAYLIST':
            newState = { ...state, playList: [...action.playList] };
            break;
        case 'RECENT_SONGS':
            newState = { ...state, recentSongs: [...action.recentSongs] };
            break;
        case 'REMOVE_PLAYLIST':
            newState = { ...state, playList: state.playList.filter(playlist => playlist._id !== action.playlistId) };
            break;
        case 'ADD_PLAYLIST':
            newState = { ...state, playList: [...state.playList, action.addPlaylist] };
            break;
        case 'PUSH_RECENTSONGS':
            newState = { ...state, recentSongs: [...state.recentSongs, action.addRecentSong] };
            break;
        case 'SET_BOARD':
            newState = { ...state, board: {...action.board }  };
            break;
            case 'SET_CURR_ITEM':
                newState ={currStation: action.item}
    }
    return newState;
}