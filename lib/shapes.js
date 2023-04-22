class Shape {
    constructor(color) {
        this.color = color;
    }
    setColor(color) {
        this.color=color;
    }
}

class Circle extends Shape{

}
class Square extends Shape{

}
class Triangle extends Shape{

}

module.exports = { Circle, Triangle, Square };