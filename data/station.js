// Guidlines:
// *. currently no better API than youtube...
// *. no need for song store, it is part of the station

// Pages, Cmps:
// HomePage render 2 stations => link StationDetails
// Add station
// AppPlayer (initially rendered at StationDetails, later in footer)
//   Smart component - connected to store:
//   -. stationModule.currentlyPlayingUrl
//   -. stationModule.dispatch(nextSong)
// Filtering
// StationList, StationPreview
// StationDetails - Make it amazing
// D & D Later....

// server.js
// Guidlines:
// *. currently no better API than youtube...
// *. no need for song store, it is part of the station
// Pages, Cmps:
// HomePage render 2 stations => link StationDetails
// Add station
// AppPlayer (initially rendered at StationDetails, later in footer)
//   Smart component - connected to store:
//   -. stationModule.currentlyPlayingUrl
//   -. stationModule.dispatch(nextSong)
// Filtering
// StationList, StationPreview
// StationDetails - Make it amazing
// D & D Later....
// server.js

// const clientId=288942f22d7a48f68b7f4989566b27ea


var stations = [
  {
    _id: "5cksxjas89xjsa8xjsa8jxs09",
    name: "Hits",
    createdAt: 1541652422,
    createdBy: {
      _id: "u101",
      userName: "Angelica Serebnitski",
      imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1643705658/gobnb/angel1_cegsqk.jpg",
    },
    likedByUsers: [
      { _id: "u101", userName: "Puki Ben David", imgUrl: "img.png" },
      { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
    ],
    songs: [
      {
        id: "s1001",
        title: "Eye of the tiger",
        videoId: "pK060iUFWXg",
        url: "https://www.youtube.com/watch?v=pK060iUFWXg",
        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1646896191/audiofy/maxresdefault_hlfvnf.jpg",
        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
        addedAt: 162521765262,
        tags: ["Regetton", "Urban"],
        artist: "Maluma",
        album: "Hawai",
        duration: 60 * 4 + 30,
      },
      {
        id: "mUkfiLjooxs",
        title: "Havana",
        videoId: "HCjNJDNzw8Y",
        url: "https://www.youtube.com/watch?v=HCjNJDNzw8Y",
        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1646896976/audiofy/Havana__28featuring_Young_Thug_29__28Official_Single_Cover_29_by_Camila_Cabello_bpc0mx.png",
        addedBy: { _id: "u101", userName: "Puki Ben David", imgUrl: "img.png" },
        addedAt: 162521765262,
        tags: ["Urban", "Happy"],
        artist: "Camila",
        album: "Havana",
        duration: 60 * 3 + 10,
      },
      {
        id: "mUkfiLhwwxs",
        title: "אמן על הילדים שלי",
        videoId: "Z1ODZmoyNNc",
        url: "https://www.youtube.com/watch?v=Z1ODZmoyNNc",
        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1646897559/audiofy/ab67616d0000b273c2230576b45601d076442889_cty50p.jpg",
        addedAt: 162521765262,
        tags: ["Made for you", "Happy"],
        artist: "איזון",
        album: "Mix",
        duration: 60 * 5 + 10,
      },
      {
        id: "mUkfiLhwwxs",
        title: "Imagine",
        videoId: "v27CEFE02Hs",
        url: "https://www.youtube.com/watch?v=v27CEFE02Hs",
        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1646897952/audiofy/c9791c14f0e06788328ca1e464a3b58a_tkjm8a.jpg",
        addedBy: { _id: "u101", userName: "Puki Ben David", imgUrl: "img.png" },
        addedAt: 162521765262,
        tags: ["Made for you", "Classic"],
        artist: "Beatles",
        album: "Imagine",
        duration: 60 * 8 + 10,
      },
      {
        id: "mUkfiLhwwxs",
        title: "How Deep Is Your Love",
        videoId: "pFg0FCx4FGs",
        url: "https://www.youtube.com/watch?v=pFg0FCx4FGs",
        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1646898215/audiofy/bee-gees-stayin-alive_mxwb0l.jpg",
        addedBy: { _id: "u101", userName: "Puki Ben David", imgUrl: "img.png" },
        addedAt: 162521765262,
        tags: ["Made for you", "Classic"],
        artist: "B-GEES",
        album: "Stayin' a Live",
        duration: 60 * 4 + 10,
      },
      {
        id: "mUkfiLhwwxs",
        title: "We Will Rock You",
        videoId: "-tJYN-eG1zk",
        url: "https://www.youtube.com/watch?v=-tJYN-eG1zk",
        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1646898457/audiofy/SharedImage-8021_esx7rp.jpg",
        addedBy: { _id: "u101", userName: "Puki Ben David", imgUrl: "img.png" },
        addedAt: 162521765262,
        tags: ["Made for you", "Classic"],
        artist: "Queen",
        album: "News of the World",
        duration: 60 * 7 + 10,
      },
    ],
  },
  {
    _id: "5cksxjas89xjsa8xjsa8jxs09",
    name: "Artist",
    createdAt: 1541652422,
    createdBy: {
      _id: "u101",
      userName: "Angelica Serebnitski",
      imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1643705658/gobnb/angel1_cegsqk.jpg",
    },
    likedByUsers: [
      { _id: "u101", userName: "Puki Ben David", imgUrl: "img.png" },
      { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
    ],
    Artist: [
      {
        id: "s1001",
        name: "Ricardo Arjona",
        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1646899119/audiofy/artist/arjona_cadrbi.jpg",
        addedBy: { _id: "u102", userName: "Angelica Serebnitski", imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1643705658/gobnb/angel1_cegsqk.jpg" },
        addedAt: 162521765262,
      },
      {
        id: "s1001",
        name: "Alejandro Saenz",
        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1646899498/audiofy/artist/37i9dQZF1DZ06evO3drJ2U-default_qcsror.jpg",
        addedBy: { _id: "u102", userName: "Angelica Serebnitski", imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1643705658/gobnb/angel1_cegsqk.jpg" },
        addedAt: 162521765262,
      },
      {
        id: "s1001",
        name: "Ishay Ribo",
        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1646899603/audiofy/artist/37i9dQZF1DZ06evO2ihcD6-default_brwkzr.jpg",
        addedBy: { _id: "u102", userName: "Angelica Serebnitski", imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1643705658/gobnb/angel1_cegsqk.jpg" },
        addedAt: 162521765262,
      },
      {
        id: "s1001",
        name: "Idan Raichel",
        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1646899785/audiofy/artist/37i9dQZF1DZ06evO3ku8JP-default_v1lazn.jpg",
        addedBy: { _id: "u102", userName: "Angelica Serebnitski", imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1643705658/gobnb/angel1_cegsqk.jpg" },
        addedAt: 162521765262,
      },
      {
        id: "s1001",
        name: "Evanescence",
        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1646900006/audiofy/artist/37i9dQZF1DZ06evO3aj2q4-large_d0ydvc.jpg",
        addedBy: { _id: "u102", userName: "Angelica Serebnitski", imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1643705658/gobnb/angel1_cegsqk.jpg" },
        addedAt: 162521765262,
      },
      {
        id: "s1001",
        name: "Coldplay",
        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1646900139/audiofy/artist/ab67706f00000003aa9142d38243f6211304aa22_i29bpe.jpg",
        addedBy: { _id: "u102", userName: "Angelica Serebnitski", imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1643705658/gobnb/angel1_cegsqk.jpg" },
        addedAt: 162521765262,
      },

    ],
  }
]

const users = [
  {
    _id: "u101",
    userName: "Angelica Serebnitski",
    password: "1234",
    mail: "angel@gmail.com",
    imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1643705658/gobnb/angel1_cegsqk.jpg",
    likedSongs: [],
    likedStation: []
  },
  {
    _id: "u102",
    userName: "Muki Ram",
    password: "5678",
    mail: "muki@gmail.com",
    imgUrl: "img2.png",
    likedSongs: [],
    likedStation: []
  },
];

var gTags = [
  "Funk",
  "Happy",
  "Made for you",
  "Charts",
  "New releases",
  "Discover",
  "Concert",
  "HipHop",
  "Pop",
  "Country",
  "Rock",
  "Latin",
  "Workout",
  "Punk",
  "R&B",
  "Welness",
  "Mood",
  "Indie",
  "Sleep",
  "Mexican",
  "Travel",
  "Chill",
  "Metal",
  "Classics",
  "Kpop",
];


