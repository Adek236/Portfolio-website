import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

const data = {
  en: {
    logo: {
      title: "Adrian Zawadzki",
      p: "Front End Developer",
    },
    buttons: [
      {
        shortTitle: "CV",
        longTitle: "Download CV",
        link: "/",
      },
      {
        shortTitle: "",
        longTitle: "Let's Talk",
        link: "/",
      },
    ],
    projects: {
      title: "Portfolio",
      sliders: [
        {
          id: 0,
          img: "/link",
          title: "Title-0",
          types: ["JavaScript", "Css",],
          desc: "Desc a",
        },
        {
          id: 1,
          img: "/link",
          title: "Title-1",
          types: ["React", "Scss","JS"],
          desc: "Desc b",
        },
        {
          id: 2,
          img: "/link",
          title: "Title-2",
          types: ["React", "Scss","Socket.io"],
          desc: "Desc c",
        },
        {
          id: 3,
          img: "/link",
          title: "Title-3",
          types: ["React", "Scss"],
          desc: "Desc d",
        },
      ],
      menu : [
        {
          id: 0,
          img: "/link0"
        },
        {
          id: 1,
          img: "/link1"
        },
        {
          id: 2,
          img: "/link2"
        },
        {
          id: 3,
          img: "/link3"
        }
      ]
    },
    about: {
      img: "/image",
      mainTitle: "About me",
      desc: "descc",
      title: "Interests",
      interests: [
        {
          name: "Games",
          icon: <SportsEsportsIcon />
        },
        {
          name: "Football",
          icon: <SportsEsportsIcon />
        }
      ]
    },
    skills: {
      buttons: [
        {
          name: "Technical",
          icon: null
        },
        {
          name: "Languages",
          icon: null
        },
        {
          name: "Third-party apis",
          icon: null
        },
        {
          name: "Tools",
          icon: null
        },
        {
          name: "Project management",
          icon: null
        }
      ]
    }
  },
  pl: {
    logo: {
      title: "Adrian Zawadzki",
      p: "Front End Developer",
    },
    buttons: [
      {
        shortTitle: "CV",
        longTitle: "Pobierz CV",
        link: "/",
      },
      {
        shortTitle: "",
        longTitle: "Kontakt",
        link: "/",
      },
    ],
  },
};

export default data;
