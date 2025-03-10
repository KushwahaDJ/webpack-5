import {generateJokes} from './generateJokes';
import './styles/main.scss';

import laughing from './assets/laughing-emoji-svgrepo-com.svg';

const laughImg = document.getElementById('laughImg');

laughImg.src = laughing;

const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJokes)

console.log(generateJokes());

generateJokes();