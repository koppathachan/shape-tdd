import {expect} from "chai";
import {Geometry} from "../src/Geometry";
import {Point} from "../src/Point";
import {Circle} from "../src/Circle";
describe("Geometry", () => {

    function runForCenterOrigin(n: number, r: number, expected: Point[]) {
        it(`should return ${JSON.stringify(expected)} for radius = ${r} and no. of points = ${n}`, () => {
            let actual = Geometry.getNPointsOnCircle(n, r)
            expect(actual).to.be.deep.equals(expected);
        });
    }

    function runForCenterFirstQuadrant(n: number, r: number, expected: Point[]) {
        it(`should return ${JSON.stringify(expected)} for radius = ${r} and no. of points = ${n}`, () => {
            let actual = Geometry.getNPointsOnCircle(n, r, new Point(10, 5))
            expect(actual).to.be.deep.equals(expected);
        });
    }

    describe("getNPointsOnCircle", () => {
        runForCenterOrigin(1, 5, [new Point(5, 0)])
        runForCenterOrigin(1, 10, [new Point(10, 0)])
        runForCenterOrigin(2, 5, [new Point(-5, 0), new Point(5, 0)])
        runForCenterOrigin(4, 5, [new Point(0, 5), new Point(-5, 0), new Point(0, -5), new Point(5, 0)])
        runForCenterOrigin(4, 10, [new Point(0, 10), new Point(-10, 0), new Point(0, -10), new Point(10, 0)])

        runForCenterFirstQuadrant(4, 5, [new Point(10, 10), new Point(5, 5), new Point(10, 0), new Point(15, 5)])
    });
});


describe("Circle", () => {
    it("should return points on the given circle", () => {
        let circle = new Circle(5, new Point(10, 5));

        expect(circle.points(4)).to.be.deep.equals([new Point(10, 10), new Point(5, 5), new Point(10, 0), new Point(15, 5)]);
    });

    it("should return points on the given circle after it is updated", () => {
        let circle = new Circle(5, new Point(10, 5));

        expect(circle.points(4)).to.be.deep.equals([new Point(10, 10), new Point(5, 5), new Point(10, 0), new Point(15, 5)]);

        circle.Radius = 5;
        circle.Center = new Point(0, 0);

        expect(circle.points(4)).to.be.deep.equals([new Point(0, 5), new Point(-5, 0), new Point(0, -5), new Point(5, 0)]);
    });
});