import { boardService } from "../services/board.service.js";

export function loadData() {
    return async (dispatch) => {
        try {
            const data = await boardService.query();
            dispatch({ type: 'SET_DATA', data });
        } catch (err) {
            console.log('Cannot load boards', err);
        }
    };
}


export function loadPlaylist() {
    return async (dispatch) => {
        try {
            const playList = await boardService.queryPlaylist();
            dispatch({ type: 'SET_PLAYLIST', playList });
        } catch (err) {
            console.log('Cannot load boards', err);
        }
    };
}


export function loadRecentSongs() {
    return async (dispatch) => {
        try {
            const recentSongs = await boardService.query('RecentDB');
            dispatch({ type: 'RECENT_SONGS', recentSongs });
        } catch (err) {
            console.log('Cannot load boards', err);
        }
    };
}


export function removePlayList(playlistId) {
    return async (dispatch) => {
        try {
            await boardService.removePlaylistOfList(playlistId);
            dispatch({ type: 'REMOVE_PLAYLIST', playlistId });
        } catch (err) {
            console.log('Cannot remove board', err);
        }
    };
}

export function addPlaylistToList(playList) {
    return async (dispatch) => {
        try {
            const savedplayList = await boardService.saveToList(playList);
            console.log(savedplayList);
            dispatch({ type: 'ADD_PLAYLIST', addPlaylist: savedplayList });
        } catch (err) {
            console.log('Cannot add playList', err);
        }
    };
}

export function addRecentSong(song) {
    return async (dispatch) => {
        try {
            const savedRecentSong = await boardService.saveToRecent(song);
            console.log(savedRecentSong)
            dispatch({ type: 'SET_RECENTSONGS', addRecentSong: savedRecentSong });
        } catch (err) {
            console.log('Cannot add RECENT SONGS', err);
        }
    };
}

export function updateBoard(boardToUpdate) {
    return async (dispatch) => {
        try {
            const updatedBoard = await boardService.saveToList(boardToUpdate);
            dispatch({ type: 'SET_BOARD', board: updatedBoard });
        } catch (err) {
            console.log('Cannot update board', err);
        }
    };
}



export function setBoard(board) {
    return async (dispatch) => {
        try {
            const updatedBoard = await boardService.save(board)
            dispatch({ type: 'SET_BOARD', board: updatedBoard })

        } catch (err) {
            console.log('Couldnt update board');
        }
    };
}

export function setCurrItem(item) {
    return async (dispatch) => {
        try {
            dispatch({ type: 'SET_CURR_ITEM', item })
        } catch (err) {
            console.log('Couldnt update curr item');
        }
    }
}
export function setVideoToPlay(video) {
    return async (dispatch) => {
        try {
            dispatch({ type: 'SET_VIDEO_TOPLAY', video})
        } catch (err) {
            console.log('Couldnt play  curr video');
        }
    }
}





