// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Stefano",
  middleName: "Augusto",
  lastName: "Mossi",
  message: "Buscando melhorar o mundo por meio da tecnologia e da análise de dados",
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
  heading: "Sobre mim",
  imageLink: require("../editable-stuff/perfil.png"),
  imageSize: 375,
  message:
    "Olá! Sou o Stefano, tenho 24 anos de idade, possuo formação em Direito e atualmente estou aprimorando minhas habilidades em Ciências da Computação na Atitus. Atuo como Desenvolvedor de Sistemas Júnior, concentrando-me principalmente em banco de dados, com uma forte expertise em Oracle. Além disso, tenho uma sólida experiência em projetos internos e acadêmicos envolvendo Python e suas bibliotecas, como Pandas, NumPy e PyCryptoDome, além da linguagem R.",
  resume: "https://drive.google.com/file/d/1hmVacVL6QiZQ9hSnkEgsKkO18ZBmsIMQ/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Projetos Acadêmicos Recentes",
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
  heading: "Habilidades",
  hardSkills: [
    { name: "Python", value: 80 },
    { name: "Pandas", value: 75 },
    { name: "SQL", value: 90 },
    { name: "Estrutura de Dados", value: 85 },
    { name: "Linguagem R", value: 55 },
    { name: "JavaScript", value: 60 },
    { name: "React", value: 55 },
    { name: "HTML/CSS", value: 70 },
  ],
  softSkills: [
    { name: "Orientação a resultados", value: 75 },
    { name: "Colaboração", value: 90 },
    { name: "Positividade", value: 80 },
    { name: "Adaptabilidade", value: 85 },
    { name: "Resolução de Problemas", value: 80 },
    { name: "Empatia", value: 90 },
    { name: "Organização", value: 85 },
    { name: "Criatividade", value: 70 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Entre em contato!",
  message:
    "Atualmente estou procurando oportunidades como Engenheiro de Software ou como Cientista de Dados! Se você conhece alguma oportunidade, caso tenha alguma dúvida, ou caso queira apenas dizer oi, sinta-se livre para entrar em contato!",
  email: "stefanoaugustomossi@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiências",
  data: [
    {
      role: 'Desenvolvedor Back-End Pleno',
      companylogo: require('../assets/img/mercadados2.png'),
      date: 'Maio 2024 – Atualmente',
      exp: 'Desenvolvimento e atuação em banco de dados SQL Server, ETL (Extract, Transform and Load) de dados, criação de dashboards para análise de dados.'
    },
    {
      role: 'Desenvolvedor Back-End Júnior',
      companylogo: require('../assets/img/dataintegra2.png'),
      date: 'Junho 2022 – Maio 2024',
      exp: 'Forte atuação no suporte a integrações de bancos de dados Oracle (PL/SQL) e também elaboração de rotinas com procedures, triggers, jobs e packages. Além de também prestar atendimento aos clientes de diversos locais como: Panamá, Peru, Uruguai e entre outros países, também atuando com a descrição do atendimento via Jira.'
    },
    {
      role: 'Assistente Júridico',
      companylogo: require('../assets/img/hiorder.png'),
      date: 'Junho 2021 – Dezembro 2022',
      exp: 'Desenvolvimento de atividades relacionadas ao programa de compliance à Lei Geral de Proteção de Dados, suporte nas tarefas de diagnóstico e adequação dos clientes à LGPD, em especial nas estruturas de websites, aplicativos e plataformas web-base.'
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
