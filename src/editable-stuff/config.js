
// Navigation Bar SECTION
const navBar = {
  show: true,
};
//const language = "BR";
// Main Body SECTION

const navBarText = {
  EN: {
    projects: "Projects",
    resume: "Resume",
    aboutMe: "About me",
    skills: "Skills",
    toggleLang: "</BR>"
  },
  BR: {
    projects: "Projetos",
    resume: "Currículo",
    aboutMe: "Sobre mim",
    skills: "Habilidades",
    toggleLang: "</EN>",
  }
};

const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Stefano",
  middleName: "Augusto",
  lastName: "Mossi",
  EN: {
    message: "Looking to improve the world through technology and data analysis"
  },
  BR: {
    message: "Buscando melhorar o mundo por meio da tecnologia e da análise de dados"
  },
    icons: [
      {
        image: "fab fa-github",
        url: "https://github.com/StefanoAugusto",
      },
      {
        image: "fas fa-envelope",
        url: "mailto:stefanoaugustomossi@gmail.com",
      },
      {
        image: "fab fa-whatsapp",
        url: "https://wa.me/5554996171701",
      },
      {
        image: "fab fa-linkedin",
        url: "https://www.linkedin.com/in/StefanoMossi/",
      },
    ],
  };

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  imageLink: require("../editable-stuff/perfil.png"),
  imageSize: 375,
  EN: {
    heading: "About me",
    message: "Hello! I am Stefano, 25 years old, with a degree in Law, and I am currently enhancing my skills in Computer Science at Atitus. I work as a Mid-Level SQL Programmer, primarily focusing on data analysis, with strong expertise in Oracle. Additionally, I have solid experience in internal and academic projects involving Python and its libraries, such as Pandas, NumPy, and PyCryptoDome, as well as the R programming language.",
    resume: "https://drive.google.com/file/d/19GufT01UeStuvF1OFGptMqGOsTR_SXLB/view?usp=drive_link",
  },
  BR: {
    heading: "Sobre mim",
    message:
      "Olá! Sou o Stefano, tenho 25 anos de idade, possuo formação em Direito e atualmente estou aprimorando minhas habilidades em Ciências da Computação na Atitus. Atuo como Programador SQL Pleno, atuando principalmente em análise de dados, com uma forte expertise em Oracle. Além disso, tenho uma sólida experiência em projetos internos e acadêmicos envolvendo Python e suas bibliotecas, como Pandas, NumPy e PyCryptoDome, além da linguagem R.",
    resume: "https://drive.google.com/file/d/15IyEEvJ_4ehsyJPBgRvNorjZEFjkxe8U/view?usp=sharing",
}};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  EN: {heading: "Recent Academic Projects"},
  BR: {heading: "Projetos Acadêmicos Recentes"},
  gitHubUsername: "StefanoAugusto", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/perfil.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/perfil.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  EN: {
    heading: "Skills",
    hardSkills: [
      { name: "Python", value: 80 },
      { name: "Pandas", value: 75 },
      { name: "SQL", value: 95 },
      { name: "Data Structure", value: 90 },
      { name: "Query Tuning", value: 90 },
      { name: "JavaScript", value: 70 },
      { name: "React", value: 70 },
      { name: "HTML/CSS", value: 80 },
    ],
    softSkills: [
      { name: "Time Management", value: 85 },
      { name: "Collaboration", value: 90 },
      { name: "Positivity", value: 80 },
      { name: "Adaptability", value: 85 },
      { name: "Problem-Solving", value: 80 },
      { name: "Empathy", value: 90 },
      { name: "Organization", value: 85 },
      { name: "Creativity", value: 70 },
    ]},
    BR: {
    heading: "Habilidades",
    hardSkills: [
      { name: "Python", value: 80 },
      { name: "Pandas", value: 75 },
      { name: "SQL", value: 95 },
      { name: "Estrutura de Dados", value: 90 },
      { name: "Otimização de Queries", value: 90 },
      { name: "JavaScript", value: 70 },
      { name: "React", value: 70 },
      { name: "HTML/CSS", value: 80 },
    ],
    softSkills: [
      { name: "Gestão de Tempo", value: 85 },
      { name: "Colaboração", value: 90 },
      { name: "Positividade", value: 80 },
      { name: "Adaptabilidade", value: 85 },
      { name: "Resolução de Problemas", value: 80 },
      { name: "Empatia", value: 90 },
      { name: "Organização", value: 85 },
      { name: "Criatividade", value: 70 },
    ]}
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  email: "stefanoaugustomossi@gmail.com",
  EN: { 
  heading: "Get in touch!",
  message: "I am currently looking for opportunities as a Data Scientist! If you know of any opportunities, have any questions, or just want to say hi, feel free to reach out!",
  }, 
  BR: {  
  heading: "Entre em contato!",
  message: "Atualmente estou procurando oportunidades  como Cientista de Dados! Se você conhece alguma oportunidade, caso tenha alguma dúvida, ou caso queira apenas dizer oi, sinta-se livre para entrar em contato!",
  }
};

const experiences = {
  show: true,
  EN:
  {heading: "Professional Experience",
  data: [
    {
      role: 'SQL Developer Mid-Level',
      companylogo: require('../assets/img/mercadados2.png'),
      date: 'May 2024 – Actually',
      exp: 'Structuring business rules and data processing for the Mercadados application. Extract, Transform & Load (ETL) processes in the database, focusing on creating views and analyzing relevant data for Clients. Application restructuring using Python for the platform’s low-code functionality. Development in T-SQL. Daily application of Scrum Methodology.'
    },
    {
      role: 'SQL Developer Entry Level',
      companylogo: require('../assets/img/dataintegra2.png'),
      date: 'November 2022 – May 2024',
      exp: 'Extensive experience in supporting database integrations for Oracle (PL/SQL) and creating routines with procedures, triggers, jobs, and packages. Provided support to clients in various locations, including Panama, Peru, Uruguay, and others countries, while managing supporting tickets via Jira. Additionally collaborated with the development team using Node.js and TypeScript for integration solutions.'
    },
    {
      role: 'Legal Assistant',
      companylogo: require('../assets/img/hiorder.png'),
      date: 'June 2021 – December 2022',
      exp: 'Conducted activities related to the compliance program for the Brazilian Data Protection Law (LGPD), providing support in diagnosing and adapting clients to LGPD requirements, especially in the structure of websites, applications, and web-based platforms.'
    },
  ]
  }, BR:
  {heading: "Experiências",
  data: [
    {
      role: 'Desenvolvedor SQL Pleno',
      companylogo: require('../assets/img/mercadados2.png'),
      date: 'Maio 2024 – Atualmente',
      exp: 'Estruturação de regras de negócio e processamento de dados da aplicação Mercadados. Aplicação de ETL na base de dados, buscando realizar a criação de views e análises de dados relevantes para o Cliente. Reestruturação de aplicação em Python para o Low-code da plataforma. Desenvolvimento em T-SQL. Aplicação da metodologia SCRUM no dia-a-dia.'
    },
    {
      role: 'Desenvolvedor Back-End Júnior',
      companylogo: require('../assets/img/dataintegra2.png'),
      date: 'Junho 2022 – Maio 2024',
      exp: 'Forte atuação no suporte a integrações de bancos de dados Oracle (PL/SQL) e também elaboração de rotinas com procedures, triggers, jobs e packages. Além de também prestar atendimento aos clientes de diversos locais como: Panamá, Peru, Uruguai e entre outros países, também atuando com a descrição do atendimento via Jira. Não obstante, atuei otimizando consultas para sistemas BI e também no desenvolvimento de Views para sistemas como Tableau.'
    },
    {
      role: 'Assistente Júridico',
      companylogo: require('../assets/img/hiorder.png'),
      date: 'Junho 2021 – Dezembro 2022',
      exp: 'Desenvolvimento de atividades relacionadas ao programa de compliance à Lei Geral de Proteção de Dados, suporte nas tarefas de diagnóstico e adequação dos clientes à LGPD, em especial nas estruturas de websites, aplicativos e plataformas web-base.'
    },
  ]
  } 
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, navBarText, mainBody, about, repos, skills, leadership, getInTouch, experiences };
