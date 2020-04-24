import {Point} from "./Point";
import {Geometry} from "./Geometry";

export class Circle {

    set Radius(n: number) {
        this.radius = n;
    }

    set Center(point: Point) {
        this.center = point;
    }

    points(n) {
        return Geometry.getNPointsOnCircle(n, this.radius, this.center)
    }
    constructor(
        private radius: number,
        private center: Point
    ) {

    }
}