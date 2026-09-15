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
    // face.eyes(new Ellipse().size(20, 20).fill('#000000'));
    const le = this.features.add(e.clone().move(-20, 140));
    const re = this.features.add(e.clone().move(20, 140));
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