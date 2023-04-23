const fs = require('fs');
const CLI = require('./cli')
const square = require('./square')
const circle = require('./circle')
const triangle = require('./triangle')

class SVG {
    constructor(){
        this.textElement = `${text}`,
        this.shapeElement =`${shape}`
    }
    
    //look up how to writefile for SVG files
    writeToFile(fileName, data){
      var input =CLI(data);
      fs.writeFile()
    }
  }



module.exports = SVG;