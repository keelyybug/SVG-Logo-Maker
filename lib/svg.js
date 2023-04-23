const fs = require('fs');
const CLI = require('./cli')
class SVG {
    constructor(){
        this.textElement = `${text}`,
        this.shapeElement =`${shape}`,
        this.textColor = `${textColor}`,//?
        this.shapeColor= `${shapeColor}`//?
    }
    
    //look up how to writefile for SVG files
    createSvg(data){
    const svgMarkup = //(use classes)
    
    fs.writeFile('logo.svg', svgMarkup, function(err) {
      if (err) throw err;
      console.log('SVG file written!');
    });
}

}

module.exports = SVG;