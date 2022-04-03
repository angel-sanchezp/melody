'use strict'
import axios from 'axios'
// var axios = Axios.create({
//     withCredentials: true
// })

// AIzaSyByWbZD4HLmXBOrrVmrUCadiv5EX5ejCOk
// AIzaSyDRUNHfFzHWly8GIUMa8EGKGxweJMPu2ng
const YT_KEY = 'AIzaSyADpC4es4xOY6lhN_xNSdm5PsK1RQNYxiI';
const YT_DataKey='AIzaSyDSwUsNDqAs4bckr02YfQfA6G-wed_6yWY';
const KEY = 'SearchsDB';


export const searchService = {
  getVideos,
  getVideoData

}

async function getVideos(value) {
  if (value.length) return
  // const searchs = localStorage.getItem(KEY)|| [];
  // console.log(searchs);
  // if (searchs.length) {
  //   const exsist = searchs.includes(value.text);
  //   console.log('exist',exsist);
  //   if (exsist) return searchs
  //   searchs.push(value)

  // }else{
  //   searchs.push(value)
  // }

  const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${value.text}&key=${YT_KEY}&maxResults=12`)
  console.log(data);
  const videos = data.items.map(video => ({
    value: value.text,
    videoId: video.id.videoId,
    title: video.snippet.title,
    img: {
      url: video.snippet.thumbnails.default.url,
      width: video.snippet.thumbnails.default.width,
      heigth: video.snippet.thumbnails.default.heigth,
    },

  }))
  localStorage.setItem(KEY, JSON.stringify(videos));
  return videos



}


// wikipedia details
// function getDetails(value = 'Beatles') {
//   return axios.get(`https://en.wikipedia.org/w/api.php?&origin=*&action=query&list=search&srsearch=${value}&format=json`)
//     .then(res => res.data)

// }

async function getVideoData(videoId){
  const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoId}&key=${YT_DataKey}`)
  return data.items[0].contentDetails.duration
}


