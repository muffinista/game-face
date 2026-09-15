import './style.css'

import { Face } from './face.js';
import { SVG, Ellipse } from '@svgdotjs/svg.js'


const face = new Face(
  new Ellipse().size(200, 400).move(200, 0).fill('#ff0000')
);

face.eyes(new Ellipse().size(5, 5).fill('#000000'));


// const svg = SVG();
face.size(400, 400);
console.log(face);
document.querySelector('#app').innerHTML = face.svg();

