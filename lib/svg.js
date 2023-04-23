const square = require('./square')
const circle = require('./circle')
const triangle = require('./triangle')

class SVG {

  generatelogo(data){
    let shape = undefined;
    if (shape === 'square') {
      return shape = new square(data.shapeColor,data.text,data.textColor)
    } else if (shape==='circle'){
      return shape = new circle(data.shapeColor,data.text,data.textColor)
    } else if (shape==='triangle') {
      return shape = new triangle(data.shapeColor,data.text,data.textColor)
    }
    return this.shape.render
  }

}
  module.exports= SVG;