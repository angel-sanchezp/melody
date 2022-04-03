const initialState = {
    data: [],
    currStation: null,
    playList: [],
    recentSongs: [],
    videoToPlay: [],
    // listToPlay:[]

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
        case 'SET_RECENTSONGS':
            newState = { ...state, recentSongs: [...state.recentSongs, action.addRecentSong] };
            break;
        case 'SET_BOARD':
            newState = { ...state, board: { ...action.board } };
            break;
        case 'SET_CURR_ITEM':
            newState = { currStation: action.item }
            break;
        case 'SET_VIDEO_TOPLAY':
                newState = { ...state, videoToPlay: [...action.video] };
            // newState = { videoToPlay: action.video }
            break;
        // case 'SET_LIST_TOPLAY':
        //     newState = { ...state, listToPlay: [...action.listToPlay] };
    }
    return newState;
}