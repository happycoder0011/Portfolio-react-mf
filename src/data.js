import { GiMountainRoad } from "react-icons/gi";
import { GoCopilot } from "react-icons/go";
import { FaCat } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { GiCook } from "react-icons/gi";

import whatsapp from './../Assets/whatsapp.png'
import twitter from './../Assets/TWITTER.png'
import netflix from './../Assets/NETFLIX.png'
import carcinoma from './../Assets/CARCINOMA.png'
import teacherarc from './../Assets/teacherarc.jpg'
import dionportfolio from './../Assets/dionportfolio.jpg'

export const data = {
    title:"Sheetal Singh",
    badges: [
        {
            label: 'Software Engineer',
            icon: GoCopilot,
            color: "purple"
        },
        {
            label: 'Mountain Lover',
            icon: GiMountainRoad,
            color: "purple"
         },
         {
            label: 'Cat Mom',
            icon: FaCat,
            color: "purple"
        },
        {
            label: 'Night Owl',
            icon: FaMoon,
            color: "purple"
        },
        {
            label: 'Amateur Chef',
            icon: GiCook,
            color: "purple"
        },

    ],
    projects: [
        {
            id: 5,
            github: "https://github.com/CodeinnHQ/Dion-Portfolio",
            url: "http://dion-portfolio.vercel.app/",
            image: dionportfolio
        },
        {
            id: 0,
            github: "https://github.com/teacher-arc/ta-frontend",
            url: "https://github.com/teacher-arc/ta-frontend",
            image: teacherarc
        },
        {
            id: 1,
            github: "https://github.com/happycoder0011/Whatsapp_Clone",
            url: "https://www.crio.do/projects/react-whatsapp-clone/",
            image: whatsapp
        },
        {
            id: 2,
            github: 'https://github.com/happycoder0011/Twitter-clone',
            url: 'https://github.com/happycoder0011/Twitter-clone',
            image: twitter
        },
        {
            id: 3,
            github: 'https://github.com/happycoder0011/Netflix_Marvel',
            url: 'https://elastic-bell-b16f39.netlify.app/',
            image: netflix
        },
        {
            id: 4,
            github: 'https://github.com/happycoder0011/Carcinoma---skin-cancer-detection-web-app',
            url: 'https://github.com/happycoder0011/Carcinoma---skin-cancer-detection-web-app',
            image: carcinoma
        },
    ]
}