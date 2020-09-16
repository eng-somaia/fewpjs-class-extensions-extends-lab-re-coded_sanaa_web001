class Polygon {
  construct (array){
    this.array = array;
  }

  get countSides () {
    return this.array.length;
  }

  get perimeter () {
    let sum = this.array.reduce((accum, side) =>  side + accum )
    return sum;
}

}
class Triangle extends Polygon {
  get isValid () {
    if (this.array[0] + this.array[1] === this.array[2] )
    return true;
    else
    return false;
  }
}
