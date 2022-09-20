// icons
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ChatIcon from "@mui/icons-material/Chat";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

// images
import project1a_1000 from "../assets/images/project1/project1a_1000.png";
import project1b_1000 from "../assets/images/project1/project1b_1000.png";
import project1c_1000 from "../assets/images/project1/project1c_1000.png";
import project3m from "../assets/images/project1/project1_miniature.png";
import project2a_1200 from "../assets/images/project2/project2a_1200.png";
import project2b_1200 from "../assets/images/project2/project2b_1200.png";
import project2c_1200 from "../assets/images/project2/project2c_1200.png";
import project2d_1200 from "../assets/images/project2/project2d_1200.png";
import project2a_600 from "../assets/images/project2/project2a_600.png";
import project2b_600 from "../assets/images/project2/project2b_600.png";
import project2c_600 from "../assets/images/project2/project2c_600.png";
import project2d_600 from "../assets/images/project2/project2d_600.png";

// components
import ImageSlider from "../pages/Projects/SlideContent/Contents/ImageSlider/ImageSlider";

const data = {
  en: {
    logo: {
      title: "Adrian Zawadzki",
      p: "Front End Developer",
    },
    navigation: {
      menu: [
        {
          name: "Projects",
          link: "#projects",
        },
        {
          name: "About Me",
          link: "#about",
        },
        {
          name: "Skills",
          link: "#skills",
        },
        {
          name: "Contact",
          link: "#contact",
        },
      ],
      lang: [{ name: "pl" }, { name: "en" }],
    },
    buttons: [
      {
        shortTitle: "CV",
        longTitle: "Download CV",
        link: project3m,
        icon: <FileDownloadIcon />,
      },
      {
        shortTitle: "",
        longTitle: "Let's Talk",
        link: "#contact",
        icon: <ChatIcon />,
      },
    ],
    projects: {
      title: "Projects",
      buttons: [
        {
          shortTitle: "Live",
          longTitle: "Live",
          icon: null,
        },
        {
          shortTitle: "GitHub",
          longTitle: "GitHub",
          icon: null,
        },
      ],
      sliders: [
        {
          id: 0,
          miniature: project3m,
          title: "Website react project app",
          types: ["JavaScript", "Css"],
          desc: "obstacle run. Organic landscapes with curves, bends and hills set these environments apart from the previous title. I've designed well over 150 level segments for this game, while making sure every single one of them had a unique catch and feel. I was closesly involved in the design and development of obstacles.",
          liveLink: "/link",
          gitHubLink: "/link",
          slideComponent: (
            <ImageSlider
              data={[project1a_1000, project1b_1000, project1c_1000]}
            />
          ),
        },
        {
          id: 1,
          miniature: "/link",
          title: "Title-1",
          types: ["React", "Scss", "JS"],
          desc: "Desc b",
          liveLink: "/link",
          gitHubLink: "/link",
          slideComponent: (
            <ImageSlider
              data={[
                project2a_1200,
                project2b_1200,
                project2c_1200,
                project2d_1200,
              ]}
              data600={[
                project2a_600,
                project2b_600,
                project2c_600,
                project2d_600,
              ]}
            />
          ),
        },
        {
          id: 2,
          miniature: "/link",
          title: "Title-2",
          types: ["React", "Scss", "Socket.io"],
          desc: "Desc c",
          liveLink: "/link",
          gitHubLink: "/link",
          slideComponent: null,
        },
        {
          id: 3,
          miniature: "/link",
          title: "Title-3",
          types: ["React", "Scss"],
          desc: "Desc d",
          liveLink: "/link",
          gitHubLink: "/link",
          slideComponent: null,
        },
      ],
    },
    about: {
      img: "/image",
      mainTitle: "About me",
      desc: "descc",
      title: "Interests",
      interests: [
        {
          name: "Games",
          icon: <SportsEsportsIcon />,
        },
        {
          name: "Football",
          icon: <SportsEsportsIcon />,
        },
      ],
    },
    skills: {
      title: "Skills",
      buttons: [
        {
          name: "Technical",
          icon: <SportsEsportsIcon />,
          items: [
            {
              name: "React",
              rating: 2,
            },
            {
              name: "Node.js",
              rating: 1,
            },
            {
              name: "Express",
              rating: 1,
            },
            {
              name: "Socket.io",
              rating: 1,
            },
            {
              name: "Firebase",
              rating: 1,
            },
          ],
        },
        {
          name: "Languages",
          icon: <SportsEsportsIcon />,
          items: [
            {
              name: "JavaScript",
              rating: 4,
            },
            {
              name: "HTML(5)",
              rating: 3,
            },
            {
              name: "Css(3)",
              rating: 3,
            },
            {
              name: "SQL",
              rating: 1,
            },
            {
              name: "Bash",
              rating: 1,
            },
          ],
        },
        {
          name: "Third-party apis",
          icon: <SportsEsportsIcon />,
          items: [
            {
              name: "MongoDB",
              rating: 0.5,
            },
            {
              name: "Firebase",
              rating: 0.5,
            },
            {
              name: "Cloudinary",
              rating: 0.5,
            },
          ],
        },
        {
          name: "Tools",
          icon: <SportsEsportsIcon />,
          items: [
            {
              name: "VS Code",
              rating: 2.5,
            },
            {
              name: "GIMP",
              rating: 1.5,
            },
            {
              name: "Chrome Dev Tools",
              rating: 2.5,
            },
            {
              name: "Discord",
              rating: 4,
            },
            {
              name: "Windows",
              rating: 5,
            },
            {
              name: "Linux",
              rating: 1.5,
            },
            {
              name: "Piskelepp",
              rating: 3,
            },
          ],
        },
        {
          name: "Project management",
          icon: <SportsEsportsIcon />,
          items: [
            {
              name: "GitHub",
              rating: 2,
            },
            {
              name: "Heroku",
              rating: 2,
            },
            {
              name: "Replit",
              rating: 3,
            },
            {
              name: "Codepen",
              rating: 3,
            },
          ],
        },
      ],
    },
    contact: {
      prevTitle: "Get in Touch",
      title: "Contact me",
      email: "dasdas@dsds.pl",
      messenger: "@adrianzawa",
      p: "Send a message",
    },
  },

  pl: {
    logo: {
      title: "Adrian Zawadzki",
      p: "Front End Developer",
    },
    navigation: {
      menu: [
        {
          name: "Projekty",
          link: "#projects",
        },
        {
          name: "O mnie",
          link: "#about",
        },
        {
          name: "Umiejętności",
          link: "#skills",
        },
        {
          name: "Kontakt",
          link: "#contact",
        },
      ],
      lang: [{ name: "pl" }, { name: "en" }],
    },
    buttons: [
      {
        shortTitle: "CV",
        longTitle: "Pobierz CV",
        link: "/",
        icon: <FileDownloadIcon />,
      },
      {
        shortTitle: "",
        longTitle: "Kontakt",
        link: "/",
        icon: <ChatIcon />,
      },
    ],
    projects: {
      title: "Portfolio",
      sliders: [
        {
          id: 0,
          img: "/link",
          title: "Title-0",
          types: ["JavaScript", "Css"],
          desc: "Desc a",
        },
        {
          id: 1,
          img: "/link",
          title: "Title-1",
          types: ["React", "Scss", "JS"],
          desc: "Desc b",
        },
        {
          id: 2,
          img: "/link",
          title: "Title-2",
          types: ["React", "Scss", "Socket.io"],
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
      menu: [
        {
          id: 0,
          img: "/link0",
        },
        {
          id: 1,
          img: "/link1",
        },
        {
          id: 2,
          img: "/link2",
        },
        {
          id: 3,
          img: "/link3",
        },
      ],
    },
    about: {
      img: "/image",
      mainTitle: "O mnie",
      desc: "descc",
      title: "Zainteresowania",
      interests: [
        {
          name: "Gry komputerowe",
          icon: <SportsEsportsIcon />,
        },
        {
          name: "Piłka nożna",
          icon: <SportsEsportsIcon />,
        },
      ],
    },
    skills: {
      title: "Umiejętności",
      buttons: [
        {
          name: "Techniczne",
          icon: <SportsEsportsIcon />,
          items: [
            {
              name: "React",
              rating: 2,
            },
            {
              name: "Node.js",
              rating: 1,
            },
            {
              name: "Express",
              rating: 1,
            },
            {
              name: "Socket.io",
              rating: 1,
            },
            {
              name: "Firebase",
              rating: 0.5,
            },
          ],
        },
        {
          name: "Języki programowania",
          icon: <SportsEsportsIcon />,
          items: [
            {
              name: "JavaScript",
              rating: 4,
            },
            {
              name: "HTML(5)",
              rating: 2.5,
            },
            {
              name: "Css(3)",
              rating: 2.5,
            },
            {
              name: "SQL",
              rating: 1,
            },
            {
              name: "Bash",
              rating: 1,
            },
          ],
        },
        {
          name: "API innych firm",
          icon: <SportsEsportsIcon />,
          items: [
            {
              name: "MongoDB",
              rating: 0.5,
            },
            {
              name: "Firebase",
              rating: 0.5,
            },
            {
              name: "Cloudinary",
              rating: 0.5,
            },
          ],
        },
        {
          name: "Narzędzia",
          icon: <SportsEsportsIcon />,
          items: [
            {
              name: "VS Code",
              rating: 2.5,
            },
            {
              name: "GIMP",
              rating: 1.5,
            },
            {
              name: "Discord",
              rating: 4,
            },
            {
              name: "Chrome Dev Tools",
              rating: 2.5,
            },
            {
              name: "Windows",
              rating: 5,
            },
            {
              name: "Linux",
              rating: 1.5,
            },
            {
              name: "Piskelepp",
              rating: 3,
            },
          ],
        },
        {
          name: "Zarządzanie projektami",
          icon: <SportsEsportsIcon />,
          items: [
            {
              name: "GitHub",
              rating: 2,
            },
            {
              name: "Heroku",
              rating: 2,
            },
            {
              name: "Replit",
              rating: 3,
            },
            {
              name: "Codepen",
              rating: 3,
            },
          ],
        },
      ],
    },
    contact: {
      prevTitle: "Skontaktuj się ze mną",
      title: "Kontakt",
      email: "dasdas@dsds.pl",
      messenger: "@adrianzawa",
      p: "Wyślij wiadomość",
    },
  },
};

export default data;
