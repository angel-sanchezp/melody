import { storageService } from './async-storage.service.js';
import { httpService } from './http.service';
import { utilService } from './util-service'
import { searchService } from './spotyfi.conection.js'
import moment from 'moment'



export const boardService = {
    query,
    getById,
    saveToList,
    removePlaylistOfList,
    addPlayList,
    queryPlaylist,
    saveToRecent
};

function query(db) {
    return storageService.query(db)
    // return httpService.get('board')
}
function queryPlaylist() {
    return storageService.queryList()
    // return httpService.get('board')
}


function getById(boardId) {
    return httpService.get(`board/${boardId}`)
}


function removePlaylistOfList(playlistId) {
    return storageService.remove('playListDB', playlistId)
    // return httpService.delete(`board/${boardId}`)
}



function saveToList(playlistName) {
    if (playlistName._id) {
        return httpService.put(`board/${playlistName._id}`, playlistName)
    } else {
        let newPlaylistName = {
            name: playlistName.text,
            createdAt: new Date(),
            bgColor: "black",
            createdBy: {
                _id: "u101",
                userName: "Angelica Serebnitski",
                imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1643705658/gobnb/angel1_cegsqk.jpg",
            },
            songs: []
        }
        return storageService.post(newPlaylistName);
        // return httpService.post('board/', newPlaylistName)
    }
}


function saveToRecent(song) {
    return storageService.post('RecentDB',song);
    // return httpService.post('board/', newPlaylistName)
}




async function addPlayList(song, playlistName) {
    const songToAdd = await _createPlayList(song)
    storageService.postSong(songToAdd, playlistName)
}

async function _createPlayList(song) {
    const videoDuration = await searchService.getVideoData(song.videoId)
    const songToAdd = {
        title: song.title,
        videoId: song.videoId,
        imgUrl: song.img.url,
        createDate: new Date(),
        duration: _convert_time(videoDuration)

    }
    return songToAdd



}


function _convert_time(duration) {
    var a = duration.match(/\d+/g);

    if (duration.indexOf('M') >= 0 && duration.indexOf('H') == -1 && duration.indexOf('S') == -1) {
        a = [0, a[0], 0];
    }

    if (duration.indexOf('H') >= 0 && duration.indexOf('M') == -1) {
        a = [a[0], 0, a[1]];
    }
    if (duration.indexOf('H') >= 0 && duration.indexOf('M') == -1 && duration.indexOf('S') == -1) {
        a = [a[0], 0, 0];
    }

    duration = 0;

    if (a.length == 3) {
        duration = duration + parseInt(a[0]) * 3600;
        duration = duration + parseInt(a[1]) * 60;
        duration = duration + parseInt(a[2]);
    }

    if (a.length == 2) {
        duration = duration + parseInt(a[0]) * 60;
        duration = duration + parseInt(a[1]);
    }

    if (a.length == 1) {
        duration = duration + parseInt(a[0]);
    }

    return moment.unix(duration).utc().format("mm:ss")

}