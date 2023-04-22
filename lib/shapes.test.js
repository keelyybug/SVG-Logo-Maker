const {Square,Triangle,Circle} = require('./shapes');

describe("Circle", ()=> {
    test('should render green circle', () => { 
    const expectedSvg = `<circle cx="150" r="80" fill="green" />`;
    const circle = new Circle();
    circle.setColor("green");
    const actualSvg = circle.render();
    expectedSvg(actualSvg).toEqual(expectedSvg);
    });
    test('should accept a color', () => {
        const expectedSvg =`<circle cx="150" r="80" fill="blue" />`;
        const circle = new Circle();
        circle.setColor('blue');
        const actualSvg = circle.render();
        expectedSvg(actualSvg).toEqual(expectedSvg);
    });
})

describe("Square", ()=> {
    test('should render green square', () => { 
    const expectedSvg = `<rect x="90" y="40" width="120" height="120" fill="green" />`;
    const square = new Square();
    square.setColor("green");
    const actualSvg = square.render();
    expectedSvg(actualSvg).toEqual(expectedSvg);
    });
    test('should accept a color', () => {
        const expectedSvg =`<rect x="90" y="40" width="120" height="120" fill="green" />`;
        const square = new Square();
        square.setColor('blue');
        const actualSvg = square.render();
        expectedSvg(actualSvg).toEqual(expectedSvg);
    });
})

describe("Triangle", ()=> {
    test('should render green triangle', () => { 
    const expectedSvg = `<polygon points="150, 18 244, 182 56, 182" fill="green" />`;
    const triangle = new Triangle();
    triangle.setColor("green");
    const actualSvg = triangle.render();
    expectedSvg(actualSvg).toEqual(expectedSvg);
    });
    test('should accept a color', () => {
        const expectedSvg =`<polygon points="150, 18 244, 182 56, 182" fill="green" />`;
        const triangle = new Triangle();
        triangle.setColor('blue');
        const actualSvg = triangle.render();
        expectedSvg(actualSvg).toEqual(expectedSvg);
    });
})