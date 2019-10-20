// 1. Copy and paste your prototype in here and refactor into class syntax.




// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface 

// function CuboidMaker(length, width, height) {
//     this.length = length;
//     this.width = width;
//     this.height = height;

// }
// CuboidMaker.prototype.volume = function () {
//     return this.length * this.width * this.height;
// }
// CuboidMaker.prototype.surfaceArea = function () {
//     return (this.length * this.width) + (this.length * this.height) + (this.width * this.height);

// }

// refactored prototype
class CuboidMaker {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
    }
}

const cuboid = new CuboidMaker(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(`volume = ${cuboid.volume()}`); // 100
console.log(`surface area = ${cuboid.surfaceArea()}`); // 130

// sub Class
class CubeMaker extends CuboidMaker{
    constructor(length){
    super(length);
    }
    surface(){
        return (6 * Math.pow(this.length, 2))

    }
}

const babyCube = new CubeMaker (4);
console.log(`surface area from sub class method = ${babyCube.surface()}`);