// Frases que se escriben bajo el nombre
export const roles = ['Desarrollador Full Stack Java', 'Desarrollador Full Stack JavaScript', 'Ingeniero de Sistemas', 'APIs REST e integración de servicios'];

// Habilidades técnicas por grupo: [nombre, nivel aproximado 0-100]
export const habilidades = {
  'Lenguajes': [['Java', 50], ['JavaScript', 90], ['Python', 60]],
  'Backend': [['Spring Boot', 50], ['Node.js', 85], ['Express.js', 85], ['Flask', 65], ['FastAPI', 70]],
  'Frontend': [['HTML5 / CSS3', 90], ['React.js', 80], ['Angular', 50], ['Tailwind / MUI', 75]],
  'Datos e integración': [['APIs REST', 85], ['Google Apps Script', 85], ['MySQL', 75], ['PostgreSQL', 70], ['MongoDB', 65]]
};

// Herramientas favoritas: [nombre, clase de ícono de Devicon]
// Orden en cada grupo: lenguajes → frameworks/librerías → HTML y CSS (o bases de datos)
export const herramientasFront = [
  ['JavaScript', 'devicon-javascript-plain colored'],
  ['React', 'devicon-react-original colored'], ['Angular', 'devicon-angularjs-plain colored'], ['Bootstrap', 'devicon-bootstrap-plain colored'],
  ['Tailwind', 'devicon-tailwindcss-original colored'], ['Material UI', 'devicon-materialui-plain colored'],
  ['HTML', 'devicon-html5-plain colored'], ['CSS', 'devicon-css3-plain colored']
];

export const herramientasBack = [
  ['Java', 'devicon-java-plain colored'], ['Python', 'devicon-python-plain colored'],
  ['Spring Boot', 'devicon-spring-original colored'], ['Node.js', 'devicon-nodejs-plain colored'], ['Express', 'devicon-express-original'],
  ['Flask', 'devicon-flask-original'], ['FastAPI', 'devicon-fastapi-plain colored']
];

export const herramientasBD = [
  ['MySQL', 'devicon-mysql-plain colored'], ['PostgreSQL', 'devicon-postgresql-plain colored'],
  ['Oracle Database', 'devicon-oracle-original colored'], ['MongoDB', 'devicon-mongodb-plain colored']
];

// Íconos que empiezan con "si:" vienen de Simple Icons (Devicon no los tiene): "si:nombre:color"
export const herramientasOtras = [
  ['Git', 'devicon-git-plain colored'], ['GitHub', 'devicon-github-original'],
  ['Docker', 'devicon-docker-plain colored'], ['Linux', 'devicon-linux-plain'], ['Windows', 'devicon-windows11-original colored'],
  ['AWS', 'devicon-amazonwebservices-plain-wordmark colored'], ['Azure', 'devicon-azure-plain colored'], ['Google Cloud', 'devicon-googlecloud-plain colored'],
  ['Claude', 'si:claude:#D97757'], ['Ollama', 'si:ollama:#ffffff']
];

// Stack del proyecto destacado (FiAcademic): [tecnología, % aproximado, color]
export const stackProyecto = [
  ['React + MUI + Tailwind', 35, '#61dafb'],
  ['Node.js + Express', 30, '#8cc84b'],
  ['Python + Flask', 15, '#3776ab'],
  ['Google Apps Script / Workspace', 15, '#f4b400'],
  ['Moodle LMS', 5, '#f98012']
];

// Tecnologías de cada proyecto del portafolio: [nombre, clase de ícono de Devicon]
// La clave coincide con el atributo data-tecnologias de cada tarjeta en index.html
export const tecnologiasProyectos = {
  // Orden: lenguajes → frameworks → HTML y CSS → herramientas
  tutaller: [
    ['Java', 'devicon-java-plain colored'], ['JavaScript', 'devicon-javascript-plain colored'],
    ['Spring Boot', 'devicon-spring-original colored'], ['Bootstrap', 'devicon-bootstrap-plain colored'],
    ['HTML', 'devicon-html5-plain colored'], ['CSS', 'devicon-css3-plain colored'],
    ['Git', 'devicon-git-plain colored'], ['GitHub', 'devicon-github-original']
  ],
  gestor: [
    ['Java', 'devicon-java-plain colored'], ['JavaScript', 'devicon-javascript-plain colored'],
    ['Spring Boot', 'devicon-spring-original colored'], ['Bootstrap', 'devicon-bootstrap-plain colored'],
    ['HTML', 'devicon-html5-plain colored'], ['CSS', 'devicon-css3-plain colored']
  ]
};
