import './style.css'

import { Face } from './face.js';
import { SVG, Ellipse, Rect } from '@svgdotjs/svg.js'


const face = new Face(
  new Ellipse().size(200, 400).move(200, 0).fill('#ff0000')
);

face.eyes(new Ellipse().size(20, 20).fill('#000000'));
face.nose(new Rect().size(20, 20).fill('#000000'));
face.mouth(new Rect().size(60, 20).fill('#000000'));
face.hair(new Rect().size(200, 20).fill('#000000'));
face.ears(new Rect().size(10, 100).fill('#000000'));


face.size(400, 400);
console.log(face);
document.querySelector('#app').innerHTML = face.svg();

