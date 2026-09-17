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

  eyes(e) {
    const w = e.bbox().width;
    const offset = 80;

    this.features.add(e.clone().addClass('eye').addClass('-left').move(-offset, 20));
    this.features.add(e.clone().addClass('eye').addClass('-right').move(offset, 20));
  }

  ears(e) {
    const w = e.bbox().width;
    const offset = 200;

    this.features.add(e.clone().addClass('ear').addClass('-left').move(-offset, 0));
    this.features.add(e.clone().addClass('ear').addClass('-right').move(offset, 0));
  }

  nose(n) {
    const w = n.bbox().width;
    this.features.add(n.addClass('nose').move(-w/2, 200));
  }

  mouth(n) {
    const w = n.bbox().width;
    this.features.add(n.addClass('mouth').move(-w/2, 300));
  }

  hair(n) {
    const w = n.bbox().width;
    this.features.add(n.addClass('hair').move(-w/2, -100));
  }

  torso(t) {
    const w = t.bbox().width;
    this.container.add(t.addClass('torso').move(0, 400));
  }

  bbox() {
    return this.container.bbox();
  }

  addClass(c) {
    this.container.addClass(c);
    return this;
  }

  move(x, y) {
    this.container.move(x, y);
  }

  svg() {
    // console.log("MOVE", this.container.bbox().width/2)
    // this.features.x(this.container.bbox().width/2);
    // this.features.transform({
    //   translateX: this.container.bbox().width/2
    // })


    this.features.viewbox(-(this.container.bbox().width/2), 0, this.container.bbox().width, this.container.bbox().height);
    // console.log(this.container.svg());
    return this.container.svg();
  }
}