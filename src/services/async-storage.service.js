import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom/cjs/react-dom.development";
import { utilService } from "./util-service.js";

const STORAGE_KEY = 'StationsDB';
const KEY='playListDB'

export const storageService = {
    query,
    queryList,
    remove,
    get,
    post,
    postSong,
    put,

};

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
                imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647004255/audiofy/ab67616d0000b2730c912949e9f848cc95797b27_lfxmzl.jpg",
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
                bgColor:"#f3b65c",
                totalSongs:10,
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
    },
    {
        _id: "5cksxjas89xjsa8xjsa8jxs09",
        name: "Recomended",
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
                name: "Adele",
                imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1646947001/audiofy/recomended/cgnvloktrgkw4fyx4c6i.jpg",
                addedBy: { _id: "u102", userName: "Angelica Serebnitski", imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1643705658/gobnb/angel1_cegsqk.jpg" },
                addedAt: 162521765262,
            },
            {
                id: "s1001",
                name: "Snoop Dog",
                imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1646947216/audiofy/recomended/artworks-OoMXrgaGQyUs-0-t500x500_m7odmq.jpg",
                addedBy: { _id: "u102", userName: "Angelica Serebnitski", imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1643705658/gobnb/angel1_cegsqk.jpg" },
                addedAt: 162521765262,
            },
            {
                id: "s1001",
                name: "Omer Adam",
                imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1646947309/audiofy/recomended/Omer_Adam_CD_-_After_all_these_years_-_Israel_Music_800x_mg7wxr.jpg",
                addedBy: { _id: "u102", userName: "Angelica Serebnitski", imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1643705658/gobnb/angel1_cegsqk.jpg" },
                addedAt: 162521765262,
            },
            {
                id: "s1001",
                name: "Natan Gushen",
                imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1646947390/audiofy/recomended/ab67616d0000b2736bc34ad7ef9fab7cc3cb2a97_oumocv.jpg",
                addedBy: { _id: "u102", userName: "Angelica Serebnitski", imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1643705658/gobnb/angel1_cegsqk.jpg" },
                addedAt: 162521765262,
            },
            {
                id: "s1001",
                name: "Black eye Peas",
                imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1646947523/audiofy/recomended/Black-Eyed-Peas-Album-Art_duemoj.jpg",
                addedBy: { _id: "u102", userName: "Angelica Serebnitski", imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1643705658/gobnb/angel1_cegsqk.jpg" },
                addedAt: 162521765262,
            },
            {
                id: "s1001",
                name: "Pitbull",
                imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1646947619/audiofy/recomended/3666224_uphw9g.jpg",
                addedBy: { _id: "u102", userName: "Angelica Serebnitski", imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1643705658/gobnb/angel1_cegsqk.jpg" },
                addedAt: 162521765262,
            },

        ],
    },
    {
        _id: "5cksxjas89xjsa8xjsa8jxs09",
        name: "Mix",
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
        mix: [
            {
                id: "s1001",
                name: "Mix Merengue",
                imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1646948002/audiofy/mix/en_sjziyt.jpg",
                addedBy: { _id: "u102", userName: "Angelica Serebnitski", imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1643705658/gobnb/angel1_cegsqk.jpg" },
                addedAt: 162521765262,
                singers:"Olga Tanon, Juan Luis Guerra, Eddie Herrera...",
                bgColor:"#b0d8b5",
                totalSongs:10,
                songs:[
                    {
                        id: "s1001",
                        title: "La Bilirubina",
                        videoId: "cV7Ad4ZIJTY",
                        url: "https://www.youtube.com/watch?v=cV7Ad4ZIJTY",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647080960/audiofy/artist/600x600_zidcxt.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["Merengue"],
                        artist: "Juan Luis Guerra",
                        album: "",
                        duration: 60 * 4 + 30,
                    },
                    {
                        id: "s1001",
                        title: "Para Siempre",
                        videoId: "4oPECYFqIRQ",
                        url: "https://www.youtube.com/watch?v=4oPECYFqIRQ",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647081061/audiofy/artist/640x640_ugfexk.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["Merengue"],
                        artist: "Eddie Herera",
                        album: "",
                        duration: 60 * 4 + 30,
                    },
                    {
                        id: "s1001",
                        title: "Si me dejas no vale",
                        videoId: "afidb97d4wc",
                        url: "https://www.youtube.com/watch?v=afidb97d4wc",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647081155/audiofy/artist/hqdefault_w6qdae.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["Merengue"],
                        artist: "La Linea",
                        album: "",
                        duration: 60 * 4 + 30,
                    },
                    {
                        id: "s1001",
                        title: "Muchacho Malo",
                        videoId: "-cI_d6kRF1M",
                        url: "https://www.youtube.com/watch?v=-cI_d6kRF1M",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647080872/audiofy/artist/ab67616d0000b273ff720a17576697e8e7a3041d_zfvc7f.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["Merengue"],
                        artist: "Olga Tanon",
                        album: "",
                        duration: 60 * 4 + 30,
                    },
                    {
                        id: "s1001",
                        title: "Precencia de tu Amor",
                        videoId: "dcvHmP1MTG4",
                        url: "https://www.youtube.com/watch?v=dcvHmP1MTG4",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647080872/audiofy/artist/ab67616d0000b273ff720a17576697e8e7a3041d_zfvc7f.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["Merengue"],
                        artist: "Olga Tanon",
                        album: "",
                        duration: 60 * 4 + 30,
                    },
                    {
                        id: "s1001",
                        title: "El Frio de tu Adios",
                        videoId: "zIr2GhHkm84",
                        url: "https://www.youtube.com/watch?v=zIr2GhHkm84",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647080872/audiofy/artist/ab67616d0000b273ff720a17576697e8e7a3041d_zfvc7f.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["Merengue"],
                        artist: "Olga Tanon",
                        album: "",
                        duration: 60 * 4 + 30,
                    },
                    {
                        id: "s1001",
                        title: "Las Abispas",
                        videoId: "1cuYIHLk4lI",
                        url: "https://www.youtube.com/watch?v=1cuYIHLk4lI",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647080960/audiofy/artist/600x600_zidcxt.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["Merengue"],
                        artist: "Juan Luis Guerra",
                        album: "",
                        duration: 60 * 4 + 30,
                    },
                    {
                        id: "s1001",
                        title: "La Bicicleta",
                        videoId: "xhpJqdZgF5U",
                        url: "https://www.youtube.com/watch?v=xhpJqdZgF5U",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647080960/audiofy/artist/600x600_zidcxt.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["Merengue"],
                        artist: "Juan Luis Guerra",
                        album: "",
                        duration: 60 * 4 + 30,
                    },
                    {
                        id: "s1001",
                        title: "25 Horas al Dia",
                        videoId: "0t5W8F6C9mk",
                        url: "https://www.youtube.com/watch?v=0t5W8F6C9mk",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647080960/audiofy/artist/600x600_zidcxt.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["Merengue"],
                        artist: "Juan Luis Guerra",
                        album: "",
                        duration: 60 * 4 + 30,
                    },
                    {
                        id: "s1001",
                        title: "visa para un sueno",
                        videoId: "py5lONtuw2A",
                        url: "https://www.youtube.com/watch?v=py5lONtuw2A",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647080960/audiofy/artist/600x600_zidcxt.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["Merengue"],
                        artist: "Juan Luis Guerra",
                        album: "",
                        duration: 60 * 4 + 30,
                    },

                ]
            },
            {
                id: "s1001",
                name: "Salsa Mix",
                imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1646948237/audiofy/mix/en_dooxzx.jpg",
                addedBy: { _id: "u102", userName: "Angelica Serebnitski", imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1643705658/gobnb/angel1_cegsqk.jpg" },
                addedAt: 162521765262,
                singers:"Ruben Blades, Marc Anthony, Nsamble...",
                bgColor:"#e6b7bd",
                totalSongs:10,
                songs:[
                    {
                        id: "s1001",
                        title: "Pequenas cosas",
                        videoId: "MApDfslMljg",
                        url: "https://www.youtube.com/watch?v=MApDfslMljg",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647099418/audiofy/artist/ab67616d0000b2738aa9a2d04a8542a3ced01ab8_s1tq7t.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["Salsa"],
                        artist: "Wille Gonzales",
                        album: "",
                        duration: "5:07",
                    },
                    {
                        id: "s1001",
                        title: "Un Monton de Estrellas",
                        videoId: "f9PRHb-PLBw",
                        url: "https://www.youtube.com/watch?v=f9PRHb-PLBw",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647099611/audiofy/artist/478-2-polo_acmfki.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["Salsa"],
                        artist: "Polo Montanez",
                        album: "",
                        duration: "6:04",
                    },
                    {
                        id: "s1001",
                        title: "Te va a Doler",
                        videoId: "l8ngSNwWMzs",
                        url: "https://www.youtube.com/watch?v=l8ngSNwWMzs",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647101324/audiofy/artist/R-15553701-1593519880-6074.jpeg_pmx59q.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["Salsa"],
                        artist: "Maelo Ruiz",
                        album: "",
                        duration:"4:52",
                    },
                    {
                        id: "s1001",
                        title: "Me vas a extranar",
                        videoId: "ssj-Ddieekw",
                        url: "https://www.youtube.com/watch?v=ssj-Ddieekw",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647099862/audiofy/artist/nsamble-lo-mejor-y-lo-nuevo-de-nsamble-cover-art_at6bss.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["Salsa"],
                        artist: "Nsamble",
                        album: "",
                        duration: "5:05",
                    },
                    {
                        id: "s1001",
                        title: "Ese Hombre",
                        videoId: "ZMUUO6rx0Vk",
                        url: "https://www.youtube.com/watch?v=ZMUUO6rx0Vk",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647100000/audiofy/artist/d013e5c57220aacd0901834baaff2534_hjlonx.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["Salsa"],
                        artist: "Los Barraza",
                        album: "",
                        duration: "4:36",
                    },
                    {
                        id: "s1001",
                        title: "Probablemente",
                        videoId: "ME92E6J8ubE",
                        url: "https://www.youtube.com/watch?v=ME92E6J8ubE",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647100189/audiofy/artist/ab67616d0000b27330d118ab1dd89df8af5e7305_nwn9hp.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["Salsa"],
                        artist: "Daniela Darcourt",
                        album: "",
                        duration: "5:17",
                    },
                    {
                        id: "s1001",
                        title: "Y hubo alguien",
                        videoId: "g4S3jUtqcyM",
                        url: "https://www.youtube.com/watch?v=g4S3jUtqcyM",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647100334/audiofy/artist/ab67616d0000b27321be16e998effa9f1f4b63a9_f9osyd.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["Salsa"],
                        artist: "Marc Anthony",
                        album: "",
                        duration: "6:28",
                    },
                    {
                        id: "s1001",
                        title: "Mi Media Mitad",
                        videoId: "wQUcaSEuob0",
                        url: "https://www.youtube.com/watch?v=wQUcaSEuob0",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647100500/audiofy/artist/ab67616d0000b2736e14d46d67b68c2383f00e6d_kykgab.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["Salsa"],
                        artist: "Rey Ruiz",
                        album: "",
                        duration: "4:53",
                    },
                    {
                        id: "s1001",
                        title: "Dile a Ella",
                        videoId: "Ijkao2n_UdM",
                        url: "https://www.youtube.com/watch?v=Ijkao2n_UdM",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647100678/audiofy/artist/maxresdefault_fapbnb.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["Salsa"],
                        artist: "Vitor Manuel",
                        album: "",
                        duration: "5:07",
                    },
                    {
                        id: "s1001",
                        title: "Pedro Navaja",
                        videoId: "ACD_wuxuMzg",
                        url: "https://www.youtube.com/watch?v=ACD_wuxuMzg",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647100825/audiofy/artist/RBLG_n_epm3jg.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["Salsa"],
                        artist: "Ruben Blades",
                        album: "",
                        duration: "7:53",
                    },

                ]
            },
            {
                id: "s1001",
                name: "Romantica mix",
                imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1646948729/audiofy/mix/en_phq3kp.jpg",
                addedBy: { _id: "u102", userName: "Angelica Serebnitski", imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1643705658/gobnb/angel1_cegsqk.jpg" },
                addedAt: 162521765262,
                singers:"Alejandro Seanz, Montaner, Hash...",
                bgColor:"#e7b8be",
                totalSongs:10,
                songs:[
                    {
                        id: "s1001",
                        title: "Fuerza del Corazon",
                        videoId: "K8CS9v6Fa9g",
                        url: "https://www.youtube.com/watch?v=K8CS9v6Fa9g",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647176441/audiofy/artist/32881748_sa_y0mryq.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["Romantica"],
                        artist: "Alejandro Saenz",
                        album: "",
                        duration: "4:57",
                    },
                    {
                        id: "s1001",
                        title: "Hasta que me Olvides",
                        videoId: "kCv8ipMi-BE",
                        url: "https://www.youtube.com/watch?v=kCv8ipMi-BE",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647176729/audiofy/artist/cddybc92hvkfovfn8cho.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["Romantica"],
                        artist: "Luis Miguel",
                        album: "",
                        duration: "4:41",
                    },
                    {
                        id: "s1001",
                        title: "Mi historia entre tus dedos",
                        videoId: "MLGmKzv3taY",
                        url: "https://www.youtube.com/watch?v=MLGmKzv3taY",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647176886/audiofy/artist/0060254722001_600_v0bgpm.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["Romantica"],
                        artist: "GianLuca Grignani",
                        album: "",
                        duration:"5:09",
                    },
                    {
                        id: "s1001",
                        title: "Mientes tan Bien",
                        videoId: "oy3TPpyY-Jc",
                        url: "https://www.youtube.com/watch?v=oy3TPpyY-Jc",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647176992/audiofy/artist/63084342-652e-49ad-a557-a39a9bf1782e_503671_CUSTOM_o35ikd.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["Romantica"],
                        artist: "Sin Bandera",
                        album: "",
                        duration: "4:43",
                    },
                    {
                        id: "s1001",
                        title: "Un Buen Perdedor",
                        videoId: "XuCd3Qj6C08",
                        url: "https://www.youtube.com/watch?v=XuCd3Qj6C08",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647177175/audiofy/artist/e5faf8e7dacd427a904d5353c545a2c4_miz2n6.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["Romantica"],
                        artist: "Franco de Vita",
                        album: "",
                        duration: "3:49",
                    },
                    {
                        id: "s1001",
                        title: "Y como es El ?",
                        videoId: "kr2B1RoWrlE",
                        url: "https://www.youtube.com/watch?v=kr2B1RoWrlE",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647177301/audiofy/artist/51MjJaUaK6L_f6cksl.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["Romantica"],
                        artist: "Jose Luis Perales",
                        album: "",
                        duration: "4:08",
                    },
                    {
                        id: "s1001",
                        title: "Cama y Mesa",
                        videoId: "QL_51ZNSqXc",
                        url: "https://www.youtube.com/watch?v=QL_51ZNSqXc",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647177431/audiofy/artist/images_mxiujc.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["Romantica"],
                        artist: "Roberto Carlos",
                        album: "",
                        duration: "3:16",
                    },
                    {
                        id: "s1001",
                        title: "Me va Extranar",
                        videoId: "4s3I0UobGG8",
                        url: "https://www.youtube.com/watch?v=4s3I0UobGG8",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647177626/audiofy/artist/1080-Montaner-2021-AXSDigital-76b13f744b_xydulj.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["Romantica"],
                        artist: "Ricardo Montaner",
                        album: "",
                        duration: "4:58",
                    },
                    {
                        id: "s1001",
                        title: "Amores Extranos",
                        videoId: "Pf27NB7UG2g",
                        url: "https://www.youtube.com/watch?v=Pf27NB7UG2g",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647177725/audiofy/artist/Laura-Pausini_l0qsyd.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["Romantica"],
                        artist: "Laura Pausini",
                        album: "",
                        duration: "4:15",
                    },
                    {
                        id: "s1001",
                        title: "Lo Aprendi de Ti",
                        videoId: "Uws510cVia4",
                        url: "https://www.youtube.com/watch?v=Uws510cVia4",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647177874/audiofy/artist/Haash00_yh7yrn.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["Romantica"],
                        artist: "Hash",
                        album: "",
                        duration: "3:16",
                    },

                ]
            },
            {
                id: "s1001",
                name: "80's",
                imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1646949271/audiofy/mix/en_hw0y0p.jpg",
                addedBy: { _id: "u102", userName: "Angelica Serebnitski", imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1643705658/gobnb/angel1_cegsqk.jpg" },
                addedAt: 162521765262,
                singers:"Evanescence, Beatles, B-Gees...",
                bgColor:"#e6b45d",
                totalSongs:10,
                songs:[
                    {
                        id: "s1001",
                        title: "How deep is your Love",
                        videoId: "XpqqjU7u5Yc",
                        url: "https://www.youtube.com/watch?v=XpqqjU7u5Yc",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647200021/audiofy/artist/Bee-Gees_l_4711_nrjfta.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["80's"],
                        artist: "B-Gees",
                        album: "",
                        duration: "3:59",
                    },
                    {
                        id: "s1001",
                        title: "Hasta que me Olvides",
                        videoId: "kCv8ipMi-BE",
                        url: "https://www.youtube.com/watch?v=kCv8ipMi-BE",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647176729/audiofy/artist/cddybc92hvkfovfn8cho.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["80's"],
                        artist: "Luis Miguel",
                        album: "",
                        duration: "4:41",
                    },
                    {
                        id: "s1001",
                        title: "Mi historia entre tus dedos",
                        videoId: "MLGmKzv3taY",
                        url: "https://www.youtube.com/watch?v=MLGmKzv3taY",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647176886/audiofy/artist/0060254722001_600_v0bgpm.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["80's"],
                        artist: "GianLuca Grignani",
                        album: "",
                        duration:"5:09",
                    },
                    {
                        id: "s1001",
                        title: "Mientes tan Bien",
                        videoId: "oy3TPpyY-Jc",
                        url: "https://www.youtube.com/watch?v=oy3TPpyY-Jc",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647176992/audiofy/artist/63084342-652e-49ad-a557-a39a9bf1782e_503671_CUSTOM_o35ikd.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["80's"],
                        artist: "Sin Bandera",
                        album: "",
                        duration: "4:43",
                    },
                    {
                        id: "s1001",
                        title: "Un Buen Perdedor",
                        videoId: "XuCd3Qj6C08",
                        url: "https://www.youtube.com/watch?v=XuCd3Qj6C08",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647177175/audiofy/artist/e5faf8e7dacd427a904d5353c545a2c4_miz2n6.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["80's"],
                        artist: "Franco de Vita",
                        album: "",
                        duration: "3:49",
                    },
                    {
                        id: "s1001",
                        title: "Y como es El ?",
                        videoId: "kr2B1RoWrlE",
                        url: "https://www.youtube.com/watch?v=kr2B1RoWrlE",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647177301/audiofy/artist/51MjJaUaK6L_f6cksl.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["80's"],
                        artist: "Jose Luis Perales",
                        album: "",
                        duration: "4:08",
                    },
                    {
                        id: "s1001",
                        title: "Cama y Mesa",
                        videoId: "QL_51ZNSqXc",
                        url: "https://www.youtube.com/watch?v=QL_51ZNSqXc",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647177431/audiofy/artist/images_mxiujc.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["80's"],
                        artist: "Roberto Carlos",
                        album: "",
                        duration: "3:16",
                    },
                    {
                        id: "s1001",
                        title: "Me va Extranar",
                        videoId: "4s3I0UobGG8",
                        url: "https://www.youtube.com/watch?v=4s3I0UobGG8",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647177626/audiofy/artist/1080-Montaner-2021-AXSDigital-76b13f744b_xydulj.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["80's"],
                        artist: "Ricardo Montaner",
                        album: "",
                        duration: "4:58",
                    },
                    {
                        id: "s1001",
                        title: "Amores Extranos",
                        videoId: "Pf27NB7UG2g",
                        url: "https://www.youtube.com/watch?v=Pf27NB7UG2g",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647177725/audiofy/artist/Laura-Pausini_l0qsyd.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["80's"],
                        artist: "Laura Pausini",
                        album: "",
                        duration: "4:15",
                    },
                    {
                        id: "s1001",
                        title: "Lo Aprendi de Ti",
                        videoId: "Uws510cVia4",
                        url: "https://www.youtube.com/watch?v=Uws510cVia4",
                        imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1647177874/audiofy/artist/Haash00_yh7yrn.jpg",
                        addedBy: { _id: "u102", userName: "Muki Ram", imgUrl: "img2.png" },
                        addedAt: 162521765262,
                        tags: ["80's"],
                        artist: "Hash",
                        album: "",
                        duration: "3:16",
                    },

                ]
            },
            {
                id: "s1001",
                name: "Girls Mix",
                imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1646948953/audiofy/mix/en_mlf4tx.jpg",
                addedBy: { _id: "u102", userName: "Angelica Serebnitski", imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1643705658/gobnb/angel1_cegsqk.jpg" },
                addedAt: 162521765262,
            },
            {
                id: "s1001",
                name: "Mix mix",
                imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1646948864/audiofy/mix/en_aiwmka.jpg",
                addedBy: { _id: "u102", userName: "Angelica Serebnitski", imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1643705658/gobnb/angel1_cegsqk.jpg" },
                addedAt: 162521765262,
            },

        ],
    }
]

var playList=[
    {
        _id:"UeGYv1",
        name:"Romanticas",
        createdAt: 1541652422,
        bgColor:"black",
        createdBy: {
            _id: "u101",
            userName: "Angelica Serebnitski",
            imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1643705658/gobnb/angel1_cegsqk.jpg",
        },
        songs:[
        
        ]

    },
    {
        _id:"Gftwv4",
        name:"Criolla",
        createdAt: 1541652422,
        bgColor:"black",
        createdBy: {
            _id: "u101",
            userName: "Angelica Serebnitski",
            imgUrl: "https://res.cloudinary.com/angelsa/image/upload/v1643705658/gobnb/angel1_cegsqk.jpg",
        },
        songs:[
        
        ]

    }
]


function _getStations() {
    return stations
}

function _getPlayList(){
    return playList
}


async function query(key='StationsDB') {
    var entities = _loadBoardsFromStorage(key) || _getStations()
    _save(key,entities)
    return entities

}
async function queryList() {
    var entities = _loadBoardsFromStorage(KEY) || _getPlayList()
    _save(KEY,entities)
    return entities

}

function remove(entityType, entityId) {
    console.log(entityType, entityId);
    var entities = _loadBoardsFromStorage(KEY) 
    const idx = entities.findIndex(entity => entity._id === entityId);
    entities.splice(idx, 1);
    _save(entityType, entities);

}

function get(entityType, entityId) {
    return query(entityType)
        .then(entities => entities.find(entity => entity._id === entityId));
}


function post(key='playListDB',newEntity) {
    newEntity._id = utilService.makeId();
    var playlistList=_loadBoardsFromStorage(key)||[]
    console.log(playlistList);
    playlistList.unshift(newEntity)
    console.log(playlistList);
    _save(key,  playlistList);
    return newEntity;

}

function postSong(newsong,nameList){
    var entities = _loadBoardsFromStorage(KEY) || _getPlayList()
    var playList = entities.filter((list)=>{
        return list.name===nameList;
    })    
    playList[0].songs.unshift(newsong)
    _save(KEY,entities)
    return entities;

}

function put(entityType, updatedEntity) {

    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === updatedEntity._id);
            entities.splice(idx, 1, updatedEntity);
            _save(entityType, entities);
            return updatedEntity;
        });
}







function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities));
}

function _loadBoardsFromStorage(STORAGE_KEY) {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));

}