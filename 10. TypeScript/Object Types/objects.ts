// Object Types - Optional Properties
interface PaintOptions {
    shape: MyShape;
    xPos?: number; // The ? after de xPos indicates the optional property
    yPos?: number; // The ? after de yPos indicates the optional property
}
type MyShape = {

}
function getShape(): MyShape {
    return {};
}

function paintShape(opts: PaintOptions) {
    // We can just handle undefined specially by checking for it:
    let xPos = opts.xPos === undefined ? 0 : opts.xPos; // let xPos: number
    let yPos = opts.yPos === undefined ? 0 : opts.yPos; // let yPos: number
}
 
const shape = getShape();
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 });