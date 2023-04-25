const Square = require('./square');
const Circle = require('./circle');
const Triangle = require('./triangle');
//const {shapeColor, shape, text, textColor} = require('./cli');


class SVG {
  generatelogo(data){// with const above change data to those factors so you dont need to do data.text etc
    let shape = undefined;
    if (shape === 'square') {
      return shape = new Square(data.shapeColor,data.text,data.textColor)
    } else if (shape==='circle'){
      return shape = new Circle(data.shapeColor,data.text,data.textColor)
    } else if (shape==='triangle') {
      return shape = new Triangle(data.shapeColor,data.text,data.textColor)
    }
    return this.shape.render
  }
}
  module.exports= SVG;