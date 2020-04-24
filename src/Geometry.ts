import {Point} from "./Point";

export class Geometry {

    private static cos(theta: number) {
        let res = Number(Math.cos(theta).toFixed(2));
        return !res ? 0 : res;
    }

    private static sin(theta: number) {
        let res = Number(Math.sin(theta).toFixed(2));
        return !res ? 0 : res;
    }

    static getNPointsOnCircle(n: number, radius: number, center: Point = new Point(0, 0)): Point[] {
        let angle = 360 / n;
        let radians = angle * (Math.PI / 180);
        let points: Point[] = [];
        for (let i = 1; i <= n; i++) {
            let theta = radians * i;
            points.push(new Point(
                center.X + radius * this.cos(theta),
                center.Y + radius * this.sin(theta)
            ));
        }
        return points;
    }
}