import starwarsImg from '../images/starwars.png';
import recipeAppImg from '../images/recipeapp.png';
import bin2decImg from '../images/bin2dec.png';
import borderRadiusImg from '../images/border-radius.png';
import covidCasesImg from '../images/covid.png'
// {
//   'image': 
//   'githubURL': 
//   'description': 
//   'demoURL': 
// },

const projects = [
  {
  'image': covidCasesImg,
  'githubURL': 'https://github.com/brunofeu/Challenge-Covid-Daily-Cases',
  'description': 'Covid daily cases',
  'demoURL': 'https://challenge-covid-cases.vercel.app/'
},
  {
    'image': starwarsImg,
    'githubURL': 'https://github.com/brunofeu/starwars-planets-search', 
    'description': 'Pesquisa de planetas de StarWars', 
    'demoURL': 'https://brunofeu.github.io/starwars-planets-search/'
  },
  {
    'image': recipeAppImg,
    'githubURL': 'https://github.com/brunofeu/recipes-app', 
    'description': 'App de Receitas', 
    'demoURL': 'https://brunofeu.github.io/recipes-app/'
  },
  {
  'image': bin2decImg,
  'githubURL': 'https://github.com/brunofeu/Bin2Dec',
  'description': 'Binary-to-Decimal number converter',
  'demoURL': 'https://brunofeu.github.io/Bin2Dec/',
  },
  {
    'image': borderRadiusImg,
    'githubURL': 'https://github.com/brunofeu/Border-Radius-Previewer',
    'description': 'Border-Radius-Previewer',
    'demoURL': 'https://brunofeu-border-radius-previewer.vercel.app/',
  },
];

export default projects;