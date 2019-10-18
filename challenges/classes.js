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
        return (this.length * this.width) + (this.length * this.height) + (this.width * this.height);
    }
}

const cuboid = new CuboidMaker(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// sub Class
// class CubeMaker extends CuboidMaker{
//     constructor(length, height, width, cubeMethod){
//     super(length, height, width)
//     this.cubeMethod = cubeMethod;
//     }
//     cubeMethod(){
//         return `Try as I might I cant think of another ${cubeMethod}`,
//     }
// }
// const babyCube = new CubeMaker (4,)4,4,some