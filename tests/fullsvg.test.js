const Triangle = require('../lib/triangle');
const Square = require('../lib/square');
const Circle = require('../lib/circle');



describe("Circle", () => {
    it("should take three input initials and fill them with the input color, and do the same with the input shape and the input shape color", () => {

        const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="pink"/>
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">LOL</text>
      
      </svg>`

      const [text, textColor, shapeColor] = ["LOL", "white", "pink"];
      const circle = new Circle(shapeColor, text, textColor);
      const actualSvg = circle.render();
      console.log(actualSvg);
      expect(actualSvg).toEqual(expectedSvg);
});
})

describe("Square", () => {
    it("should take three input initials and fill them with the input color, and do the same with the input shape and the input shape color", () => {

        const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="90" y="40" width="120" height="120" fill="pink"/>
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">LOL</text>
      
      </svg>`

      const [text, textColor, shapeColor] = ["LOL", "white", "pink"];
      const square = new Square(shapeColor, text, textColor);
      const actualSvg = square.render();
      expect(actualSvg).toEqual(expectedSvg);
});
})

describe("Triangle", () => {
        it("should take three input initials and fill them with the input color, and do the same with the input shape and the input shape color", () => {

            const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <polygon points="150, 18 244, 182 56, 182" fill="pink"/>
          
            <text x="150" y="150" font-size="60" text-anchor="middle" fill="white">LOL</text>
          
            </svg>`

          const [text, textColor, shapeColor] = ["LOL", "white", "pink"];
          const triangle = new Triangle(shapeColor, text, textColor);
          const actualSvg = triangle.render();
          expect(actualSvg).toEqual(expectedSvg);
    });
})

//test('should render green triangle', () => { 
    //const expectedSvg = `<polygon points="150, 18 244, 182 56, 182" fill="green" />`;
    //const triangle = new Triangle();
    //triangle.setColor("green");
    //const actualSvg = triangle.render();
    //expectedSvg(actualSvg).toEqual(expectedSvg);
   // });
    //test('should accept a color', () => {
    //    const expectedSvg =`<polygon points="150, 18 244, 182 56, 182" fill="green" />`;
     //   const triangle = new Triangle();
     //   triangle.setColor('blue');
     //   const actualSvg = triangle.render();
     //   expectedSvg(actualSvg).toEqual(expectedSvg);
     
     
//describe("Square", ()=> {
    //test('should render green square', () => { 
   //const expectedSvg = `<rect x="90" y="40" width="120" height="120" fill="green" />`;
    //const square = new Square();
    //square.setColor("green");
    //const actualSvg = square.render();
    //expectedSvg(actualSvg).toEqual(expectedSvg);
    //});
    //test('should accept a color', () => {
        //const expectedSvg =`<rect x="90" y="40" width="120" height="120" fill="green" />`;
        //const square = new Square();
        //square.setColor('blue');
        //const actualSvg = square.render();
        //expectedSvg(actualSvg).toEqual(expectedSvg);
    //});
//})
//describe("Circle", ()=> {
  //  test('should render green circle', () => { 
//    const expectedSvg = `<circle cx="150" r="80" fill="green" />`;
  //  const circle = new Circle();
    //circle.setColor("green");
   // const actualSvg = circle.render();
   // expectedSvg(actualSvg).toEqual(expectedSvg);
  //  });
 //   test('should accept a color', () => {
  //      const expectedSvg =`<circle cx="150" r="80" fill="blue" />`;
  //      const circle = new Circle();
     //   circle.setColor('blue');
    //    const actualSvg = circle.render();
   //     expectedSvg(actualSvg).toEqual(expectedSvg);
   // });
//})