import { SVG, G } from '@svgdotjs/svg.js'


export class Face {
  constructor(template) {
    this.template = template;
    this.container = SVG();
    this.container.add(this.template);

    this.features = new SVG();
    this.container.add(this.features);
  }

  size(w, h) {
    this.container.size(w, h);
    this.template.cx(w/2);
    this.features.size(w, h);
  }

  addFeature(f) {
    return this.features.add(f);
  }

  eyes(e) {
    const w = e.bbox().width;
    const offset = 80;
    const eyes = new SVG();
    eyes.add(e.clone().addClass('eye').addClass('-left').move(0, 0));
    eyes.add(e.clone().addClass('eye').addClass('-right').move(offset, 0));

    const eyeWidth = eyes.bbox().width;
    this.features.add(eyes.move(-eyeWidth/2, 100));
  }

  nose(n) {
    const w = n.bbox().width;
    this.features.add(n.addClass('nose').move(-w/2, 200));
  }

  mouth(n) {
    const w = n.bbox().width;
    this.features.add(n.addClass('mouth').move(-w/2, 300));
  }

  svg() {
    // console.log("MOVE", this.container.bbox().width/2)
    // this.features.x(this.container.bbox().width/2);
    // this.features.transform({
    //   translateX: this.container.bbox().width/2
    // })


    this.features.viewbox(-(this.container.bbox().width/2), 0, this.container.bbox().width, this.container.bbox().height)
    console.log(this.container.svg());
    return this.container.svg();
  }
}